<template>
  <div>
    <h1>Home page for coffee diary</h1>
    <ul id="coffee-cards">
      <li v-for="(card, index) in count" :key="index">
        <coffee-card :count="card"></coffee-card>
      </li>
    </ul>
    <new-card-btn v-on:addCount="newCard"></new-card-btn>
  </div>
</template>

<script>
import NewCardButton from './NewCardButton';
import CoffeeCard from './CoffeeCard';
export default {
  components: {
    'new-card-btn': NewCardButton,
    'coffee-card': CoffeeCard
  },
  data () {
    return {
      count: []
    }
  },
  methods: {
    newCard: function(e) {
      console.log(this)
      this.count.push('test');
    }
  }
}
</script>