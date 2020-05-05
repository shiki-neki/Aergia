<template>
    <form id="coffee-card">
        <label>Blend</label>
        <input type="text" rows="1" v-model="card.blend" max-length="150">
        <div class="coffee-card-in" id="aroma">
            <label>Aroma</label>
            <input v-model="card.aroma" type="range" min="1" max="5" value="3">
            <input v-model="card.aromaNotes" type="text" rows="5"> 
        </div>
        <div class="coffee-card-in" id="acidity">
            <label>Acidity</label>
            <input v-model="card.acidity" type="range" min="1" max="5" value="3">
            <input v-model="card.acidityNotes" type="text" rows="5">
        </div>
        <div class="coffee-card-in" id="sweetness">
            <label>Sweetness</label>
            <input v-model="card.sweetness" type="range" min="1" max="5" value="3">
            <input v-model="card.sweetnessNotes" type="text" rows="5">
        </div>
        <div class="coffee-card-in" id="body">
            <label>Body</label>
            <input v-model="card.body" type="range" min="1" max="5" value="3">
            <input v-model="card.bodyNotes" type="text" rows="5">
        </div>
        <div class="coffee-card-in" id="finish">
            <label>Finish</label>
            <input v-model="card.finish" type="range" min="1" max="5" value="3">
            <input v-model="card.finishNotes" type="text" rows="5">
        </div>
        <div id="overall-notes">
            <div id="flavor">
                <label>Flavor</label>
                <input type="text" rows="5" v-model="card.flavor">
            </div>
            <div id="overall">
                <label>Overall</label>
                <input type="text" rows="5" v-model="card.overall">
            </div>
        </div>
        <div id="rating"></div>
        <div></div>
    </form>
</template>

<script>
import NewCardButton from './NewCardButton';
    var CoffeeCard = {
        props: ['card', 'index'],
        data() {
            return {
                
            }
        }
    }
    export default CoffeeCard
</script>