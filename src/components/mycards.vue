<template>
    <div>
        <h1>My cards (test)</h1>
        <div v-for="(card, index) in storedCards" :key="index">
            <my-cards-item :card="card" v-on:remove="removeStoredCard(index)" v-on:save="saveStoredCard(index)"/>
        </div>
    </div>
</template>

<script>
import MyCardsItem from './MyCardsItem';

export default {
    components: {
        'my-cards-item': MyCardsItem
    },
    data() {
        return {
            storedCards: []
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
        }
    }
}
</script>