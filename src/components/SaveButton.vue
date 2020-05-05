<template>
  <button v-on:click="$emit('store', 'index')">{{ label }}</button>
</template>

<script>
export default {
    props: ['index'],
  data() {
    return {
      label: 'Save'
    };
  },
};
</script>