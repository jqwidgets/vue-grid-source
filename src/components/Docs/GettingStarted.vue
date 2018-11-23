<template>
    <div class="getting-started">
        <h1>Vue Grid - Getting Started</h1>
        <h3>Overview</h3>
        <p>
            Тhe Grid component for Vue is a powerful widget that displays tabular data. It offers rich support for interacting with data, including paging, grouping, sorting, filtering and editing.
        </p>
        <h3>Installation</h3>

        <p style="margin-bottom: 0.5em;"><span style="font-size: 15px;"><strong>I.</strong></span> First, install <span class="keyword">jQWidgets</span> dependency:</p>
        <pre class="preCode"><code><strong>npm install jqwidgets-scripts --save--dev</strong></code></pre>

        <p style="margin-bottom: 0.5em;"><span style="font-size: 15px;"><strong>II.</strong></span> Copy the <span class="keyword">styles</span> folder from <span class="keyword">node_modules/jqwidgets-scripts/jqwidgets</span> to the <span class="keyword">public</span> folder.</p>

        <p style="margin-bottom: 0.5em;"><span style="font-size: 15px;"><strong>III.</strong></span> Refer the <span class="keyword">jqx.base.css</span> file and the files of the other themes that you use in <span class="keyword">index.html</span>:</p>
        <pre class="preCode"><code><strong>&lt;link rel="stylesheet" type="text/css" href="./styles/jqx.base.css" /></strong></code></pre>

        <p style="margin-bottom: 0.5em;">
            <span style="font-size: 15px;"><strong>IV.</strong></span> After we have jQWidgets installed, we can start using them in our Vue application.<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You should import <span class="keyword">JqxGrid</span> in the component's file:
        </p>
        <pre class="preCode"><code><strong>import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';</strong></code></pre>

        <p style="margin-bottom: 0.5em;"><span style="font-size: 15px;"><strong>V.</strong></span> And then add it to the component section like this:</p>
        <pre class="preCode"><code>components: {
    JqxGrid
},
</code></pre>
 
        <p style="margin-bottom: 0.5em;">
            <span style="font-size: 15px;"><strong>VI.</strong></span> Then, you are ready to use <span class="keyword">JqxGrid</span> in the Vue template. <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Here is a simple example of how jQWidgets Grid is used in Vue:
        </p>
        <div>
            <JqxTabs ref="myTabs" :theme="'material'" :width="'100%'" :height="'100%'">
                <ul>
                    <li style="margin-left: 30px;">Preview</li>
                    <li>Source</li>
                </ul>
                <div>
                    <JqxGrid :theme="'material'" :width="'99%'" :source="dataAdapter" :columns="columns" />
                </div>
                <div>
                    <pre><code ref="code"> &lt;template>
     &lt;JqxGrid :width="'98%'" :source="dataAdapter" :columns="columns" />
 &lt;/template>
 
 &lt;script>
 import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
 export default {
     components: {
         JqxGrid
     },
     data: function () {
         return {
             dataAdapter: new jqx.dataAdapter(this.source),
             columns: [
                 { text: 'Contact Name', datafield: 'ContactName', width: 240 },
                 { text: 'Contact Title', datafield: 'Title', width: 240 },
                 { text: 'City', datafield: 'City', width: 150 },
                 { text: 'Country', datafield: 'Country' }
             ]
         }
     },
     beforeCreate: function () {
         this.source = {
             localdata: [
                 ['Maria Anders', 'Sales Representative', 'Berlin', 'Germany'],
                 ['Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico'],
                 ['Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico'],
                 ['Thomas Hardy', 'Sales Representative', 'London', 'UK'],
                 ['Christina Berglund', 'Order Administrator', 'Lule', 'Sweden'],
                 ['Hanna Moos', 'Sales Representative', 'Mannheim', 'Germany'],
                 ['Frdrique Citeaux', 'Marketing Manager', 'Strasbourg', 'France'],
                 ['Martn Sommer', 'Owner', 'Madrid', 'Spain'],
                 ['Laurence Lebihan', 'Owner', 'Marseille', 'France'],
                 ['Elizabeth Lincoln', 'Accounting Manager', 'Tsawassen', 'Canada'],
                 ['Victoria Ashworth', 'Sales Representative', 'London', 'UK'],
                 ['Patricio Simpson', 'Sales Agent', 'Buenos Aires', 'Argentina']
             ],
             datafields: [
                 { name: 'ContactName', type: 'string', map: '0' },
                 { name: 'Title', type: 'string', map: '1' },
                 { name: 'City', type: 'string', map: '2' },
                 { name: 'Country', type: 'string', map: '3' }
             ],
             datatype: 'array'
         };
     }
 }
 &lt;/script>
</code></pre>
                </div>
            </JqxTabs>
        </div>
    </div>
</template>
<script>
    import JqxTabs from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtabs.vue';
    import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';

    export default {
        components: {
            JqxTabs,
            JqxGrid
        },
        data: function () {
            return {
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Contact Name', datafield: 'ContactName', width: 240 },
                    { text: 'Contact Title', datafield: 'Title', width: 240 },
                    { text: 'City', datafield: 'City', width: 150 },
                    { text: 'Country', datafield: 'Country' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: [ 
                    ['Maria Anders', 'Sales Representative', 'Berlin', 'Germany'],
                    ['Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico'],
                    ['Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico'],
                    ['Thomas Hardy', 'Sales Representative', 'London', 'UK'],
                    ['Christina Berglund', 'Order Administrator', 'Lule', 'Sweden'],
                    ['Hanna Moos', 'Sales Representative', 'Mannheim', 'Germany'],
                    ['Frdrique Citeaux', 'Marketing Manager', 'Strasbourg', 'France'],
                    ['Martn Sommer', 'Owner', 'Madrid', 'Spain'],
                    ['Laurence Lebihan', 'Owner', 'Marseille', 'France'],
                    ['Elizabeth Lincoln', 'Accounting Manager', 'Tsawassen', 'Canada'],
                    ['Victoria Ashworth', 'Sales Representative', 'London', 'UK'],
                    ['Patricio Simpson', 'Sales Agent', 'Buenos Aires', 'Argentina']
                ],
                datafields: [
                    { name: 'ContactName', type: 'string', map: '0' },
                    { name: 'Title', type: 'string', map: '1' },
                    { name: 'City', type: 'string', map: '2' },
                    { name: 'Country', type: 'string', map: '3' }
                ],
                datatype: 'array'
            };
        },
        mounted: function (){
            this.$refs.code.innerHTML = formatCode(this.$refs.code.innerHTML);
        }
    }
</script>
<style scoped>
    h3 {
        margin-top: 25px !important;
    }
    
    .preCode {
        display: inline-block;
        padding: 0.5em;
        margin-top: 0;
        background-color: #f9f9f9;
        border-radius: 5px;
    }
</style>
