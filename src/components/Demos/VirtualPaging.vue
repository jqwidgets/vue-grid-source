<template> 
    <div class="virtual-paging">
        <h1>jQWidgets Grid Virtual Paging</h1>
        <p>
            In this demo Grid uses a virtualized paging which enables you to handle very large data sets without any impact on client side performance.
        </p>
        <JqxTabs ref="myTabs" :theme="'material'" :width="'100%'" :height="'100%'">
            <ul>
                <li style="margin-left: 30px;">Preview</li>
                <li>Source</li>
            </ul>
            <div>
                <JqxGrid :theme="'material'" :width="getWidth" :source="dataAdapter" 
                         :columns="columns" :autoheight="true" :virtualmode="true" 
                         :pageable="true" :rendergridrows="rendergridrows">
                </JqxGrid>
            </div>
            <div>
                <pre><code ref="code">
    &lt;template> 
        &lt;div>
           &lt;JqxGrid :theme="'material'" :width="getWidth" :source="dataAdapter" 
                    :columns="columns" :autoheight="true" :virtualmode="true" 
                    :pageable="true" :rendergridrows="rendergridrows">
           &lt;/JqxGrid>
        &lt;/div>
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
                        { text: 'Id', datafield: 'id', width: 50 },
                        { text: 'First Name', datafield: 'firstname', width: 120 },
                        { text: 'Last Name', datafield: 'lastname', width: 120 },
                        { text: 'Product', datafield: 'productname', width: 180 },
                        { text: 'Quantity', datafield: 'quantity', width: 100, cellsalign: 'right' },
                        { text: 'Unit Price', datafield: 'price', width: 100, cellsalign: 'right', cellsformat: 'c2' },
                        { text: 'Total', datafield: 'total', cellsrenderer: this.totalcolumnrenderer, cellsalign: 'right' }
                    ]
                }
            },
            beforeCreate: function () {
                this.source = {
                    datatype: 'array',
                    localdata: {},
                    totalrecords: 1000000
                }
                this.firstNames = [
                    'Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'
                ];
                this.lastNames = [
                    'Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'
                ];
                this.productNames = [
                    'Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Cramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'
                ];
                this.priceValues = [
                    '2.25', '1.5', '3.0', '3.3', '4.5', '3.6', '3.8', '2.5', '5.0', '1.75', '3.25', '4.0'
                ];
            },
            methods: {
                generateData: function (startindex, endindex) {
                    let data = {};
                    for (let i = startindex; i &lt; endindex; i++) {
                        let row = {};
                        let productindex = Math.floor(Math.random() * this.productNames.length);
                        let price = parseFloat(this.priceValues[productindex]);
                        let quantity = 1 + Math.round(Math.random() * 10);
                        row['id'] = i;
                        row['firstname'] = this.firstNames[Math.floor(Math.random() * this.firstNames.length)];
                        row['lastname'] = this.lastNames[Math.floor(Math.random() * this.lastNames.length)];
                        row['productname'] = this.productNames[productindex];
                        row['price'] = price;
                        row['quantity'] = quantity;
                        row['total'] = price * quantity;
                        data[i] = row;
                    }
                    return data;
                },
                rendergridrows: function (params) {
                    let data = this.generateData(params.startindex, params.endindex);
                    return data;
                },
                totalcolumnrenderer: function (row, column, cellvalue) {
                    let newCellValue = jqx.dataFormat.formatnumber(cellvalue, 'c2');
                    return '&lt;span style="margin: 6px 3px; font-size: 12px; float: right; font-weight: bold;">' + newCellValue + '&lt;/span>';
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
                    { text: 'Id', datafield: 'id', width: 50 },
                    { text: 'First Name', datafield: 'firstname', width: 120 },
                    { text: 'Last Name', datafield: 'lastname', width: 120 },
                    { text: 'Product', datafield: 'productname', width: 180 },
                    { text: 'Quantity', datafield: 'quantity', width: 100, cellsalign: 'right' },
                    { text: 'Unit Price', datafield: 'price', width: 100, cellsalign: 'right', cellsformat: 'c2' },
                    { text: 'Total', datafield: 'total', cellsrenderer: this.totalcolumnrenderer, cellsalign: 'right' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: 'array',
                localdata: {},
                totalrecords: 1000000
            }
            this.firstNames = [
                'Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'
            ];
            this.lastNames = [
                'Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'
            ];
            this.productNames = [
                'Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Cramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'
            ];
            this.priceValues = [
                '2.25', '1.5', '3.0', '3.3', '4.5', '3.6', '3.8', '2.5', '5.0', '1.75', '3.25', '4.0'
            ];
        },
        mounted: function () {
            this.$refs.code.innerHTML = formatCode(this.$refs.code.innerHTML);

            let buttons = document.getElementsByClassName('jqx-button');
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].removeAttribute('type');
            }
        },
        methods: {
            generateData: function (startindex, endindex) {
                let data = {};
                for (let i = startindex; i < endindex; i++) {
                    let row = {};
                    let productindex = Math.floor(Math.random() * this.productNames.length);
                    let price = parseFloat(this.priceValues[productindex]);
                    let quantity = 1 + Math.round(Math.random() * 10);
                    row['id'] = i;
                    row['firstname'] = this.firstNames[Math.floor(Math.random() * this.firstNames.length)];
                    row['lastname'] = this.lastNames[Math.floor(Math.random() * this.lastNames.length)];
                    row['productname'] = this.productNames[productindex];
                    row['price'] = price;
                    row['quantity'] = quantity;
                    row['total'] = price * quantity;
                    data[i] = row;
                }
                return data;
            },
            rendergridrows: function (params) {
                let data = this.generateData(params.startindex, params.endindex);
                return data;
            },
            totalcolumnrenderer: function (row, column, cellvalue) {
                let newCellValue = jqx.dataFormat.formatnumber(cellvalue, 'c2');
                return '<span style="margin: 6px 3px; font-size: 12px; float: right; font-weight: bold;">' + newCellValue + '</span>';
            }
        }
    }
</script>