<template>
  <button v-on:click="$emit('addCount')">{{ label }}</button>
</template>

<script>
export default {
  data() {
    return {
      label: 'New Entry'
    };
  },
};
</script>