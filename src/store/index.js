import { createStore } from 'vuex';

const store = createStore({

    state(){
        return{

            counter:0,
            notes:[],
            metaBurgerOwnerAddress:null,
            metaBurgerContracrAddress:'0xF28a3485DD483a4a427A6536A501e6E89b89eB3C',
            metaBurgerPrice:null,

        }
    },

    getters:{

        getCounter(state){

            return state.counter;

        },
        getNotes(state){
            return state.notes;
        }

    },

    mutations:{

        incrementCounter(state){

            state.counter++;

        },

        decrementCounter(state){

            state.counter--;

        },
        addNote(state,_note){

            state.notes.push(_note);

        }

    },
    actions:{

        incrementCounter(context){

            context.commit('incrementCounter');

        },

        decrementCounter(context){

            context.commit('decrementCounter');

        },
        addNote(context,_note){
            context.commit('addNote',_note);
            // state.notes.push(_note);

        }
    }
})

export default store;