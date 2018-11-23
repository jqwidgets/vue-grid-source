<template>
    <div class="data-export">
        <h1>jQWidgets Grid Data Export</h1>
        <p>
            This demo illustrates data export in Vue Grid. With Vue Grid, you can export your data to Excel, XML, CSV, TSV, JSON, PDF and HTML.
        </p>
        <JqxTabs ref="myTabs" :theme="'material'" :width="'100%'" :height="'100%'">
            <ul>
                <li style="margin-left: 30px;">Preview</li>
                <li>Source</li>
            </ul>
            <div>
                <JqxGrid ref="myGrid"
                         :theme="'material'" :width="getWidth" :source="dataAdapter" :columns="columns"
                         :sortable="true" :altrows="true" :selectionmode="'multiplecellsadvanced'">
                </JqxGrid> 
                <div style="height: 60px; margin-top: 15px;">
                    <div style="float: left">
                        <JqxButton :theme="'material'" @click="excelBtnOnClick()">Export to Excel</JqxButton>
                        <br /> 
                        <JqxButton :theme="'material'" @click="xmlBtnOnClick()">Export to XML</JqxButton>
                    </div>
                    <div style="float: left; margin-left: 10px">
                        <JqxButton :theme="'material'" @click="csvBtnOnClick()">Export to CSV</JqxButton>
                        <br />
                        <JqxButton :theme="'material'" @click="tsvBtnOnClick()">Export to TSV</JqxButton>
                    </div>
                    <div style="float: left; margin-left: 10px">
                        <JqxButton :theme="'material'" @click="htmlBtnOnClick()">Export to HTML</JqxButton>
                        <br />
                        <JqxButton :theme="'material'" @click="jsonBtnOnClick()">Export to JSON</JqxButton>
                    </div>
                    <div style="float: left; margin-left: 10px">
                        <JqxButton :theme="'material'" @click="pdfBtnOnClick()">Export to PDF</JqxButton>
                    </div>
                </div>
            </div>
            <div>
                <pre><code ref="code">
    &lt;template>
        &lt;div style="font-size: 13px; font-family: Verdana; float: left">
            &lt;JqxGrid ref="myGrid"
                     :theme="'material'" :width="getWidth" :source="dataAdapter" :columns="columns"
                     :sortable="true" :altrows="true" :selectionmode="'multiplecellsadvanced'">
            &lt;/JqxGrid>
            &lt;div style="height: 60px; margin-top: 15px;">
                &lt;div style="float: left">
                    &lt;JqxButton :theme="'material'" @click="excelBtnOnClick()">Export to Excel&lt;/JqxButton>
                    &lt;br />&lt;br />
                    &lt;JqxButton :theme="'material'" @click="xmlBtnOnClick()">Export to XML&lt;/JqxButton>
                &lt;/div>
                &lt;div style="float: left; margin-left: 10px">
                    &lt;JqxButton :theme="'material'" @click="csvBtnOnClick()">Export to CSV&lt;/JqxButton>
                    &lt;br />&lt;br />
                    &lt;JqxButton :theme="'material'" @click="tsvBtnOnClick()">Export to TSV&lt;/JqxButton>
                &lt;/div>
                &lt;div style="float: left; margin-left: 10px">
                    &lt;JqxButton :theme="'material'" @click="htmlBtnOnClick()">Export to HTML&lt;/JqxButton>
                    &lt;br />&lt;br />
                    &lt;JqxButton :theme="'material'" @click="jsonBtnOnClick()">Export to JSON&lt;/JqxButton>
                &lt;/div>
                &lt;div style="float: left; margin-left: 10px">
                    &lt;JqxButton :theme="'material'" @click="pdfBtnOnClick()">Export to PDF&lt;/JqxButton>
                &lt;/div>
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
                        { text: 'First Name', datafield: 'firstname', width: 130 },
                        { text: 'Last Name', datafield: 'lastname', width: 130 },
                        { text: 'Product', datafield: 'productname', width: 200 },
                        { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67, align: 'center', cellsalign: 'center' },
                        { text: 'Ship Date', datafield: 'date', width: 120, align: 'right', cellsalign: 'right', cellsformat: 'd' },
                        { text: 'Quantity', datafield: 'quantity', width: 70, align: 'right', cellsalign: 'right' },
                        { text: 'Price', datafield: 'price', align: 'right', cellsalign: 'right', cellsformat: 'c2' }
                    ]
                }
            },
            beforeCreate: function () {
                this.source = {
                    localdata: generatedata(100, false),
                    datatype: 'array',
                    datafields: [
                        { name: 'firstname', type: 'string' },
                        { name: 'lastname', type: 'string' },
                        { name: 'productname', type: 'string' },
                        { name: 'available', type: 'bool' },
                        { name: 'date', type: 'date' },
                        { name: 'quantity', type: 'number' },
                        { name: 'price', type: 'number' }
                    ]
                };
            },
            methods: {
                excelBtnOnClick: function () {
                    this.$refs.myGrid.exportdata('xls', 'jqxGrid');
                },
                xmlBtnOnClick: function () {
                    this.$refs.myGrid.exportdata('xml', 'jqxGrid');
                },
                csvBtnOnClick: function () {
                    this.$refs.myGrid.exportdata('csv', 'jqxGrid');
                },
                tsvBtnOnClick: function () {
                    this.$refs.myGrid.exportdata('tsv', 'jqxGrid');
                },
                htmlBtnOnClick: function () {
                    this.$refs.myGrid.exportdata('html', 'jqxGrid');
                },
                jsonBtnOnClick: function () {
                    this.$refs.myGrid.exportdata('json', 'jqxGrid');
                },
                pdfBtnOnClick: function () {
                    this.$refs.myGrid.exportdata('pdf', 'jqxGrid');
                }
            }
        }
    &lt;/script>
</code></pre>
            </div>
        </JqxTabs>
        <p>*generatedata function is implemented in the generatedata.js. The file is included in the download package and can be found in the installation_folder/demos/jqxgrid folder.</p>
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
                getWidth: '99%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'First Name', datafield: 'firstname', width: 130 },
                    { text: 'Last Name', datafield: 'lastname', width: 130 },
                    { text: 'Product', datafield: 'productname', width: 200 },
                    { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67, cellsalign: 'center', align: 'center' },
                    { text: 'Ship Date', datafield: 'date', width: 120, align: 'right', cellsalign: 'right', cellsformat: 'd' },
                    { text: 'Quantity', datafield: 'quantity', width: 70, align: 'right', cellsalign: 'right' },
                    { text: 'Price', datafield: 'price', cellsalign: 'right', align: 'right', cellsformat: 'c2' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(100, false),
                datatype: 'array',
                datafields: [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'available', type: 'bool' },
                    { name: 'date', type: 'date' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' }
                ]
            };
        },
        mounted: function () {
            this.$refs.code.innerHTML = formatCode(this.$refs.code.innerHTML);
        },
        methods: {
            excelBtnOnClick: function () {
                this.$refs.myGrid.exportdata('xls', 'jqxGrid');
            },
            xmlBtnOnClick: function () {
                this.$refs.myGrid.exportdata('xml', 'jqxGrid');
            },
            csvBtnOnClick: function () {
                this.$refs.myGrid.exportdata('csv', 'jqxGrid');
            },
            tsvBtnOnClick: function () {
                this.$refs.myGrid.exportdata('tsv', 'jqxGrid');
            },
            htmlBtnOnClick: function () {
                this.$refs.myGrid.exportdata('html', 'jqxGrid');
            },
            jsonBtnOnClick: function () {
                this.$refs.myGrid.exportdata('json', 'jqxGrid');
            },
            pdfBtnOnClick: function () {
                this.$refs.myGrid.exportdata('pdf', 'jqxGrid');
            }
        }
    }
</script>
