<template>
    <div>
        <button @click="increment(10)">Increment by 10</button>
        <button @click="decrement(2)">Decrement by 2</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        methods: {
            ...mapActions(['increment', 'decrement'])
        }
    };
</script>