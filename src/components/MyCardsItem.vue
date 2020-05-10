<template>
  <div>
    <div v-if="isEditing" class="coffee-cards">
      <coffee-card :card="card" :index="0"></coffee-card>
    </div>
    <div v-else>
      <stored-card :card="card" :index="0"></stored-card>
    </div>
    <div class="card-btns">
      <remove-btn v-on:remove="$emit('remove')" :index="0"></remove-btn>
      <edit-btn v-on:toggleEditing="toggleEditing" :isEditing="isEditing"></edit-btn>
    </div>
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
        'stored-card': StoredCard,
    },
    props: ['card'],
    data () {
        return {
            isEditing: false
        }
    },
    methods: {
        toggleEditing() {
            if (this.isEditing) {
                this.$emit('save');
            }
            this.isEditing = !this.isEditing;
        }
    }
}
</script>