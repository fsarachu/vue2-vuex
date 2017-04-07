<template>
    <div>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';

    export default {
        methods: {
            ...mapMutations(['increment', 'decrement'])
        }
    };
</script>