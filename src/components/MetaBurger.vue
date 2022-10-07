<template>
  <div class="imageBox">
    <img src="../images/burger.png" alt="MetaBurger" width="300" height="300" />
    <hr />
  </div>

  <div class="labelBox">
    <h1>MetaBurger</h1>
    <hr />
  </div>
  <h1 v-if="!connectedToMetamask">Connect to Metamask first!</h1>
  <h1 v-else-if="!connectedToGoerli">Connect to Goerli first!</h1>
  <div v-else class="form">
    <div class="aboutBox">
      <h2>Wanna buy me? Ok.</h2>
      <span>🌐 Network: Goerli</span><br />
      <span>🏠 Address: {{ getContractAddress }}</span
      ><br />
      <span>💰 Price: {{ burgerPrice }} GoerliETH</span><br />
      <span>👤 Owner: {{ owner }}</span><br />
      <span v-if="isGod">📝 Contract balance: {{ contractBalance }} GoerliETH</span><br />
    </div>
    <div class="buttonBox">
      <button class="buyButton" @click="buyBurger" v-if="!isOwner && !isGod">BUY</button>
      <button class="buyButton" @click="getMyMoney" v-if="isGod">Get My MONEY!</button>
      <div v-if="isOwner">
        <div class="inputBox">
          <span>💸 New price: </span>
          <input type="text" placeholder="Price in ETH" v-model="newBurgerPrice">
        </div>
        <button class="buyButton" @click="changePrice" >Change price</button>
      </div>
      
    </div>
  </div>
</template>

<script>
import { ethers } from "ethers";

export default {
  data() {
    return {
      burgerPrice: null,
      newBurgerPrice:null,
      owner: null,
      god:null,
      connectedToMetamask: false,
      connectedToGoerli: false,
      isOwner:false,
      isGod:false,
      contractBalance:0,
    };
  },
  methods: {
    async checkOwnerAndGod(){
      if (this.connectToMetamask && this.connectedToGoerli) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();

        const metaBurger = new ethers.Contract(
          this.getContractAddress,
          this.getContractAbi,
          signer
        );
        let god = await metaBurger.god();
        let owner = await metaBurger.owner();
        if (god == await signer.getAddress()){
        this.isGod = true ;
        }else{
          this.isGod = false ;
        }
        if (owner == await signer.getAddress()){
        this.isOwner = true ;
        }else{
          this.isOwner = false ;
        }
      }

    },
    async connectToMetamask() {
      if (window.ethereum != undefined) {
        try {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          await provider.send("eth_requestAccounts", []);
          this.connectedToMetamask = true;
        } catch (error) {
          this.connectedToMetamask = false;
          console.log(error);
        }
      }
    },
    async changeChainToGoerli() {
      try {
        this.connectedToGoerli = false;
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x5" }],
        });
        this.connectedToGoerli = true;
      } catch (error) {
        this.connectedToGoerli = false;
        console.log(error);
      }
    },
    async getBurgerInfo() {
      if (this.connectToMetamask && this.connectedToGoerli) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();

        const metaBurger = new ethers.Contract(
          this.getContractAddress,
          this.getContractAbi,
          signer
        );
        this.burgerPrice = ethers.utils.formatEther(await metaBurger.price());
        this.owner = await metaBurger.owner();
        this.contractBalance = ethers.utils.formatEther(String(await provider.getBalance(this.getContractAddress)));
        this.checkOwnerAndGod();
      }
    },
    async buyBurger() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();

      try {
        let tx = {
          to: await this.$store.getters.getMetaBurgerContractAddress,
          value: ethers.utils.parseUnits(this.burgerPrice),
          gasLimit: 4465030
        };

        await signer.sendTransaction(tx);
      } 
      catch (error) {
        console.log(error);
      }
    },
    async changePrice() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();

      
      const metaBurger = new ethers.Contract(
          this.getContractAddress,
          this.getContractAbi,
          signer
        );

      await metaBurger.changePrice(ethers.utils.parseUnits(this.newBurgerPrice));

    },
    async getMyMoney() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();

      
      const metaBurger = new ethers.Contract(
          this.getContractAddress,
          this.getContractAbi,
          signer
        );

      await metaBurger.getMyMoney();

    },
  },

  computed: {
    getContractAddress() {
      return this.$store.getters.getMetaBurgerContractAddress;
    },
    getContractAbi() {
      return this.$store.getters.getMetaBurgerContractAbi;
    },
  },

  async mounted() {
    await this.connectToMetamask();
    await this.changeChainToGoerli();
    await this.getBurgerInfo();
    await this.checkOwnerAndGod();
    setInterval(this.getBurgerInfo, 1000);
    ethereum.on("chainChanged", this.changeChainToGoerli);
    ethereum.on("accountsChanged", this.checkOwnerAndGod);
  },
};
</script>

<style>
.imageBox {
  text-align: center;
}

.labelBox {
  text-align: center;
}

.aboutBox {
  text-align: left;
  margin: 20px;
}

.buttonBox {
  text-align: left;
  margin: 20px;
}

.inputBox{

margin-bottom: 20px;

}

.buyButton {
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
}

.buyButton:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing-buyButton 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

@keyframes glowing-buyButton {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.buyButton:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #222;
  left: 0;
  top: 0;
  border-radius: 10px;
}
</style>




