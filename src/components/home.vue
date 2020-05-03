<template>
  <div>
    <h1>Home page for coffee diary</h1>
    <new-card></new-card>
  </div>
</template>

<script>
import NewCard from './NewCardButton';

export default {
  components: {
    'new-card': NewCard
  }
}
</script>