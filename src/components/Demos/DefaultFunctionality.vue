<template>
    <div class="default-functionality">
        <h1>jQWidgets Grid Default Functionality</h1>
        <p>
            This demo illustrates the basic functionality of the Grid plugin. The jQWidgets Grid plugin offers rich support for interacting with data, including paging, grouping and sorting.
        </p>
        <JqxTabs ref="myTabs" :theme="'material'" :width="'100%'" :height="'100%'">
            <ul>
                <li style="margin-left: 30px;">Preview</li>
                <li>Source</li>
            </ul>
            <div>
                <JqxGrid :theme="'material'" :width="getWidth" :source="dataAdapter" :columns="columns"
                         :pageable="true" :autoheight="true" :sortable="true" :filterable="true" :altrows="true"
                         :editable="true" :selectionmode="'multiplecellsadvanced'" :columngroups="columngroups"></JqxGrid>
            </div>
            <div>
                <pre><code ref="code">
    &lt;template>
        &lt;JqxGrid :theme="'material'" :width="getWidth" :source="dataAdapter" :columns="columns"
                 :pageable="true" :autoheight="true" :sortable="true" :filterable="true" :altrows="true" 
                 :editable="true" :selectionmode="'multiplecellsadvanced'" :columngroups="columngroups">
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
                    getWidth: '99%',
                    dataAdapter: new jqx.dataAdapter(this.source),
                    columns: [
                        { text: 'Product Name', columngroup: 'ProductDetails', datafield: 'ProductName', width: 250 },
                        { text: 'Quantity per Unit', columngroup: 'ProductDetails', datafield: 'QuantityPerUnit', align: 'right', cellsalign: 'right' },
                        { text: 'Unit Price', columngroup: 'ProductDetails', datafield: 'UnitPrice', align: 'right', cellsalign: 'right', cellsformat: 'c2' },
                        { text: 'Units In Stock', datafield: 'UnitsInStock', cellsalign: 'right', cellsrenderer: this.cellsrenderer, width: 100 },
                        { text: 'Discontinued', columntype: 'checkbox', datafield: 'Discontinued', align: 'center' }
                    ],
                    columngroups: [
                        { text: 'Product Details', align: 'center', name: 'ProductDetails' }
                    ]
                }
            },
            beforeCreate: function () {
                this.source = {
                    datatype: 'xml',
                    datafields: [
                        { name: 'ProductName', type: 'string' },
                        { name: 'QuantityPerUnit', type: 'int' },
                        { name: 'UnitPrice', type: 'float' },
                        { name: 'UnitsInStock', type: 'float' },
                        { name: 'Discontinued', type: 'bool' }
                    ],
                    root: 'Products',
                    record: 'Product',
                    id: 'ProductID',
                    url: '../sampledata/products.xml'
                };
            },
            methods: {
                cellsrenderer: function (row, columnsfield, value, defaulthtml, columnproperties, rowdata) {
                    if (value &lt; 20) {
                        return '&lt;span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;">' + value + '&lt;/span>';
                    }
                    else {
                        return '&lt;span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;">' + value + '&lt;/span>';
                    }
                }
            }
        }
    &lt;/script>
</code></pre>
            </div>

        </JqxTabs>
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
                getWidth: '99%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Product Name', columngroup: 'ProductDetails', datafield: 'ProductName', width: 250 },
                    { text: 'Quantity per Unit', columngroup: 'ProductDetails', datafield: 'QuantityPerUnit', align: 'right', cellsalign: 'right' },
                    { text: 'Unit Price', columngroup: 'ProductDetails', datafield: 'UnitPrice', align: 'right', cellsalign: 'right', cellsformat: 'c2' },
                    { text: 'Units In Stock', datafield: 'UnitsInStock', cellsalign: 'right', cellsrenderer: this.cellsrenderer, width: 100 },
                    { text: 'Discontinued', columntype: 'checkbox', datafield: 'Discontinued', align: 'center' }
                ],
                columngroups: [
                    { text: 'Product Details', align: 'center', name: 'ProductDetails' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: 'xml',
                datafields: [
                    { name: 'ProductName', type: 'string' },
                    { name: 'QuantityPerUnit', type: 'int' },
                    { name: 'UnitPrice', type: 'float' },
                    { name: 'UnitsInStock', type: 'float' },
                    { name: 'Discontinued', type: 'bool' }
                ],
                root: 'Products',
                record: 'Product',
                id: 'ProductID',
                url: './sampledata/products.xml'
            };
        },
        mounted: function () {
            this.$refs.code.innerHTML = formatCode(this.$refs.code.innerHTML);

            let buttons = document.getElementsByClassName('jqx-button');
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].removeAttribute('type');
            }
        },
        methods: {
            cellsrenderer: function (row, columnsfield, value, defaulthtml, columnproperties, rowdata) {
                if (value < 20) {
                    return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;">' + value + '</span>';
                } else {
                    return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;">' + value + '</span>';
                }
            }
        }
    }
</script>