<template>
    <footer class="page-footer">
        <b-navbar id="bottom-nav" toggleable="md" variant="light" type="light">
            <div class="container">
                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
                <b-collapse is-nav id="nav_collapse">
                    <b-navbar-nav>
                        <b-nav-item to="/">
                            <img class="bottom-logo" src="../assets/logo-jqwidgets.png" />
                            <div class="rights">jQWidgets &copy; 2011-2018. All Rights Reserved.</div>
                        </b-nav-item>   
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
    </footer>
</template>
<style scoped>
    footer {
        position: relative;
        margin-top: -100px;
        height: 100px;
        width: 100%;
        background-color: #f8f9fa;
        clear: both;
    }

    .bottom-logo {
        margin-top: 0;
        width: 200px;
    }

    .rights {
        font-size: 13px;
        font-family: none;
        color: rgba(0, 0, 0, 0.5);
        margin-top: 10px;
    }

    #bottom-nav {
        margin-bottom: 0;
    }
</style>