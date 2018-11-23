<template>
    <div class="sorting-docs">
        <h1>Vue Grid - Sorting</h1>
        <br />
        The <span class="keyword">sortable</span> property enables or disables the data sorting.<br />
        In the code example below, the Grid data sorting is enabled:
        <br /><br />
        <pre class="preCode"><code class="code"> &lt;JqxGrid :width="width" :source="dataAdapter" :columns="columns"
    :sorting="true">
&lt;/JqxGrid></code></pre>
        <br />
        To enable or disable the sorting of a Grid column, you can set its <span class="keyword">sortable</span> property to false. <br />
        In the code example below, the sorting of the "ShipName" column is disabled.
        <br /> <br />
        <pre class="preCode"><code class="code">columns: [
    { text: 'Ship Name', datafield: 'ShipName', width: 250, sortable: false },
    { text: 'Shipped Date', datafield: 'ShippedDate', width: 230, cellsformat: 'D' },
    { text: 'Freight', datafield: 'Freight', width: 130, cellsformat: 'F2', cellsalign: 'right' },
    { text: 'Ship Address', datafield: 'ShipAddress', width: 350 },
    { text: 'Ship City', datafield: 'ShipCity', width: 100 },
    { text: 'Ship Country', datafield: 'ShipCountry', width: 100 }
]</code></pre>
        <br />
        When the sorting data type is Date, Number or Boolean, the <span class="keyword">type</span> property in the <span class="keyword">datafields</span> array should be set.
        <br />
        In this code example, the data type of the ShippedDate column is Date and the <span class="keyword">type</span> property is set to "date". The
        Freight column displays floating-point numbers and the <span class="keyword">type</span> property is set to 'float'.
        <br /> <br />
        <pre class="preCode"><code class="code">this.source = {
    datatype: "xml",
    datafields: [
        { name: 'ShippedDate', type: 'date' },
        { name: 'Freight', type: 'float' },
        { name: 'ShipName' },
        { name: 'ShipAddress'},
        { name: 'ShipCity'},
        { name: 'ShipCountry' }
    ],
    root: "entry",
    record: "content",
    id: 'OrderID',
    url: url,
    sortcolumn: 'ShipName',
    sortdirection: 'asc'
};</code></pre>
        <br />

        The <span class="keyword">sortcolumn</span> property specifies the default Grid sort column, i.e. when the grid is displayed, the data will be sorted.
        The <span class="keyword">sortdirection</span> property specifies the sort order of the sort column.
        <br /><br />
        <strong>Sorting with the Grid API</strong>
        <br /><br />
        The <span class="keyword">sortby</span> function can be used to sort the Grid through the API. This function should be called when the grid data is fully loaded.
        The first parameter is the Column's dataField. The second parameter is the sort order - 'asc' or 'desc'.
        <br /> <br />

        <pre class="preCode"><code class="code">mounted: function () {
    this.$refs.myGrid.sortby('ShipName', 'asc');
}</code></pre>
        <br />
        To remove the sorting, call the <span class="keyword">removesort</span> function. <br />
        When the data is sorted, the Grid raises the <span class="keyword">sort</span> event.
        <br /> <br />

        <pre class="preCode"><code class="code">&lt;JqxGrid ref="myGrid" @sort="onSort($event)"
         :width="width" :source="source" :columns="columns">
&lt;/JqxGrid></code></pre>
        <br />
        <div>
            <JqxTabs :theme="'material'" :width="'100%'" :height="'100%'">
                <ul>
                    <li style="margin-left: 30px;">Preview</li>
                    <li>Source</li>
                </ul>
                <div>
                    <JqxGrid ref="myGrid" @sort="onSort($event)"
                             :theme="'material'" :width="width" :source="dataAdapter"
                             :columns="columns" :sortable="true">
                    </JqxGrid>
                </div>
                <div>
                    <pre><code class="code">&lt;template>
    &lt;JqxGrid ref="myGrid" @sort="onSort($event)"
             :theme="'material'" :width="width" :source="dataAdapter" 
             :columns="columns" :sortable="true">
    &lt;/JqxGrid>
&lt;/template>
&lt;script>
import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
export default {
    components: {
        JqxGrid
    },
    data: function () {
        return {
            width: '99%',
            dataAdapter: new jqx.dataAdapter(this.source),
            columns: [
                { text: 'Ship Name', datafield: 'ShipName', width: 250 },
                { text: 'Shipped Date', datafield: 'ShippedDate', width: 230, cellsformat: 'D' },
                { text: 'Freight', datafield: 'Freight', width: 130, cellsformat: 'F2', cellsalign: 'right' },
                { text: 'Ship Address', datafield: 'ShipAddress', width: 350 },
                { text: 'Ship City', datafield: 'ShipCity', width: 100 },
                { text: 'Ship Country', datafield: 'ShipCountry', width: 100 }
            ]
        }
    },
    beforeCreate: function () {
        this.source = {
            datatype: "xml",
            datafields: [
                { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
                { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
                { name: 'ShipName', map: 'm\\:properties>d\\:ShipName', type: 'string' },
                { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress', type: 'string' },
                { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity', type: 'string' },
                { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry', type: 'string' }
            ],
            root: "entry",
            record: "content",
            id: 'OrderID',
            url: '/sampledata/orders.xml',
            sortcolumn: 'ShipName',
            sortdirection: 'asc'
        };
    },
    methods: {
        onSort: function (event) {
            let sortinformation = event.args.sortinformation;
            let sortdirection = sortinformation.sortdirection;
            let sortcolumn = sortinformation.sortcolumn;
            console.log("Sorted by: " + sortcolumn);
        }
    }
}
&lt;/script>
</code></pre>
                </div>
            </JqxTabs>
        </div> <br /> <br />
        By default, when the sorting is enabled and the user clicks a column's header, the sort order is changed.
        The jqxGrid <span class="keyword">sorttogglestates</span> property can be used to modify this behavior. The possible values of this property are:
        <br /> <br />
        0 - disables toggling. The Grid is sortable only through the API.<br />
        1 - enables togging. Click on a column header toggles the sort direction.  In this mode, there are 2 possible sort direction values - 'asc', and 'desc'.<br />
        2 - default toggle mode. Click on a column header toggles the sort direction. In this mode, there are 3 possible sort direction values - 'asc', 'desc' and null.
        When the sort direction is null, the sorting is cleared.
        <br /><br />
        <strong>Custom Sorting</strong>
        <br /><br />
        To override the default sorting logic, you need to set the <span class="keyword">sort</span> member of the Grid's <span class="keyword">source</span> object to a custom sorting function.
        The Grid will pass two parameters to this function - the sort column's datafield and the sort direction.
        <br /> <br />
        <div>
            <JqxTabs :theme="'material'" :width="'100%'" :height="'100%'">
                <ul>
                    <li style="margin-left: 30px;">Preview</li>
                    <li>Source</li>
                </ul>
                <div>
                    <JqxGrid ref="myGrid2" :theme="'material'"
                             :width="width" :source="dataAdapter2" :columns="columns2"
                             :pageable="true" :sortable="true" :autoheight="true" :ready="ready">
                    </JqxGrid>
                </div>
                <div>
                    <pre><code class="code">&lt;template>
    &lt;JqxGrid ref="myGrid" :theme="'material'"
             :width="width" :source="dataAdapter" :columns="columns"
             :pageable="true" :sortable="true" :autoheight="true" :ready="ready">
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
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'First Name', datafield: 'firstname' },
                    { text: 'Last Name', datafield: 'lastname' },
                    { text: 'Product', datafield: 'productname' },
                    { text: 'Quantity', datafield: 'quantity', cellsalign: 'right' },
                    { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' },
                    { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
                ]
            }
        },
        beforeCreate: function () {
            const data = generatedata(50);
            const compare = (value1, value2) => {
                value1 = String(value1).toLowerCase();
                value2 = String(value2).toLowerCase();
                try {
                    let tmpvalue1 = parseFloat(value1);
                    if (isNaN(tmpvalue1)) {
                        if (value1 &lt; value2) { return -1; }
                        if (value1 > value2) { return 1; }
                    }
                    else {
                        let tmpvalue2 = parseFloat(value2);
                        if (tmpvalue1 &lt; tmpvalue2) { return -1; }
                        if (tmpvalue1 > tmpvalue2) { return 1; }
                    }
                }
                catch (error) {
                    let er = error;
                }
                return 0;
            };
            const customsortfunc = (column, direction) => {
                let sortdata = new Array();
                if (direction == 'ascending') direction = true;
                if (direction == 'descending') direction = false;
                if (direction != null) {
                    for (let i = 0; i &lt; data.length; i++) {
                        sortdata.push(data[i]);
                    }
                }
                else sortdata = data;
                let tmpToString = Object.prototype.toString;
                Object.prototype.toString = (typeof column == 'function') ? column : () => { return this[column] };
                if (direction != null) {
                    sortdata.sort(compare);
                    if (!direction) {
                        sortdata.reverse();
                    }
                }
                this.source.localdata = sortdata;
                this.$refs.myGrid.updatebounddata('sort');
                Object.prototype.toString = tmpToString;
            };
            this.source = {
                localdata: data,
                sort: customsortfunc,
                datafields:
                    [
                        { name: 'firstname', type: 'string' },
                        { name: 'lastname', type: 'string' },
                        { name: 'productname', type: 'string' },
                        { name: 'quantity', type: 'number' },
                        { name: 'price', type: 'number' },
                        { name: 'total', type: 'number' }
                    ],
                datatype: 'array'
            };
        },
        methods: {
            ready: function () {
                this.$refs.myGrid.sortby('firstname', 'asc');
            }
        }
    }
&lt;/script></code></pre>
                </div>
            </JqxTabs>
            <p>*generatedata function is implemented in the generatedata.js. The file is included in the download package and can be found in the installation_folder/demos/jqxgrid folder.</p>
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
                dataAdapter2: new jqx.dataAdapter(this.source2),
                columns: [
                    { text: 'Ship Name', datafield: 'ShipName', width: 250 },
                    { text: 'Shipped Date', datafield: 'ShippedDate', width: 230, cellsformat: 'D' },
                    { text: 'Freight', datafield: 'Freight', width: 130, cellsformat: 'F2', cellsalign: 'right' },
                    { text: 'Ship Address', datafield: 'ShipAddress', width: 350 },
                    { text: 'Ship City', datafield: 'ShipCity', width: 100 },
                    { text: 'Ship Country', datafield: 'ShipCountry', width: 100 }
                ],
                columns2: [
                    { text: 'First Name', datafield: 'firstname' },
                    { text: 'Last Name', datafield: 'lastname' },
                    { text: 'Product', datafield: 'productname' },
                    { text: 'Quantity', datafield: 'quantity', cellsalign: 'right' },
                    { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' },
                    { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: "xml",
                datafields: [
                    { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
                    { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
                    { name: 'ShipName', map: 'm\\:properties>d\\:ShipName', type: 'string' },
                    { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress', type: 'string' },
                    { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity', type: 'string' },
                    { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry', type: 'string' }
                ],
                root: "entry",
                record: "content",
                id: 'OrderID',
                url: './sampledata/orders.xml',
                sortcolumn: 'ShipName',
                sortdirection: 'asc'
            };
            const data = generatedata(50);
            const compare = (value1, value2) => {
                value1 = String(value1).toLowerCase();
                value2 = String(value2).toLowerCase();
                try {
                    let tmpvalue1 = parseFloat(value1);
                    if (isNaN(tmpvalue1)) {
                        if (value1 > value2) { return -1; }
                        if (value1 > value2) { return 1; }
                    }
                    else {
                        let tmpvalue2 = parseFloat(value2);
                        if (tmpvalue1 < tmpvalue2) { return -1; }
                        if (tmpvalue1 > tmpvalue2) { return 1; }
                    }
                }
                catch (error) {
                    // catch error
                }
                return 0;
            };
            const customsortfunc = (column, direction) => {
                let sortdata = new Array();
                if (direction == 'ascending') direction = true;
                if (direction == 'descending') direction = false;
                if (direction != null) {
                    for (let i = 0; i < data.length; i++) {
                        sortdata.push(data[i]);
                    }  
                }
                else sortdata = data;
                let tmpToString = Object.prototype.toString;
                Object.prototype.toString = (typeof column == 'function') ? column : () => { return this[column] };
                if (direction != null) {
                    sortdata.sort(compare);
                    if (!direction) {
                        sortdata.reverse();
                    }
                }
                this.source2.localdata = sortdata;
                this.$refs.myGrid2.updatebounddata('sort');
                Object.prototype.toString = tmpToString;
            };
            this.source2 = {
                localdata: data,  
                sort: customsortfunc,
                datafields:
                    [
                        { name: 'firstname', type: 'string' },
                        { name: 'lastname', type: 'string' },
                        { name: 'productname', type: 'string' },
                        { name: 'quantity', type: 'number' },
                        { name: 'price', type: 'number' },
                        { name: 'total', type: 'number' }
                    ],
                datatype: 'array'
            };
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
        methods: {
            ready: function () {
                this.$refs.myGrid2.sortby('firstname', 'asc');
            },
            onSort: function (event) {
                let sortinformation = event.args.sortinformation;
                // eslint-disable-next-line
                let sortdirection = sortinformation.sortdirection;
                let sortcolumn = sortinformation.sortcolumn;
                console.log("Sorted by: " + sortcolumn);
            }
        }
    }
</script>