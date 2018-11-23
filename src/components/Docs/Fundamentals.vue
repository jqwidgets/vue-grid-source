<template v-for="i in 1">
    <div class="fundamentals">
        <h1>Vue Grid - Fundamentals</h1>
        <h3>Configuration</h3>
        <p>
            After you have created your <span class="keyword">App.vue</span> file, here is how you should structure it:<br />
            The Grid component for Vue requires the following import:
        </p>
        <pre class="preCode"><code class="code">import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";</code></pre>
        <p>Add the <span class="keyword">jqxGrid</span> component to the components section of the the Vue class:</p>
        <pre class="preCode"><code>components: {
    JqxGrid
},
</code></pre>
        <h3>Template</h3>
        <p>
            The App.vue has a <span class="keyword">&lt;template&gt;</span> structural tag where we determine the application structure.
            There we will also set the tags for the new components - <span class="keyword">&lt;JqxGrid/&gt;</span>
        </p>
        <pre class="preCode"><code class="code">&lt;template>
    &lt;JqxGrid :theme="'material'" :width="width" :source="dataAdapter"
             :columns="columns" :columnsresize="true"
             :pageable="true">
    &lt;/JqxGrid>
&lt;/template></code></pre>
        <br />

        <h3>Properties</h3>
        <p>
            The properties of the <span class="keyword">&lt;JqxGrid/&gt;</span> component are defined in the <span>data</span> member of the Vue class.
            We should put them in the <span class="keyword">return</span> object of the data function:
        </p>
        <pre class="preCode"><code class="code">data: function () {
    return {
        width: '99%',
        dataAdapter: new jqx.dataAdapter(this.source),
        columns: [
            { text: 'Name', datafield: 'name', width: 200 },
            { text: 'Beverage Type', datafield: 'type', width: 200 },
            { text: 'Calories', datafield: 'calories', width: 110 },
            { text: 'Total Fat', datafield: 'totalfat', width: 120 },
            { text: 'Protein', datafield: 'protein', minwidth: 120 }
        ]
    }
}</code></pre>
        <br />

        <h3>Events</h3>
        <p>
            The events in Vue are set as an attribute with <span class="keyword">@</span> prefix, for example:
        </p>
        <pre class="preCode"><code class="code">&lt;JqxGrid @pagechanged="onPageChanged()"
         :theme="'material'" :width="width" :source="dataAdapter"
         :columns="columns" :columnsresize="true"
         :pageable="true">
&lt;/JqxGrid></code></pre>
        <br />

        <p>
            All events that are bound to a component are implemented in the <span class="keyword">methods</span> member of the Vue class.
</p>
        <pre class="preCode"><code class="code">methods: {
    onPageChanged: function () {
        // Do something...
    }
}</code></pre>
        <br />

        <h3>Methods</h3>
        <p>
            To use a component's method we should have its reference. In Vue we refer to a component by the special <span class="keyword">$refs</span> property.
            Before that we need to add the desired name reference to that component:
        </p>
        <p>
            <pre class="preCode"><code>&lt;JqxGrid ref="myGrid"&gt;&lt;/JqxGrid&gt;</code></pre>
        </p>
        <p>
            Here how you can use a component&#39;s method:
        </p>
        <p>
            <pre class="preCode"><code>this.$refs.myGrid.getpaginginformation();</code></pre>
        </p>
        <pre class="preCode"><code class="code">methods: {
    // Add here all used callbacks and/or events
    onPageChanged: function () {
        // Do something...
        let info = this.$refs.myGrid.getpaginginformation();
        console.log(info);
    }
}</code></pre>
        <p>
            If we want to add additional methods we should also implement them in the <span class="keyword">methods</span> member.
        </p>
        <p>
            In case we need to do some precalculation or something else before the components are rendered, we should use the <span class="keyword">beforeCreate</span> member.
            In this case:
        </p>
        <pre class="preCode"><code class="code">beforeCreate: function () {
    // Add here any data where you want to transform before components be rendered
    this.source = {
        datatype: 'json',
        datafields: [
            { name: 'name', type: 'string' },
            { name: 'type', type: 'string' },
            { name: 'calories', type: 'int' },
            { name: 'totalfat', type: 'string' },
            { name: 'protein', type: 'string' }
        ],
        id: 'id',
        url: '/sampledata/beverages.txt'
    };
}</code></pre>
        <p>
            If you have followed the above steps, this is what the result would be:
        </p>
        <div>
            <JqxTabs ref="myTabs" :theme="'material'" :width="'100%'" :height="'100%'">
                <ul>
                    <li style="margin-left: 30px;">Preview</li>
                    <li>Source</li>
                </ul>
                <div>
                    <JqxGrid ref="myGrid" @pagechanged="onPageChanged()"
                             :theme="'material'" :width="width" :source="dataAdapter"
                             :columns="columns" :columnsresize="true"
                             :pageable="true">
                    </JqxGrid>
                </div>
                <div>
                    <pre><code class="code">&lt;template>
    &lt;JqxGrid ref="myGrid" @pagechanged="onPageChanged()"
             :theme="'material'" :width="width" :source="dataAdapter"
             :columns="columns" :columnsresize="true"
             :pageable="true">
    &lt;/JqxGrid>
&lt;/template>
&lt;script>
    // Import the components that will be used
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
    export default {
        components: {
            // Adding imported widgets here
            JqxGrid
        },
        data: function () {
            // Define properties which will use in the widget
            return {
                width: '99%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Name', datafield: 'name', width: 200 },
                    { text: 'Beverage Type', datafield: 'type', width: 200 },
                    { text: 'Calories', datafield: 'calories', width: 100 },
                    { text: 'Total Fat', datafield: 'totalfat', width: 120 },
                    { text: 'Protein', datafield: 'protein', minwidth: 120 }
                ]
            }
        },
        beforeCreate: function () {
            // Add here any data where you want to transform before components be rendered
            this.source = {
                datatype: 'json',
                datafields: [
                    { name: 'name', type: 'string' },
                    { name: 'type', type: 'string' },
                    { name: 'calories', type: 'int' },
                    { name: 'totalfat', type: 'string' },
                    { name: 'protein', type: 'string' }
                ],
                id: 'id',
                url: '/sampledata/beverages.txt'
            };
        },
        methods: {
            // Add here all used callbacks and/or events
            onPageChanged: function () {
                // Do something...
                let info = this.$refs.myGrid.getpaginginformation();
                console.log(info);
            }
        }
    }
&lt;/script></code></pre>
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
                width: '99%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Name', datafield: 'name', width: 200 },
                    { text: 'Beverage Type', datafield: 'type', width: 200 },
                    { text: 'Calories', datafield: 'calories', width: 100 },
                    { text: 'Total Fat', datafield: 'totalfat', width: 120 },
                    { text: 'Protein', datafield: 'protein', minwidth: 120 }
                ]
            }
        },
        mounted: function () {
            let codeSpans = document.getElementsByClassName('code');

            for (let i = 0; i < codeSpans.length; i++) {
                codeSpans[i].innerHTML = formatCode(codeSpans[i].innerHTML);
            }

            let buttons = document.getElementsByClassName('jqx-button');
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].removeAttribute('type');
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: 'json',
                datafields: [
                    { name: 'name', type: 'string' },
                    { name: 'type', type: 'string' },
                    { name: 'calories', type: 'int' },
                    { name: 'totalfat', type: 'string' },
                    { name: 'protein', type: 'string' }
                ],
                id: 'id',
                url: './sampledata/beverages.txt'
            };
        },
        methods: {
            onPageChanged: function () {
                let info = this.$refs.myGrid.getpaginginformation(); 
                console.log(info);
            }
        }
    }
</script>
<style>
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
