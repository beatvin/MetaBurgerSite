<template>
    <span style="margin:10px;">{{getCounter}}</span><br>
    <button @click="incCounter" class="incButton">Inc</button>
    <button @click="decCounter" class="decButton">Dec</button>

</template>


<script>

    export default{

        methods:{

            incCounter(){
                this.$store.dispatch('incrementCounter');
            },
            decCounter(){
                this.$store.dispatch('decrementCounter');
            }

        },

        computed:{
            getCounter(){
                return this.$store.getters.getCounter;
            },
            
        }

    }

</script>


<style>

.incButton{

    width: 50px;
    height: 30px;
    margin: 10px;
    background: green;
    color: white;
    border: none;
    border-radius: 10%;
}

.incButton:hover{

width: 55px;
height: 35px;
margin: 10px;
background: greenyellow;
color: white;
border: none;
border-radius: 10%;
}

.incButton:active{

width: 55px;
height: 35px;
margin: 10px;
background: gray;
color: white;
border: none;
border-radius: 10%;
}

.decButton{

    width: 50px;
    height: 30px;
    margin: 10px;
    background: black;
    color: white;
    border: none;
    border-radius: 10%;

}


.decButton:hover{

width: 45px;
height: 25px;
margin: 10px;
background: gray;
color: white;
border: none;
border-radius: 10%;

}

.decButton:active{

width: 45px;
height: 25px;
margin: 10px;
background: white;
color: black;
border: none;
border-radius: 10%;

}

</style>