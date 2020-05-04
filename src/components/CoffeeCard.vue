<template>
    <form id="coffee-card">
        <label>Blend</label>
        <input type="text" rows="1" v-model="blend" max-length="150">
        <div class="coffee-card-in" id="aroma">
            <label>Aroma</label>
            <input type="range" min="1" max="5" value="3">
        </div>
        <div class="coffee-card-in" id="acidity">
            <label>Acidity</label>
            <input type="range" min="1" max="5" value="3">
        </div>
        <div class="coffee-card-in" id="sweetness">
            <label>Sweetness</label>
            <input type="range" min="1" max="5" value="3">
        </div>
        <div class="coffee-card-in" id="body">
            <label>Body</label>
            <input type="range" min="1" max="5" value="3">
        </div>
        <div class="coffee-card-in" id="finish">
            <label>Finish</label>
            <input type="range" min="1" max="5" value="3">
        </div>
        <div id="overall-notes">
            <div id="flavor">
                <label>Flavor</label>
                <textarea rows="5" v-model="flavor"></textarea>
            </div>
            <div id="overall">
                <label>Overall</label>
                <textarea rows="5" v-model="overall"></textarea>
            </div>
        </div>
        <div id="rating"></div>
        <div></div>
        <p> You clicked me {{ count }} times!</p>
        <save-button></save-button>
    </form>
</template>

<script>
import NewCardButton from './NewCardButton';
import SaveButton from './SaveButton';
    var CoffeeCard = {
        props: ['count'],
        data() {
            return {
                blend: '',
                flavor: '',
                overal: ''
            }
        },
        components: {
            'save-button': SaveButton
        }
    }
    export default CoffeeCard
</script>