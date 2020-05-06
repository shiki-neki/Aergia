<template>
    <div class="stored-coffee-card">
        <div :card="card" :index="index">Blend: {{ card.blend }}</div>
    </div>
</template>

<script>
import EditButton from './EditButton'
import CoffeeCard from './CoffeeCard'
export default {
    props: ['card', 'index'],
    data() {
        return {

        }
    },
}
</script>