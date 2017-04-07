<template>
    <div id="app">
        <h1>Vuex</h1>

        <app-counter></app-counter>

        <hr>

        <app-async-counter></app-async-counter>

        <hr>

        <app-result></app-result>
    </div>
</template>

<script>
    import store from './store/store';
    import AppAsyncCounter from './components/AsyncCounter.vue';
    import AppCounter from './components/Counter.vue';
    import AppResult from './components/Result.vue';

    export default {
        components: {
            AppAsyncCounter,
            AppCounter,
            AppResult
        },
        store
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
