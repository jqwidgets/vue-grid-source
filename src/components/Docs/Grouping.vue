<template>
    <div class="grouping-docs">
        <h1>Vue Grid - Grouping</h1>
        <br />
        The jqxGrid component supports data grouping against one or more columns.
        <br /><br />
        Grouping is allowed if the <span class="keyword">groupable</span> property is set to true. End-users can group data by dragging column headers to the Group Panel.
        This panel's visibility is controlled by the <span class="keyword">showgroupsheader</span> property.
        <br /><br />
        The code example below shows a Grid templatate with one grouping column:
        <pre class="preCode"><code class="code">&lt;JqxGrid ref="myGrid" :width="width" :source="dataAdapter" :columns="columns"
         :groupable="true" :groups="['Title']">
&lt;/JqxGrid></code></pre>
        <br />

        <strong>Basic Grid with Grouping</strong>
        <br /><br />

        <div>
            <JqxTabs :theme="'material'" :width="'100%'" :height="'100%'">
                <ul>
                    <li style="margin-left: 30px;">Preview</li>
                    <li>Source</li>
                </ul>
                <div>
                    <JqxGrid ref="myGrid" :theme="'material'" :width="width" :source="source" :columns="columns"
                             :groupable="true" :groups="['Title']">
                    </JqxGrid>
                </div>
                <div>
                    <pre><code class="code">&lt;template>
    &lt;JqxGrid ref="myGrid" :theme="'material'" :width="width" :source="source" :columns="columns" 
             :groupable="true" :groups="['Title']">
    &lt;/JqxGrid>
&lt;/template> 
&lt;script>
import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
    export default {
        components: {
            JqxGrid
        },
        data: function () {
            return {
                width: '99%',
                source: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Contact Name', datafield: 'ContactName' },
                    { text: 'Contact Title', datafield: 'Title' },
                    { text: 'City', datafield: 'City' },
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
        <br />
        To hide the grouping panel, set the <span class="keyword">showgroupsheader</span> property to false.
        <br /><br />
        <pre class="preCode"><code class="code">&lt;template>
    &lt;JqxGrid ref="myGrid" :width="800" :source="dataAdapter" :columns="columns"
             :groupable="true" :groups="['Title']" :showgroupsheader="false" /> 
&lt;/template></code></pre>
        <br />
        The <span class="keyword">addgroup</span>, <span class="keyword">insertgroup</span>, <span class="keyword">removegroup</span> and <span class="keyword">removegroupat</span>
        functions enable groups manipulation with the Grid API.
        <br /><br />
        <pre class="preCode"><code class="code">this.$refs.myGrid.addgroup('City');</code></pre>
        <br />
        *The functions should be called after the Grid data is loaded. When the data is loaded and the Grid is ready, the <span class="keyword">bindingcomplete</span> event is raised.<br />
        The <span class="keyword">closeablegroups</span> property enables or disables the close buttons displayed in each group header.
        <br /> <br />
        <pre class="preCode"><code class="code">&lt;template>
    &lt;JqxGrid ref="myGrid" :width="800" :source="dataAdapter" :columns="columns"
             :groupable="true" :groups="['Title']" :closeablegroups="false" />
&lt;/template></code></pre>
        <br />
        The <span class="keyword">expandgroup</span> and <span class="keyword">collapsegroup</span> functions expand or collapse a group at a specific index. The code below expands the second group:
        <br /><br />
        <pre class="preCode"><code class="code">this.$refs.myGrid.expandgroup(1);</code></pre>
        <br />
        The <span class="keyword">expandallgroups</span> and <span class="keyword">collapseallgroups</span> functions expand or collapse all groups in the Grid.
        <br /><br />
        <pre class="preCode"><code class="code">this.$refs.myGrid.expandallgroups();</code></pre>
        <br />
        When a group is expanded or collapsed, the <span class="keyword">groupexpand</span> or <span class="keyword">groupcollapse</span> event is raised.
        <br /><br />
        <pre class="preCode"><code class="code">&lt;JqxGrid ref="myGrid" @groupexpand="onGroupExpand($event)"
         :width="width" :source="dataAdapter" :columns="columns"
         :groupable="true" :groups="['Title']">
&lt;/JqxGrid></code></pre>
        <br />
        <pre class="preCode"><code class="code">methods: {
    onExpandGroup: function (event) {
        let args = event.args;
        let group = args.group;
        let level = args.level;
    }
}</code></pre>
        <br />
        The <span class="keyword">groupsexpandedbydefault</span> boolean property specifies the default state of the groups when displayed in the Grid. By default all groups are collapsed.
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
                source: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Contact Name', datafield: 'ContactName' },
                    { text: 'Contact Title', datafield: 'Title' },
                    { text: 'City', datafield: 'City' },
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
        mounted: function () {
            let codeSpans = document.getElementsByClassName('code');

            for (let i = 0; i < codeSpans.length; i++) {
                codeSpans[i].innerHTML = formatCode(codeSpans[i].innerHTML);
            }
        }
    }
</script>