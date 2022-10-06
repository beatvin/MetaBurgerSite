<template>
    <textarea cols="30" rows="10" v-model="note" style="resize:none;width: 400px;">
    </textarea><br>
    <button @click="pushNote">Add to notes</button><br><br>
    <span v-for="el in notes" :key="el">{{el}}<hr></span>
</template>

<script>

    export default{

        data(){

            return{

                note:null,
                notes:null

            }

        },
        methods:{

            pushNote(){
                this.$store.dispatch('addNote',this.note);
                this.notes = this.getNotes;
            }

        },
        computed:{

            getNotes(){

                return this.$store.getters.getNotes;

            }

        },
        mounted(){

            this.notes = this.getNotes;

        }


    }

</script>

<style>



</style>