<template>
  <div class="imageBox">
    <img src="../images/burger.jpg" alt="MetaBurger" width="300" height="300" />
    <hr />
  </div>

  <div class="labelBox">
    <h1>MetaBurger</h1>
    <hr />
  </div>

  <div class="aboutBox">
    <h2>Wanna buy me? Ok.</h2>
    <span>🌐 Network: Goerli</span><br />
    <span>🏠 Address:</span><br />
    <span>💰 Price:</span><br />
    <span>👤 Owner:</span><br />
  </div>
  <div class="buttonBox"><button class="buyButton">BUY</button></div>
</template>

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
  text-align: right;
  margin: 20px;
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


<script>
import { ethers } from "ethers";

// const metaBurger = new ethers.Contract(this.tokenAddress,this.tokenAbi,signer); 

export default {
  async mounted() {    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
  },
};
</script>

