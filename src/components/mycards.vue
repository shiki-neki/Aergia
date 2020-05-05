<template>
    <div>
        <h1>My cards</h1>
        <ul class="coffee-cards">
            <li v-for="(card, index) in storedCards" :key="index">
                <coffee-card :card="card" :index="index"></coffee-card>
                <div class="card-btns">
                    <remove-btn v-on:remove="removeStoredCard" :index="index"></remove-btn>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
// import SaveButtom from './SaveButton';
import RemoveButton from './RemoveButton';
import CoffeeCard from './CoffeeCard';

const cards = localStorage.getItem('storedCards');
export default {
    components: {
        'coffee-card': CoffeeCard,
        // 'save-btn': SaveButton,
        'remove-btn': RemoveButton
    },
    data() {
        return {
            storedCards: [],
            aromaQual: '',
            aromaQuan: '',
            aromaNotes: '',
            acidityQual: '',
            acidityQuan: '',
            acidityNotes: '',
            sweetnessQual: '',
            sweetnessQuan: '',
            sweetnessNotes: '',
            bodyQual: '',
            bodyQuan: '',
            bodyNotes: '',
            finishQual: '',
            finishQuan: '',
            finishNotes: '',
            blend: '',
            flavor: '',
            overall: ''
        }
    },
    mounted(){
        console.log('Mounted');
        if (localStorage.getItem('storedCards')) 
        try {
            this.storedCards = JSON.parse(localStorage.getItem('storedCards'));
        } catch(e) {
        localStorage.removeItem('storedCards')
      }
    },
    methods: {
        removeStoredCard(i) {
            this.storedCards.splice(i, 1);
            this.saveStoredCard();
        },
        saveStoredCard() {
            const parsed = JSON.stringify(this.cards);
            localStorage.setItem('storedCards', parsed);
        },
    }
}
</script>