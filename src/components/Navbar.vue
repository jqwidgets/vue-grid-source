<template>
    <b-navbar toggleable="md" variant="light" type="light">
        <div class="container">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item to="/"><img class="logo" src="../assets/logo-jqwidgets.png" /></b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto"> 
                    <b-nav-item to="/demos">Demos</b-nav-item>
                    <b-nav-item to="/docs">Docs</b-nav-item>
                    <b-nav-item href="https://www.jqwidgets.com/blog/">Blog</b-nav-item>
                    <b-nav-item href="https://github.com/jqwidgets/vue-grid-source">GitHub</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </div>
    </b-navbar>
</template>
<script>
    export default {
        name: 'Navbar'  
    } 
</script> 
<style scoped> 
    .logo {
        height: 50px;
    }
</style>