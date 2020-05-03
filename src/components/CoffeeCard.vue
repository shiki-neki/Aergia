<template>
    <div id="coffee-card">
        <h3>{{ blend }}</h3>
        <p> You clicked me {{ count }} times!</p>
    </div>
</template>
<script>
import NewCardButton from './NewCardButton';

    var CoffeeCard = {
        props: ['count'],
        data() {
            return {
                blend: 'Ethiopia',
            }
        }
    }
    export default CoffeeCard
</script>
<style>
    #coffee-card {
        border: 1px solid lemonchiffon;
        padding: 30px;
    }
</style>