<template>
    <div class="stored-coffee-card">
        <div :card="card" :index="index">Blend: {{ card.blend }}</div>
        <div>
            <h1>Aroma</h1>
            <div :card="card" :index="index">Quality: {{card.aromaQual}}</div>
            <div :card="card" :index="index">Quantity: {{card.aromaQuan}}</div>
            <div :card="card" :index="index">Notes: {{card.aromaNotes}}</div>
        </div>
        <div>
            <h1>Acidity</h1>
            <div :card="card" :index="index">Quality: {{card.acidityQual}}</div>
            <div :card="card" :index="index">Quantity: {{card.acidityQuan}}</div>
            <div :card="card" :index="index">Notes: {{card.acidityNotes}}</div>
        </div>
        <div>
            <h1>Sweetness</h1>
            <div :card="card" :index="index">Quality: {{card.sweetnessQual}}</div>
            <div :card="card" :index="index">Quantity: {{card.sweetnesQuan}}</div>
            <div :card="card" :index="index">Notes: {{card.sweetnessNotes}}</div>
        </div>
        <div>
            <h1>Body</h1>
            <div :card="card" :index="index">Quality: {{card.bodyQual}}</div>
            <div :card="card" :index="index">Quantity: {{card.bodyQuan}}</div>
            <div :card="card" :index="index">Notes: {{card.bodyNotes}}</div>
        </div>
        <div>
            <h1>Finish</h1>
            <div :card="card" :index="index">Quality: {{card.finishQual}}</div>
            <div :card="card" :index="index">Quantity: {{card.finishQuan}}</div>
            <div :card="card" :index="index">Notes: {{card.finishNotes}}</div>
        </div>
        <div :card="card" :index="index">Flavor 
            <p>{{ card.flavor }}</p>
        </div>
        <div :card="card" :index="index">Overall
            <p>{{ card.overall }}</p>
        </div>
    </div>
</template>

<script>
import CoffeeCard from './CoffeeCard'
export default {
    props: ['card', 'index'],
    data() {
        return {

        }
    },
}
</script>