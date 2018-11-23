<template>
    <div class="docs">
        <b-container>
            <b-row>
                <b-col cols="3">
                    <div class="menu">
                        <p class="title">Guides</p>
                        <ul>
                            <li><router-link to="/docs/getting-started">Getting Started</router-link></li>
                            <li><router-link to="/docs/fundamentals">Fundamentals</router-link></li>
                            <li><router-link to="/docs/data-binding">Data Binding</router-link></li>
                            <li><router-link to="/docs/sorting">Sorting</router-link></li>
                            <li><router-link to="/docs/filtering">Filtering</router-link></li>
                            <li><router-link to="/docs/paging">Paging</router-link></li>
                            <li><router-link to="/docs/grouping">Grouping</router-link></li>
                            <li><router-link to="/docs/editing">Editing</router-link></li>
                        </ul>
                        <ul> 
                            <li><router-link to="/docs/api-reference">API Reference</router-link></li>
                        </ul>
                    </div>
                </b-col>
                <b-col cols="9">
                    <div class="content">
                        <router-view />
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<style scoped>
    ul {
        padding-left: 0;
        text-align: left;
    }

    .menu li {
        display: block
    }

    h1 {
        margin-bottom: 15px;
    }

    .docs {
        margin-top: 50px;
    }
</style>