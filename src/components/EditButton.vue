<template>
    <button v-on:click="$emit('toggleEditing')"> {{ label }} </button>
</template>
<script>
export default {
    props: ['isEditing'],
    data() {
        return {
        }
    },
    computed: {
        label: function () {
            return (this.isEditing ? "Save" : "Edit");
        }
    }
}
</script>