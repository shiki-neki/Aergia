<template>
  <button v-on:click="$emit('remove', 'index')">{{ label }} index: {{ index }}</button>
</template>

<script>
export default {
  props: ['index'],
  data() {

    return {
      label: 'Remove'
    };
  },
};
</script>