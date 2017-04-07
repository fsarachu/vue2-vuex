<template>
    <div>
        <button @click="asyncIncrement({by:3, delay:1000})">Increment by 3 after 1 second</button>
        <button @click="asyncDecrement({by:5, delay:500})">Decrement by 5 after .5 second</button>
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