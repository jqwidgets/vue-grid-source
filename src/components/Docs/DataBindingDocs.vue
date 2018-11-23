<template>
    <div class="data-binding-docs">
        <h1>Vue Grid - Data Binding</h1>
        <br />
        <p>
            JqxGrid can be bound to multiple types of data collections including arrays, xml, json, tsv, csv or remote data.
            To data bind the Grid to a data source you need to set its <span class="keyword">source</span> property to point to an instance of <span class="keyword">jqxDataAdapter</span>.
            The source object represents a set of key/value pairs:
        </p>
        <ul>
            <li> url: A string containing the URL to which the request is sent.</li>
            <li> data: Data to be sent to the server.</li>
            <li> localdata: data array or data string pointing to a local data source.</li>
            <li> datatype: the data's type. Possible values: 'xml', 'json', 'jsonp', 'tsv', 'csv', 'local', 'array', 'observablearray'.</li>
            <li> type: The type of request to make ("POST" or "GET"), default is "GET".</li>
            <li> id: A string containing the Id data field.</li>
            <li> root: A string describing where the data begins and all other loops begin from this element.</li>
            <li> record: A string describing the information for a particular record.</li>
            <li>
                datafields: An array describing the fields in a particular record. Each datafield must define the following members:
                <ul>
                    <li>name - A string containing the data field's name.</li>
                    <li>type - A string containing the data field's type. Possible values: 'string', 'date', 'number', 'float', 'int', 'bool'.</li>
                    <li>
                        format(optional) - Sets the data formatting. By setting the format, the jqxDataAdapter plug-in will try to format the data before loading it.
                        <pre class="preCode"><code class="code">{ name: 'SubmitDate', type: 'date', format: "yyyy-MM-ddTHH:mm:ss-HH:mm" }</code></pre>
                    </li>
                    <li>map(optional) - A mapping to the data field.</li>
                    <li>values - determines the foreign collection associated to the data field.</li>
                </ul>
            </li>
            <li>pagenum - determines the initial page number when paging is enabled.</li>
            <li>pagesize - determines the page size when paging is enabled.</li>
            <li>
                pager - callback function called when the current page or page size is changed.
                <pre class="preCode"><code class="code">pager: function (pagenum, pagesize, oldpagenum) {
}</code></pre> 
            </li>
            <li>sortcolumn - determines the initial sort column. The expected value is a data field name.</li>
            <li>sortdirection - determines the sort order. The expected value is 'asc' for (A to Z) sorting or 'desc' for (Z to A) sorting.</li>
            <li>
                sort - callback function called when the sort column or sort order is changed.
                <pre class="preCode"><code class="code">sort: function (column, direction) {
}</code></pre>
            </li>
            <li>
                filter - callback function called when a filter is applied or removed.
                <pre class="preCode"><code class="code">filter: function (filters, recordsArray) {
}</code></pre>
            </li>
            <li>
                addrow - callback function, called when a new row is/are added. If multiple rows are added, the rowid and rowdata parameters are arrays of row ids and rows.
                <pre class="preCode"><code class="code">addrow: function (rowid, rowdata, position, commit) {
    // synchronize with the server - send insert command
    // call commit with parameter true if the synchronization with the server is successful
    //and with parameter false if the synchronization failed.
    commit(true);
}</code></pre>
            </li>
            <li>
                deleterow - callback function, called when a row is deleted. If multiple rows are deleted, the rowid parameter is an array of row ids.
                <pre class="preCode"><code class="code">deleterow: function (rowid, commit) {
    // synchronize with the server - send delete command
    // call commit with parameter true if the synchronization with the server is successful
    //and with parameter false if the synchronization failed.
    commit(true);
}</code></pre>
            </li>
            <li>
                updaterow - callback function, called when a row is updated. If multiple rows are added, the rowid and rowdata parameters are arrays of row ids and rows.
                <pre class="preCode"><code class="code">updaterow: function (rowid, newdata, commit) {
    // synchronize with the server - send update command
    // call commit with parameter true if the synchronization with the server is successful
    // and with parameter false if the synchronization failed.
    commit(true);
}</code></pre>
            </li>
            <li>
                processdata - extend the default data object sent to the server.
                <pre class="preCode"><code class="code">let source = {
    datatype: "jsonp",
    datafields: [
        { name: 'countryName' },
        { name: 'name' },
        { name: 'population', type: 'float' },
        { name: 'continentCode' }
    ],
    url: "http://ws.geonames.org/searchJSON",
    processdata: function (data) {
        data.featureClass = "P";
        data.style = "full";
        data.maxRows = 50;
    }
};</code></pre>
            </li>
            <li>
                formatdata - Before the data is sent to the server, you can fully override it by using the <span class="keyword">formatdata</span> function of the
                <span class="keyword">source</span>. The result that the function returns is actually what will be sent to the server.
                <pre class="preCode"><code class="code">let source = {
    datatype: "jsonp",
    datafields: [
        { name: 'countryName' },
        { name: 'name' },
        { name: 'population', type: 'float' },
        { name: 'continentCode' }
    ],
    url: "http://ws.geonames.org/searchJSON",
    data: {
        featureClass: "P",
        style: "full",
        maxRows: 50
    },
    formatdata: function (data) {
        return "my data";
    }
};</code></pre>
            </li>
            <li>contenttype: Use this option, if you want to explicitly pass in a content-type. Default is "application/x-www-form-urlencoded".</li>
        </ul>
        <p>
            If you bind the Grid to remote data source using asynchronous requests (that is by default when you specify <span class="keyword">url</span> in the <span class="keyword">source</span> object and
            you haven't set the <span class="keyword">async</span> field to false), then make sure that you call any method or set a property once the data is loaded. To ensure that you call your code when the Grid is loaded with data,
            use the Grid's <span class="keyword">ready</span> callback function or bind to the <span class="keyword">bindingcomplete</span> event before the Grid's initialization and call your code inside the event handler.
        </p>
        <strong class="subtitle">Bind the Grid to an array</strong>
        <p>The data member is array. The <span class="keyword">datatype</span> member is set to "array".</p>
        <div>
            <JqxTabs :theme="'material'" :width="'100%'" :height="'100%'">
                <ul>
                    <li style="margin-left: 30px;">Preview</li>
                    <li>Source</li>
                </ul>
                <div>
                    <JqxGrid :theme="'material'" :width="width" :source="arrayDataAdapter"
                             :columns="arrayColumns">
                    </JqxGrid>
                </div>
                <div>
                    <pre><code class="code">&lt;template>
    &lt;JqxGrid :theme="'material'" :width="width" :source="dataAdapter" 
             :columns="columns" >
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
                    { text: 'Name', datafield: 'firstname', width: 120 },
                    { text: 'Last Name', datafield: 'lastname', width: 120 },
                    { text: 'Product', datafield: 'productname', width: 180 },
                    { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                    { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                    { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(50),
                datatype: 'array',
                datafields:
                    [
                        { name: 'firstname', type: 'string' },
                        { name: 'lastname', type: 'string' },
                        { name: 'productname', type: 'string' },
                        { name: 'quantity', type: 'number' },
                        { name: 'price', type: 'number' },
                        { name: 'total', type: 'number' }
                    ]
            };
        }
    }
&lt;/script>
</code></pre>
                </div>
            </JqxTabs>
            <p>*generatedata function is implemented in the generatedata.js. The file is included in the download package and can be found in the installation_folder/demos/jqxgrid folder.</p>
        </div>
        <strong class="subtitle">Bind the Grid to XML data</strong>
        <p>
            In the source initialization, you need to set the following:
            <ul>
                <li>url of a xml file</li>
                <li>id field</li>
                <li>root data record</li>
                <li>record - this is the data record which will be displayed as a row in the Grid.</li>
                <li>datatype - 'xml'</li>
                <li>datafields - the record's member names. You can also specify the mapping to the member's data</li>
            </ul>
        </p>
        <div>
            <JqxTabs :theme="'material'" :width="'100%'" :height="'100%'">
                <ul>
                    <li style="margin-left: 30px;">Preview</li>
                    <li>Source</li>
                </ul>
                <div>
                    <JqxGrid :theme="'material'" :width="width" :source="xmlDataAdapter"
                             :columns="xmlColumns">
                    </JqxGrid>
                </div>
                <div>
                    <pre><code class="code">&lt;template>
    &lt;JqxGrid :theme="'material'" :width="width" :source="dataAdapter" 
             :columns="columns" >
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
                    { text: 'Company Name', datafield: 'CompanyName', width: 250 },
                    { text: 'Contact Name', datafield: 'ContactName', width: 150 },
                    { text: 'Contact Title', datafield: 'ContactTitle', width: 180 },
                    { text: 'City', datafield: 'City', width: 120 },
                    { text: 'Postal Code', datafield: 'PostalCode', width: 90 },
                    { text: 'Country', datafield: 'Country', width: 100 }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: 'xml',
                datafields: [
                    { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName', type: 'string' },
                    { name: 'ContactName', map: 'm\\:properties>d\\:ContactName', type: 'string' },
                    { name: 'ContactTitle', map: 'm\\:properties>d\\:ContactTitle', type: 'string' },
                    { name: 'City', map: 'm\\:properties>d\\:City', type: 'string' },
                    { name: 'PostalCode', map: 'm\\:properties>d\\:PostalCode', type: 'string' },
                    { name: 'Country', map: 'm\\:properties>d\\:Country', type: 'string' }
                ],
                root: 'entry',
                record: 'content',
                id: 'm\\:properties>d\\:CustomerID',
                url: '/sampledata/customers.xml'
            };
        }
    }
&lt;/script>
</code></pre>
                </div>
            </JqxTabs>
        </div>
        <strong class="subtitle">Bind the Grid to JSON data</strong>
        <p>
            When you bind the Grid to JSON data, you need to set the source object's <span class="keyword">datatype</span> to 'json'.<br />
            If you want to bind the Grid to JSONP data, then you need to set the source object's <span class="keyword">datatype</span> to 'jsonp'.
        </p>
        <div>
            <JqxTabs :theme="'material'" :width="'100%'" :height="'100%'">
                <ul>
                    <li style="margin-left: 30px;">Preview</li>
                    <li>Source</li>
                </ul>
                <div>
                    <JqxGrid :theme="'material'" :width="width" :source="jsonDataAdapter"
                             :columns="jsonColumns">
                    </JqxGrid>
                </div>
                <div>
                    <pre><code class="code">&lt;template>
    &lt;JqxGrid :theme="'material'" :width="width" :source="dataAdapter" 
             :columns="columns" >
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
                    { text: 'Name', datafield: 'name', width: 250 },
                    { text: 'Beverage Type', datafield: 'type', width: 250 },
                    { text: 'Calories', datafield: 'calories', width: 180 },
                    { text: 'Total Fat', datafield: 'totalfat', width: 120 },
                    { text: 'Protein', datafield: 'protein', minwidth: 120 }
                ]
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
                url: '/sampledata/beverages.txt'
            };
        }
    }
&lt;/script>
</code></pre>
                </div>
            </JqxTabs>
        </div>
        <strong class="subtitle">Bind the Grid to tab-separated values (TSV)</strong>
        <p>When you bind the Grid to TSV data, you need to set the source object's <span class="keyword">datatype</span> to 'tab'.</p>
        <div>
            <JqxTabs :theme="'material'" :width="'100%'" :height="'100%'">
                <ul>
                    <li style="margin-left: 30px;">Preview</li>
                    <li>Source</li>
                </ul>
                <div>
                    <JqxGrid :theme="'material'" :width="width" :source="tsvDataAdapter"
                             :columns="tsvColumns">
                    </JqxGrid>
                </div>
                <div>
                    <pre><code class="code">&lt;template>
    &lt;JqxGrid :theme="'material'" :width="width" :source="dataAdapter" 
             :columns="columns" >
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
                    { text: 'Year', datafield: 'Year' },
                    { text: 'HPI', datafield: 'HPI', cellsformat: 'f2' },
                    { text: 'Build Cost', datafield: 'BuildCost', cellsformat: 'f2' },
                    { text: 'Population', datafield: 'Population', cellsformat: 'f2' },
                    { text: 'Rate', datafield: 'Rate', cellsformat: 'f5', minwidth: 100 }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: 'tab',
                datafields: [
                    { name: 'Year', type: 'int' },
                    { name: 'HPI', type: 'float' },
                    { name: 'BuildCost', type: 'float' },
                    { name: 'Population', type: 'float' },
                    { name: 'Rate', type: 'float' }
                ],
                url: '/sampledata/homeprices.txt'
            };
        }
    }
&lt;/script>
</code></pre>
                </div>
            </JqxTabs>
        </div>
        <strong class="subtitle">Bind the Grid to comma-separated values (CSV)</strong>
        <p>When you bind the Grid to CSV data, you need to set the source object's <span class="keyword">datatype</span> to 'csv'.</p>
        <div>
            <JqxTabs ref="myTabs" :theme="'material'" :width="'100%'" :height="'100%'">
                <ul>
                    <li style="margin-left: 30px;">Preview</li>
                    <li>Source</li>
                </ul>
                <div>
                    <JqxGrid :theme="'material'" :width="width" :source="csvDataAdapter"
                             :columns="csvColumns">
                    </JqxGrid>
                </div>
                <div>
                    <pre><code class="code">&lt;template>
    &lt;JqxGrid :theme="'material'" :width="width" :source="dataAdapter" 
             :columns="columns" >
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
                    { text: 'Date', datafield: 'Date', cellsformat: 'D', width: 250 },
                    { text: 'S&P 500', datafield: 'S&P 500', width: 300, cellsformat: 'f' },
                    { text: 'NASDAQ', datafield: 'NASDAQ', cellsformat: 'f' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: "csv",
                datafields: [
                    { name: 'Date', type: 'date' },
                    { name: 'S&P 500', type: 'float' },
                    { name: 'NASDAQ', type: 'float' }
                ],
                url: '/sampledata/nasdaq_vs_sp500.txt'
            };
        }
    }
&lt;/script>
</code></pre>
                </div>
            </JqxTabs>
        </div>
        <strong class="subtitle">What happens when the data source is changed? How to refresh the Grid?</strong>
        <p>To refresh the Grid, you need to simply update the source and call the <span class="keyword">updatebounddata</span> method.</p>
        <div>
            <JqxTabs ref="myTabs" :theme="'material'" :width="'100%'" :height="'100%'">
                <ul>
                    <li style="margin-left: 30px;">Preview</li>
                    <li>Source</li>
                </ul>
                <div>
                    <div>
                        <JqxGrid ref="myGrid" :theme="'material'" :height="'80%'"
                                 :width="width" :source="refreshDataAdapter" :columns="refreshColumns">
                        </JqxGrid>
                        <div style="height: 18%; margin-top: 5px">
                            <JqxButton :theme="'material'" :height="15" :width="50" @click="refreshBtnOnClick()">Refresh</JqxButton>
                        </div>
                    </div>
                </div>
                <div>
                    <pre><code class="code">
    &lt;template>
        &lt;div>
            &lt;JqxGrid ref="myGrid" :theme="'material'"
                     :width="width" :source="dataAdapter" :columns="columns">
            &lt;/JqxGrid>
            &lt;div style="height: 20px; margin-top: 15px">
                &lt;JqxButton :theme="'material'" :width="50" @click="refreshBtnOnClick()">Refresh Data&lt;/JqxButton>
            &lt;/div>
        &lt;/div>
    &lt;/template>
    &lt;script>
        import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
        import JqxButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue';
        export default {
            components: {
                JqxGrid,
                JqxButton
            },
            data: function () {
                return {
                    getWidth: '99%',
                    dataAdapter: new jqx.dataAdapter(this.source),
                    columns: [
                        { text: 'First Name', dataField: 'firstname', width: 130 },
                        { text: 'Last Name', dataField: 'lastname', width: 130 },
                        { text: 'Product', dataField: 'productname', width: 180 },
                        { text: 'Quantity', dataField: 'quantity', width: 80, cellsalign: 'right' },
                        { text: 'Unit Price', dataField: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                        { text: 'Total', dataField: 'total', cellsalign: 'right', minwidth: 100, cellsformat: 'c2' }
                    ]
                }
            },
            beforeCreate: function () {
                this.source = {
                    localdata: generatedata(50),
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
                refreshBtnOnClick: function () {
                    this.source.localdata = generatedata(50);
                    // passing `cells` to the `updatebounddata` method will refresh only the cells values when the new rows count is equal to the previous rows count.
                    this.$refs.myGrid.updatebounddata('cells');
                }
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
    import JqxButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue';

    export default {
        components: {
            JqxTabs,
            JqxGrid,
            JqxButton
        },
        data: function () {
            return {
                width: '99%',
                arrayDataAdapter: new jqx.dataAdapter(this.arraySource),
                xmlDataAdapter: new jqx.dataAdapter(this.xmlSource),
                jsonDataAdapter: new jqx.dataAdapter(this.jsonSource),
                tsvDataAdapter: new jqx.dataAdapter(this.tsvSource),
                csvDataAdapter: new jqx.dataAdapter(this.csvSource),
                refreshDataAdapter: new jqx.dataAdapter(this.refreshSource),
                arrayColumns: [
                    { text: 'Name', datafield: 'firstname', width: 120 },
                    { text: 'Last Name', datafield: 'lastname', width: 120 },
                    { text: 'Product', datafield: 'productname', width: 180 },
                    { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                    { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                    { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
                ],
                xmlColumns: [
                    { text: 'Company Name', datafield: 'CompanyName', width: 250 },
                    { text: 'Contact Name', datafield: 'ContactName', width: 150 },
                    { text: 'Contact Title', datafield: 'ContactTitle', width: 180 },
                    { text: 'City', datafield: 'City', width: 120 },
                    { text: 'Postal Code', datafield: 'PostalCode', width: 90 },
                    { text: 'Country', datafield: 'Country', width: 100 }
                ],
                jsonColumns: [
                    { text: 'Name', datafield: 'name', width: 250 },
                    { text: 'Beverage Type', datafield: 'type', width: 250 },
                    { text: 'Calories', datafield: 'calories', width: 180 },
                    { text: 'Total Fat', datafield: 'totalfat', width: 120 },
                    { text: 'Protein', datafield: 'protein', minwidth: 120 }
                ],
                tsvColumns: [
                    { text: 'Year', datafield: 'Year' },
                    { text: 'HPI', datafield: 'HPI', cellsformat: 'f2' },
                    { text: 'Build Cost', datafield: 'BuildCost', cellsformat: 'f2' },
                    { text: 'Population', datafield: 'Population', cellsformat: 'f2' },
                    { text: 'Rate', datafield: 'Rate', cellsformat: 'f5', minwidth: 100 }
                ],
                csvColumns: [
                    { text: 'Date', datafield: 'Date', cellsformat: 'D', width: 250 },
                    { text: 'S&P 500', datafield: 'S&P 500', width: 300, cellsformat: 'f' },
                    { text: 'NASDAQ', datafield: 'NASDAQ', cellsformat: 'f' }
                ],
                refreshColumns: [
                    { text: 'First Name', dataField: 'firstname', width: 130 },
                    { text: 'Last Name', dataField: 'lastname', width: 130 },
                    { text: 'Product', dataField: 'productname', width: 180 },
                    { text: 'Quantity', dataField: 'quantity', width: 80, cellsalign: 'right' },
                    { text: 'Unit Price', dataField: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                    { text: 'Total', dataField: 'total', cellsalign: 'right', minwidth: 100, cellsformat: 'c2' }
                ]
            }
        },
        beforeCreate: function () {
            this.arraySource = {
                localdata: generatedata(50),
                datatype: 'array',
                datafields: [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' },
                    { name: 'total', type: 'number' }
                ]
            };
            this.xmlSource = {
                datatype: 'xml',
                datafields: [
                    { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName', type: 'string' },
                    { name: 'ContactName', map: 'm\\:properties>d\\:ContactName', type: 'string' },
                    { name: 'ContactTitle', map: 'm\\:properties>d\\:ContactTitle', type: 'string' },
                    { name: 'City', map: 'm\\:properties>d\\:City', type: 'string' },
                    { name: 'PostalCode', map: 'm\\:properties>d\\:PostalCode', type: 'string' },
                    { name: 'Country', map: 'm\\:properties>d\\:Country', type: 'string' }
                ],
                root: 'entry',
                record: 'content',
                id: 'm\\:properties>d\\:CustomerID',
                url: './sampledata/customers.xml'
            };
            this.jsonSource = {
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
            this.tsvSource = {
                datatype: 'tab',
                datafields: [
                    { name: 'Year', type: 'int' },
                    { name: 'HPI', type: 'float' },
                    { name: 'BuildCost', type: 'float' },
                    { name: 'Population', type: 'float' },
                    { name: 'Rate', type: 'float' }
                ],
                url: './sampledata/homeprices.txt'
            };
            this.csvSource = {
                datatype: "csv",
                datafields: [
                    { name: 'Date', type: 'date' },
                    { name: 'S&P 500', type: 'float' },
                    { name: 'NASDAQ', type: 'float' }
                ],
                url: './sampledata/nasdaq_vs_sp500.txt'
            };
            this.refreshSource = {
                localdata: generatedata(50, false),
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
        },
        methods: {
            refreshBtnOnClick: function () {
                this.refreshSource.localdata = generatedata(50, false);
                // passing 'cells' to the 'updatebounddata' method will refresh only the cells values when the new rows count is equal to the previous rows count.
                this.$refs.myGrid.updatebounddata('cells');
            }
        }
    }
</script>
<style>
    .subtitle {
        display: block;
        margin-top: 30px;
    }
</style>