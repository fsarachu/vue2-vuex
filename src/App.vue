<template>
    <div id="app">
        <h1>Vuex</h1>
        <app-counter></app-counter>
        <app-result></app-result>
    </div>
</template>

<script>
    import store from './store/store';
    import AppCounter from './components/Counter.vue';
    import AppResult from './components/Result.vue';

    export default {
        components: {
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
