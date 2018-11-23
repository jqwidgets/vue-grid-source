<template>
    <div class="refresh-data">
        <h1>jQWidgets Grid Refresh Data</h1>
        <p>
            This demo illustrates how to dynamically update and clear the Vue Grid's source.
        </p>
        <JqxTabs ref="myTabs" :theme="'material'" :width="'100%'" :height="'100%'">
            <ul>
                <li style="margin-left: 30px;">Preview</li>
                <li>Source</li>
            </ul>
            <div>
                <JqxGrid ref="myGrid" :theme="'material'"
                         :width="getWidth" :source="dataAdapter" :columns="columns">
                </JqxGrid>
                <div style="height: 25px; margin-top: 15px">
                    <JqxButton :theme="'material'" @click="refreshBtnOnClick()">Refresh Data</JqxButton>
                    <JqxButton :theme="'material'" @click="clearBtnOnClick()">Clear</JqxButton>
                </div>
            </div>
            <div>
                <pre><code ref="code">
    &lt;template>
        &lt;div>
            &lt;JqxGrid ref="myGrid" :theme="'material'"
                     :width="getWidth" :source="dataAdapter" :columns="columns">
            &lt;/JqxGrid>
            &lt;div style="height: 20px; margin-top: 15px">
                &lt;JqxButton :theme="'material'" @click="refreshBtnOnClick()">Refresh Data&lt;/JqxButton>
                &lt;JqxButton :theme="'material'" @click="clearBtnOnClick()">Clear&lt;/JqxButton>
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
                    localdata: generatedata(100, false),
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
                    this.source.localdata = generatedata(100, false);
                    // passing `cells` to the `updatebounddata` method will refresh only the cells values when the new rows count is equal to the previous rows count.
                    this.$refs.myGrid.updatebounddata('cells');
                },
                clearBtnOnClick: function () {
                    this.$refs.myGrid.clear();
                }
            }
        }
    &lt;/script>
    &lt;style>
        .jqx-button {
            width: 50px;
            display: inline;
            margin-right: 5px;
        }
    &lt;/style>
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
                localdata: generatedata(100, false),
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
            this.$refs.code.innerHTML = formatCode(this.$refs.code.innerHTML);
        },
        methods: {
            refreshBtnOnClick: function () {
                this.source.localdata = generatedata(100, false);
                this.$refs.myGrid.updatebounddata('cells');
            },
            clearBtnOnClick: function () {
                this.$refs.myGrid.clear();
            }
        }
    }
</script>
<style scoped>
    .jqx-button {
        width: 50px;
        display: inline;
        margin-right: 5px;
    }
</style>