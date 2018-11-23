<template>
    <b-container class="demos">
        <b-row>
            <b-col cols="3">
                <div class="menu">
                    <p class="title">Demos</p>
                    <ul>
                        <li><router-link to="/demos/default-functionality">Default Functionality</router-link></li>
                        <li><router-link to="/demos/data-editing">Data Editing</router-link></li>
                        <li><router-link to="/demos/data-export">Data Export</router-link></li>
                        <li><router-link to="/demos/refresh-data">Refresh Data</router-link></li>
                        <li><router-link to="/demos/row-details">Row Details</router-link></li>
                        <li><router-link to="/demos/nested-grids">Nested Grids</router-link></li>
                        <li><router-link to="/demos/virtual-scrolling">Virtual Scrolling</router-link></li>
                        <li><router-link to="/demos/virtual-paging">Virtual Paging</router-link></li>
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

</template>
<script>

    export default {
        name: 'demos',
        components: {
        }
    }
</script>
<style scoped>
    ul {
        padding-left: 0;
        text-align: left;
    }

    li {
        display: block
    }
    .demos {
        margin-top: 50px;
    }
</style>
