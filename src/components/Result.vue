<template>
    <p>{{ stringCounter }}</p>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        computed: mapGetters(
            [
                'stringCounter'
            ]
        )
    };
</script>