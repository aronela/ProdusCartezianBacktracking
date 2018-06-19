<template>
    <div>
        <div class="container">
        <h1>Produs Cartezian</h1>
            <br>
            <h3>Introduceti prima multime:</h3>
            <br>
            <input type="text" class="form-control" id="exampleFormControlInput1" v-model="multime1"
                      placeholder="Introduceti multimea">
            <br>
            <h3>Introduceti cea de a doua multime:</h3>
            <br>
            <input type="text" class="form-control" id="exampleFormControlInput2" v-model="multime2"
                   placeholder="Introduceti multimea">
            <br>
            <button type="button" class="btn btn-secondary" v-on:click="apeleazaProdusCartezian()">
                Produs Cartezian!
            </button>
            <br><br>
            <div v-if="solutiiAfisate.length">
                <h3>Produsul cartezian este format din multimile:</h3>
                {{ solutiiAfisate }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                solutie: [],
                multime1: '',
                multime2: '',
                multimi: [],
                solutiiAfisate: [],
            }
        },
        methods: {
            produsCartezian: function(k){
                for (let i = 0; i < this.multimi[k].length; i++) {
                    this.solutie.push(this.multimi[k][i]);

                    if (this.verificare(this.solutie)) {
                        console.log(this.solutie);
                        this.solutiiAfisate.push(this.solutie.slice(0));
                    } else {
                        this.produsCartezian(k + 1);
                    }

                    this.solutie.pop();
                }
            },
            verificare: function(solutie) {
                if (solutie.length === this.multimi.length) {
                    return true;
                }
            },
            apeleazaProdusCartezian: function(){
                this.multimi.push(this.multime1.split(','),this.multime2.split(','));
                this.produsCartezian(0);
            }
        }
    }
</script>

<style lang="scss">

</style>