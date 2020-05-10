<template>
    <div>
        <h1>My cards</h1>
        <ul v-if="isEditing" class="coffee-cards">
            <li v-for="(card, index) in storedCards" :key="index">
                <coffee-card :card="card" :index="index"></coffee-card>
                <div class="card-btns">
                    <remove-btn v-on:remove="removeStoredCard" :index="index"></remove-btn>
                </div>
            </li>
        </ul>
        <ul v-else>
            <li v-for="(card, index) in storedCards" :key="index">
                <stored-card :card="card" :index="index"></stored-card>
                <div class="card-btns">
                </div>
            </li>
        </ul>
        <edit-btn v-on:toggleEditing="toggleEditing" :isEditing="isEditing"></edit-btn>
    </div>
</template>

<script>
import SaveButton from './SaveButton';
import RemoveButton from './RemoveButton';
import EditButton from './EditButton';
import CoffeeCard from './CoffeeCard';
import StoredCard from './StoredCard';

export default {
    components: {
        'coffee-card': CoffeeCard,
        'save-btn': SaveButton,
        'edit-btn': EditButton,
        'remove-btn': RemoveButton,
        'stored-card': StoredCard
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
            overall: '',
            isEditing: false
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
        toggleEditing() {
            this.isEditing = !this.isEditing;
        }
    }
}
</script>