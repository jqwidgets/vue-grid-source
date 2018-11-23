<template>
    <div class="nested-grids">
        <h1>jQWidgets Grid Nested Grids</h1>
        <p>
            This is a demo of the nested grid feature in Vue Grid. The nested grid is a second grid which appears when a row selector is clicked in the first grid. The nested grid is usually used to show relevant information to the row in the first grid.
        </p>
        <JqxTabs ref="myTabs" :theme="'material'" :width="'100%'" :height="'100%'">
            <ul>
                <li style="margin-left: 30px;">Preview</li>
                <li>Source</li>
            </ul>
            <div>
                <JqxGrid ref="myGrid" :theme="'material'"
                         :width="getWidth" :source="employeesAdapter" :columns="columns"
                         :rowdetails="true" :rowsheight="35" :initrowdetails="initRowDetails"
                         :ready="ready" :rowdetailstemplate="rowdetailstemplate">
                </JqxGrid>
            </div>
            <div>
                <pre><code ref="code">
    &lt;template>
        &lt;div>
           &lt;JqxGrid ref="myGrid" :theme="'material'"
                    :width="getWidth" :source="employeesAdapter" :columns="columns"
                    :rowdetails="true" :rowsheight="35" :initrowdetails="initRowDetails"
                    :ready="ready" :rowdetailstemplate="rowdetailstemplate">
           &lt;/JqxGrid>
        &lt;/div>
    &lt;/template>
    &lt;script>
        import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
        export default {
            components: {
                JqxGrid,
            },
            data: function () {
                return {
                    getWidth: '99%',
                    employeesAdapter: new jqx.dataAdapter(this.source),
                    columns: [
                        { text: 'Photo', width: 50, cellsrenderer: this.photoRenderer },
                        { text: 'First Name', datafield: 'FirstName', cellsrenderer: this.renderer },
                        { text: 'Last Name', datafield: 'LastName', cellsrenderer: this.renderer },
                        { text: 'Title', datafield: 'Title', cellsrenderer: this.renderer },
                        { text: 'Address', datafield: 'Address', cellsrenderer: this.renderer },
                        { text: 'City', datafield: 'City', cellsrenderer: this.renderer }
                    ],
                    rowdetailstemplate: {
                        rowdetails: '&lt;div id="nestedGrid" style="margin: 10px;">&lt;/div>', rowdetailsheight: 200, rowdetailshidden: true
                    }
                }
            },
            beforeCreate: function () {
                this.source = {
                    datafields: [
                        { name: 'FirstName' },
                        { name: 'LastName' },
                        { name: 'Title' },
                        { name: 'Address' },
                        { name: 'City' }
                    ],
                    root: 'Employees',
                    record: 'Employee',
                    id: 'EmployeeID',
                    datatype: 'xml',
                    url: '/sampledata/employees.xml'
                };
                const ordersSource = {
                    datafields: [
                        { name: 'EmployeeID', type: 'string' },
                        { name: 'ShipName', type: 'string' },
                        { name: 'ShipAddress', type: 'string' },
                        { name: 'ShipCity', type: 'string' },
                        { name: 'ShipCountry', type: 'string' },
                        { name: 'ShippedDate', type: 'date' }
                    ],
                    root: 'Orders',
                    record: 'Order',
                    datatype: 'xml',
                    url: '/sampledata/orderdetails.xml'
                }
                this.ordersDataAdapter = new jqx.dataAdapter(ordersSource, { autoBind: true });
                this.nestedGrids = [];
            },
            methods: {
                initRowDetails: function (index, parentElement, gridElement, record) {
                    let id = record.uid.toString();
                    let nestedGridContainer = parentElement.children[0];
                    this.nestedGrids[index] = nestedGridContainer;
                    let filtergroup = new jqx.filter();
                    let filter_or_operator = 1;
                    let filtervalue = id;
                    let filtercondition = 'equal';
                    let filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
                    // fill the orders depending on the id.
                    let orders = this.ordersDataAdapter.records;
                    let ordersbyid = [];
                    for (let i = 0; i &lt; orders.length; i++) {
                        let result = filter.evaluate(orders[i]['EmployeeID']);
                        if (result)
                            ordersbyid.push(orders[i]);
                    }
                    let ordersSource = {
                        datafields: [
                            { name: 'EmployeeID', type: 'string' },
                            { name: 'ShipName', type: 'string' },
                            { name: 'ShipAddress', type: 'string' },
                            { name: 'ShipCity', type: 'string' },
                            { name: 'ShipCountry', type: 'string' },
                            { name: 'ShippedDate', type: 'date' }
                        ],
                        id: 'OrderID',
                        localdata: ordersbyid
                    }
                    let nestedGridAdapter = new jqx.dataAdapter(ordersSource);
                    if (nestedGridContainer != null) {
                        let settings = {
                            theme: 'material',
                            width: '95%',
                            height: '90%',
                            source: nestedGridAdapter,
                            columns: [
                                { text: 'Ship Name', datafield: 'ShipName' },
                                { text: 'Ship Address', datafield: 'ShipAddress' },
                                { text: 'Ship City', datafield: 'ShipCity' },
                                { text: 'Ship Country', datafield: 'ShipCountry' },
                                { text: 'Shipped Date', datafield: 'ShippedDate' }
                            ]
                        };
                        jqwidgets.createInstance(`#${nestedGridContainer.id}`, 'jqxGrid', settings);
                    }
                },
                photoRenderer: function (row, column, value) {
                    let name = this.$refs.myGrid.getrowdata(row).FirstName;
                    let imgurl = '/images/' + name.toLowerCase() + '.png';
                    let img = '&lt;div style="background: white;">&lt;img style="margin: 2px; margin-left: 10px;" width="32" height="32" src="' + imgurl + '">&lt;/div>';
                    return img;
                },
                renderer: function (row, column, value) {
                    return '&lt;span style="margin-left: 4px; margin-top: 9px; float: left;">' + value + '&lt;/span>';
                },
                ready: function () {
                    this.$refs.myGrid.showrowdetails(1);
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
                employeesAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Photo', width: 50, cellsrenderer: this.photoRenderer },
                    { text: 'First Name', datafield: 'FirstName', cellsrenderer: this.renderer },
                    { text: 'Last Name', datafield: 'LastName', cellsrenderer: this.renderer },
                    { text: 'Title', datafield: 'Title', cellsrenderer: this.renderer },
                    { text: 'Address', datafield: 'Address', cellsrenderer: this.renderer },
                    { text: 'City', datafield: 'City', cellsrenderer: this.renderer }
                ],
                rowdetailstemplate: {
                    rowdetails: '<div id="nestedGrid" style="margin: 10px;"></div>', rowdetailsheight: 200, rowdetailshidden: true
                }
            }
        },
        beforeCreate: function () {
            this.source = {
                datafields: [
                    { name: 'FirstName' },
                    { name: 'LastName' },
                    { name: 'Title' },
                    { name: 'Address' },
                    { name: 'City' }
                ],
                root: 'Employees',
                record: 'Employee',
                id: 'EmployeeID',
                datatype: 'xml',
                url: './sampledata/employees.xml'
            };
            const ordersSource = {
                datafields: [
                    { name: 'EmployeeID', type: 'string' },
                    { name: 'ShipName', type: 'string' },
                    { name: 'ShipAddress', type: 'string' },
                    { name: 'ShipCity', type: 'string' },
                    { name: 'ShipCountry', type: 'string' },
                    { name: 'ShippedDate', type: 'date' }
                ],
                root: 'Orders',
                record: 'Order',
                datatype: 'xml',
                url: './sampledata/orderdetails.xml'
            }
            this.ordersDataAdapter = new jqx.dataAdapter(ordersSource, { autoBind: true });
            this.nestedGrids = [];
        },
        mounted: function () {
            this.$refs.code.innerHTML = formatCode(this.$refs.code.innerHTML);
        },
        methods: {
            initRowDetails: function (index, parentElement, gridElement, record) {
                let id = record.uid.toString();
                let nestedGridContainer = parentElement.children[0];
                this.nestedGrids[index] = nestedGridContainer;
                let filtergroup = new jqx.filter();
                let filter_or_operator = 1;
                let filtervalue = id;
                let filtercondition = 'equal';
                let filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
                // fill the orders depending on the id.
                let orders = this.ordersDataAdapter.records;
                let ordersbyid = [];
                for (let i = 0; i < orders.length; i++) {
                    let result = filter.evaluate(orders[i]['EmployeeID']);
                    if (result)
                        ordersbyid.push(orders[i]);
                }
                let ordersSource = {
                    datafields: [
                        { name: 'EmployeeID', type: 'string' },
                        { name: 'ShipName', type: 'string' },
                        { name: 'ShipAddress', type: 'string' },
                        { name: 'ShipCity', type: 'string' },
                        { name: 'ShipCountry', type: 'string' },
                        { name: 'ShippedDate', type: 'date' }
                    ],
                    id: 'OrderID',
                    localdata: ordersbyid
                }
                let nestedGridAdapter = new jqx.dataAdapter(ordersSource);
                if (nestedGridContainer != null) {
                    let settings = {
                        theme: 'material',
                        width: '95%',
                        height: '90%',
                        source: nestedGridAdapter,
                        columns: [
                            { text: 'Ship Name', datafield: 'ShipName' },
                            { text: 'Ship Address', datafield: 'ShipAddress' },
                            { text: 'Ship City', datafield: 'ShipCity' },
                            { text: 'Ship Country', datafield: 'ShipCountry' },
                            { text: 'Shipped Date', datafield: 'ShippedDate' }
                        ]
                    };
                    jqwidgets.createInstance(`#${nestedGridContainer.id}`, 'jqxGrid', settings);
                }
            },
            photoRenderer: function (row, column, value) {
                let name = this.$refs.myGrid.getrowdata(row).FirstName;
                let imgurl = './images/' + name.toLowerCase() + '.png';
                let img = '<div style="background: white;"><img style="margin: 2px; margin-left: 10px;" width="32" height="32" src="' + imgurl + '"></div>';
                return img;
            },
            renderer: function (row, column, value) {
                return '<span style="margin-left: 4px; margin-top: 9px; float: left;">' + value + '</span>';
            },
            ready: function () {
                this.$refs.myGrid.showrowdetails(1);
            }
        }
    }
</script>