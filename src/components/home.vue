<template>
  <div>
    <h1>Home page for coffee diary</h1>
    <ul id="coffee-cards">
      <li v-for="(card, index) in cards" :key="index">
        <coffee-card :count="card"></coffee-card>
        <div class="card-btns">
          <save-btn></save-btn>
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
  },
  methods: {
    addCard() {
      if(!this.addCard) {
        return;
      }
      this.cards.push(this.addCard);
      this.saveCard();
    },
    removeCard(i) {
      this.cards.splice(i, 1);
      this.saveCard()
    },
    saveCard() {
      const parsed = JSON.stringify(this.cards);
      localStorage.setItem('cards', parsed);
    }
  }
}
</script>