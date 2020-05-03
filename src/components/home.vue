<template>
  <div>
    <h1>Home page for coffee diary</h1>
    <new-card-btn></new-card-btn>
  </div>
</template>

<script>
import NewCardButton from './NewCardButton';

export default {
  components: {
    'new-card-btn': NewCardButton
  }
}
</script>