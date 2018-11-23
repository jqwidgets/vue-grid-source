<template>
    <div id="app">
        <Navbar></Navbar>
        <router-view id="main" />
        <PageFooter></PageFooter>
    </div>
</template>
<script>
    import Navbar from './components/Navbar.vue';
    import PageFooter from './components/Footer.vue';

    export default {
        components: {
            Navbar,
            PageFooter
        } 
    }
</script> 
<style>
    @import 'assets/app.css';
</style>
 