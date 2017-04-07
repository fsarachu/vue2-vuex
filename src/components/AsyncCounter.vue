<template>
    <div>
        <button @click="asyncIncrement">Increment</button>
        <button @click="asyncDecrement">Decrement</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        methods: {
            ...mapActions(['asyncIncrement', 'asyncDecrement'])
        }
    };
</script>