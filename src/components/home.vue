<template>
  <div>
    <h1>Home page for coffee diary</h1>
    <ul class="coffee-cards">
      <li v-for="(card, index) in cards" :key="index">
        <coffee-card :card="card" :index="index"></coffee-card>
        <div class="card-btns">
          <save-btn v-on:store="storeCard" :index="index"></save-btn>
          <remove-btn v-on:remove="removeCard" :index="index"></remove-btn>
        </div>
      </li>
    </ul>
    <new-card-btn v-on:addCount="addCard"></new-card-btn>
  </div>
</template>

<script>
import NewCardButton from './NewCardButton';
import CoffeeCard from './CoffeeCard';
import SaveButton from './SaveButton';
import RemoveButton from './RemoveButton'
function generateEmptyCard() {
  return { 
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
}
export default {
  components: {
    'new-card-btn': NewCardButton,
    'coffee-card': CoffeeCard,
    'save-btn': SaveButton,
    'remove-btn': RemoveButton
  },
  data() {
    return {
      cards: [],
      storedCards: [],
      newCard: null
    }
  },
  mounted() {
    if(localStorage.getItem('cards')) {
      try {
        this.cards = JSON.parse(localStorage.getItem('cards'))
      } catch(e) {
        localStorage.removeItem('cards')
      }
    }
    if(localStorage.getItem('storedCards')) {
      try {
        this.cards = JSON.parse(localStorage.getItem('storedCards'))
      } catch(e) {
        localStorage.removeItem('storedCards')
      }
    }
  },
  methods: {
    addCard() {
      if(!this.addCard) {
        return;
      }
      this.cards.push(generateEmptyCard());
      this.saveCard();
    },
    removeCard(i) {
      this.cards.splice(i, 1);
      this.saveCard()
    },
    saveCard() {
      const parsed = JSON.stringify(this.cards);
      localStorage.setItem('cards', parsed);
    },
    storeCard(i) {
      var card = this.cards.splice(i, 1)[0];
      this.storedCards.push(card);
      const stored = JSON.stringify(this.storedCards);
      localStorage.setItem('storedCards', stored);
    }
  },
  watch: {
    cards:  {
      deep: true,
      handler(value) { 
        this.saveCard()
      }
    }
  }
}
</script>