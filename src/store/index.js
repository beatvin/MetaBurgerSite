import { createStore } from 'vuex';

const store = createStore({

    state(){
        return{       
            metaBurgerContractAddress:'0xF28a3485DD483a4a427A6536A501e6E89b89eB3C',
            metaBurgerContractAbi:[

                'function owner() external view returns(address)',
                'function god() external view returns(address)',
                'function price() external view returns(uint256)',
                'function messageForOwner() external view returns(string)',
                'function changePrice(uint256 _newPrice) external returns(bool)',
                ' function getMyMoney() external'

            ]
        }
    },

    getters:{

        getMetaBurgerContractAddress(state){

            return state.metaBurgerContractAddress;

        },
        getMetaBurgerContractAbi(state){

            return state.metaBurgerContractAbi;

        }

    },

})

export default store;