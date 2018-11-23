<template>
    <div class="filtering-docs">
        <h1>Vue Grid - Filtering</h1>
        <br />
        To enable the filtering feature, you need to set the <span class="keyword">filterable</span> property to true.
        When the value of the <span class="keyword">filterable</span> property is true, the Grid displays a filtering panel in the columns popup menus.
        jqxGrid has several methods that allow you to handle the data filtering - <span class="keyword">addfilter</span>, <span class="keyword">removefilter</span>, <span class="keyword">applyfilters</span> and <span class="keyword">clearfilters</span>.
        The first method adds a filter to a grid column. The <span class="keyword">removefilter</span> method removes a filter from a grid column. The <span class="keyword">applyfilters</span> method applies all filters to the grid and refreshes its contents. The last method clears the filtering.
        <br />
        Let's see how to add a filter:
        <br /><br />
        1. The first step is to create a filter group. The filter group is a group of one or more filtering criterias.
        <br /><br />
        <pre class="preCode"><code class="code">let filtergroup = new jqx.filter();</code></pre>
        <br />

        2. The next step is to create the filters. Each filter must have a filter value - this is the value we compare each cell value with.
        The filter condition specifies how the filter will compare each cell value with the filter value. The filter condition value depends on the filter's type
        (jqxGrid supports string, numeric and date filters). If you want to get the list of the supported grid filtering conditions, you can use the <span class="keyword">getoperatorsbyfiltertype</span>
        method of filter group.The <span class="keyword">createfilter</span> method is used to create the filter.
        <br /> <br />
        <pre class="preCode"><code class="code">let filtervalue = 'Beate';
let filtercondition = 'contains';
// possible conditions for string filter: 'EMPTY', 'NOT_EMPTY', 'CONTAINS', 'CONTAINS_CASE_SENSITIVE',
// 'DOES_NOT_CONTAIN', 'DOES_NOT_CONTAIN_CASE_SENSITIVE', 'STARTS_WITH', 'STARTS_WITH_CASE_SENSITIVE',
// 'ENDS_WITH', 'ENDS_WITH_CASE_SENSITIVE', 'EQUAL', 'EQUAL_CASE_SENSITIVE', 'NULL', 'NOT_NULL'
// possible conditions for numeric filter: 'EQUAL', 'NOT_EQUAL', 'LESS_THAN', 'LESS_THAN_OR_EQUAL', 'GREATER_THAN', 'GREATER_THAN_OR_EQUAL', 'NULL', 'NOT_NULL'
// possible conditions for date filter: 'EQUAL', 'NOT_EQUAL', 'LESS_THAN', 'LESS_THAN_OR_EQUAL', 'GREATER_THAN', 'GREATER_THAN_OR_EQUAL', 'NULL', 'NOT_NULL'
let filter1 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
filtervalue = 'Andrew';
filtercondition = 'starts_with';
let filter2 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);</code></pre>
        <br />

        3. The third step is to add the filters to the filter group. In the code example below, we added two filters in the filter group with operator 'or'.
        This means that each cell value will be evaluated by filter1 and filter2 and the evaluation result will be true,
        if the filter1's returned value is true or filter2's returned value is true.
        <br /> <br />
        <pre class="preCode"><code class="code">let filter_or_operator = 1;
filtergroup.addfilter(filter_or_operator, filter1);
filtergroup.addfilter(filter_or_operator, filter2);</code></pre>
        <br />

        4. In the final step, we add the filter group to the first column and apply the filters by calling the <span class="keyword">applyfilters</span> method.
        <br /><br />
        <pre class="preCode"><code class="code">// add the filters
this.$refs.myGrid.addfilter('firstname', filtergroup, true);
// apply the filters
this.$refs.myGrid.applyfilters();</code></pre>
        <br />

        If you want to remove the filter, call the <span class="keyword">removefilter</span> method and then the <span class="keyword">applyfilters</span> method.
        <br /><br />
        <pre class="preCode"><code class="code">this.$refs.myGrid.removefilter('firstname');
this.$refs.myGrid.applyfilters();</code></pre>
        <br />

        If you want to clear all filters, use the <span class="keyword">clearfilters</span> method.
        <br /><br />
        <pre class="preCode"><code class="code">this.$refs.myGrid.clearfilters();</code></pre>
        <br />

        <strong>Custom Filter Conditions</strong>
        <br /> <br />
        To customzie the filter conditions, you need to do the following:<br /> <br />
        1. Update the <span class="keyword">Localization Strings</span>. The filter conditions displayed in the filter dropdowns are loaded from the jqxGrid's localization object.<br />
        *Use the Grid's <span class="keyword">ready</span> callback or bind to the <span class="keyword">bindingcomplete</span> event before the Grid's initialization.
        <br /> <br />
        2. The second step is to update the conditions within the Filter object. In order to achieve that, you need to add a function called <span class="keyword">updatefilterconditions</span>.
        That function is invoked by jqxGrid with 2 parameters - the type of the filter and the default filter conditions.
        As a result, the function should return an array of strings depending on the filter's type. That array will be used by the filter object.
        <br /> <br />
        <div>
            <JqxTabs :theme="'material'" :width="'100%'" :height="'100%'">
                <ul>
                    <li style="margin-left: 30px;">Preview</li>
                    <li>Source</li>
                </ul>
                <div>
                    <JqxGrid ref="myGrid" :theme="'material'" :width="width" :source="source"
                             :autoheight="true" :columns="columns" :filterable="true"
                             :autoshowfiltericon="true" :ready="ready" :updatefilterconditions="updatefilterconditions">
                    </JqxGrid>
                </div>
                <div>
                    <pre><code class="code">&lt;template>
    &lt;JqxGrid ref="myGrid" :theme="'material'" :width="width" :source="source" 
             :autoheight="true" :columns="columns" :filterable="true" 
             :autoshowfiltericon="true" :ready="ready" :updatefilterconditions="updatefilterconditions">
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
                    ['Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico']
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
        methods: {
            updatefilterconditions: function (type, defaultconditions) {
                let stringcomparisonoperators = ['CONTAINS', 'DOES_NOT_CONTAIN'];
                let numericcomparisonoperators = ['LESS_THAN', 'GREATER_THAN'];
                let datecomparisonoperators = ['LESS_THAN', 'GREATER_THAN'];
                let booleancomparisonoperators = ['EQUAL', 'NOT_EQUAL'];
                switch (type) {
                    case 'stringfilter':
                        return stringcomparisonoperators;
                    case 'numericfilter':
                        return numericcomparisonoperators;
                    case 'datefilter':
                        return datecomparisonoperators;
                    case 'booleanfilter':
                        return booleancomparisonoperators;
                }
            },
            ready: function () {
                let localizationObject = {
                    filterstringcomparisonoperators: ['contains', 'does not contain'],
                    // filter numeric comparison operators.
                    filternumericcomparisonoperators: ['less than', 'greater than'],
                    // filter date comparison operators.
                    filterdatecomparisonoperators: ['less than', 'greater than'],
                    // filter bool comparison operators.
                    filterbooleancomparisonoperators: ['equal', 'not equal']
                }
                this.$refs.myGrid.localizestrings(localizationObject);
            }
        }
    }
&lt;/script>
</code></pre>
                </div>
            </JqxTabs>
        </div>
        <br /> <br />
        <strong>Add filters to multiple columns through the API</strong>
        <br /> <br />
        <div>
            <JqxTabs :theme="'material'" :width="'100%'" :height="'100%'">
                <ul>
                    <li style="margin-left: 30px;">Preview</li>
                    <li>Source</li>
                </ul>
                <div>
                    <JqxGrid ref="myGrid2" :theme="'material'" :width="width" :source="source2"
                             :autoheight="true" :columns="columns2" :sortable="true"
                             :filterable="true" :autoshowfiltericon="true" :ready="ready2">
                    </JqxGrid>
                </div>
                <div>
                    <pre><code class="code">&lt;template>
    &lt;JqxGrid ref="myGrid" :theme="'material'" :width="width" :source="source"
             :autoheight="true" :columns="columns" :sortable="true"
             :filterable="true" :autoshowfiltericon="true" :ready="ready">
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
                   { text: 'First Name', datafield: 'firstname', width: 160 },
                    { text: 'Last Name', datafield: 'lastname', width: 160 },
                    { text: 'Product', datafield: 'productname', width: 170 },
                    { text: 'Order Date', datafield: 'date', filtertype: 'date', width: 160, cellsformat: 'dd-MMMM-yyyy' },
                    { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                    { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: localdata: [
                    { firstname: "Andrew", lastname: "Burke", productname: "White Chocolate Mocha", quantity: 5, price: 3.8 },
                    { firstname: "Andrew", lastname: "Wilson", productname: "Espresso con Panna", quantity: 1, price: 5 },
                    { firstname: "Nancy", lastname: "Fuller", productname: "Caffe Latte", quantity: 1, price: 3.5 },
                    { firstname: "Regina", lastname: "Wilson", productname: "Doubleshot Espresso", quantity: 7, price: 4.2 },
                    { firstname: "Mayumi", lastname: "Davolio", productname: "Caffe Espresso", quantity: 1, price: 3.6 },
                    { firstname: "Beate", lastname: "Saavedra", productname: "Caffe Latte", quantity: 2, price: 3.5 },
                    { firstname: "Beate", lastname: "Nodier", productname: "White Chocolate Mocha", quantity: 6, price: 3.8 },
                    { firstname: "Petra", lastname: "Winkler", productname: "Doubleshot Espresso", quantity: 5, price: 4.6 },
                    { firstname: "Andrew", lastname: "Rossi", productname: "Caffe Latte", quantity: 2, price: 3.5 },
                    { firstname: "Nancy", lastname: "Saavedra", productname: "Cappuccino", quantity: 1, price: 3.8 },
                    { firstname: "Regina", lastname: "Wilson", productname: "Doubleshot Espresso", quantity: 7, price: 4.6 },
                    { firstname: "Mayumi", lastname: "Bjorn", productname: "Black Tea", quantity: 1, price: 3.8 },
                    { firstname: "Beate", lastname: "Petersen", productname: "Caffe Latte", quantity: 2, price: 3.5 },
                    { firstname: "Saavedra", lastname: "Fuller", productname: "Black Tea", quantity: 6, price: 3.8 }
                ],
                datatype: 'array'
            };
        },
        methods: {
            addfilter: function () {
                // create a filter group for the FirstName column.
                let fNameFiltergroup = new jqx.filter();
                // operator between the filters in the filter group. 1 is for OR. 0 is for AND.
                let filter_or_operator = 1;
                // create a string filter with `contains` condition.
                let filtervalue = 'Beate';
                let filtercondition = 'contains';
                let fNameFilter1 = fNameFiltergroup.createfilter('stringfilter', filtervalue, filtercondition);
                // create second filter.
                filtervalue = 'Andrew';
                filtercondition = 'starts_with';
                let fNameFilter2 = fNameFiltergroup.createfilter('stringfilter', filtervalue, filtercondition);
                // add the filters to the filter group.
                fNameFiltergroup.addfilter(filter_or_operator, fNameFilter1);
                fNameFiltergroup.addfilter(filter_or_operator, fNameFilter2);
                // add the filter group to the `firstname` column in the Grid.
                this.$refs.myGrid.addfilter('firstname', fNameFiltergroup);
                // create a filter group for the Quantity column.
                let quantityFilterGroup = new jqx.filter();
                // create a filter.
                filter_or_operator = 1;
                filtervalue = 3;
                filtercondition = 'less_than';
                let quantityFilter1 = quantityFilterGroup.createfilter('numericfilter', filtervalue, filtercondition);
                quantityFilterGroup.addfilter(filter_or_operator, quantityFilter1);
                // add the filter group to the `quantity` column in the Grid.
                this.$refs.myGrid.addfilter('quantity', quantityFilterGroup);
                // apply the filters.
                this.$refs.myGrid.applyfilters();
            },
            ready: function () {
                this.addfilter();
            }
        }
    }
&lt;/script>
</code></pre>
                </div>
            </JqxTabs>
        </div>
        <br />
        By default the filter groups are combined with 'AND' operator. That means that the Grid will display records if they meet the criteria of the filter group applied to column 1 and the filter group applied to column 2, etc.
        You can create any combination of filter groups using 'AND' and 'OR'.
        <br />
        The example below illustrates how:
        <br />
        <br />
        <div>
            <JqxTabs :theme="'material'" :width="'100%'" :height="'100%'">
                <ul>
                    <li style="margin-left: 30px;">Preview</li>
                    <li>Source</li>
                </ul>
                <div>
                    <JqxGrid ref="myGrid3" :theme="'material'" :width="width" :source="source3"
                             :autoheight="true" :columns="columns2" :sortable="true"
                             :filterable="true" :autoshowfiltericon="true" :ready="ready3">
                    </JqxGrid>
                </div>
                <div>
                    <pre><code class="code">&lt;template>
    &lt;JqxGrid ref="myGrid" :theme="'material'" :width="width" :source="source"
             :autoheight="true" :columns="columns" :sortable="true"
             :filterable="true" :autoshowfiltericon="true" :ready="ready">
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
                    { text: 'First Name', datafield: 'firstname', width: 160 },
                    { text: 'Last Name', datafield: 'lastname', width: 160 },
                    { text: 'Product', datafield: 'productname', width: 170 },
                    { text: 'Order Date', datafield: 'date', filtertype: 'date', width: 160, cellsformat: 'dd-MMMM-yyyy' },
                    { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                    { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: [
                    { firstname: "Andrew", lastname: "Burke", productname: "White Chocolate Mocha", quantity: 5, price: 3.8 },
                    { firstname: "Andrew", lastname: "Wilson", productname: "Espresso con Panna", quantity: 1, price: 5 },
                    { firstname: "Nancy", lastname: "Fuller", productname: "Caffe Latte", quantity: 1, price: 3.5 },
                    { firstname: "Regina", lastname: "Wilson", productname: "Doubleshot Espresso", quantity: 7, price: 4.2 },
                    { firstname: "Mayumi", lastname: "Davolio", productname: "Caffe Espresso", quantity: 1, price: 3.6 },
                    { firstname: "Beate", lastname: "Saavedra", productname: "Caffe Latte", quantity: 2, price: 3.5 },
                    { firstname: "Beate", lastname: "Nodier", productname: "White Chocolate Mocha", quantity: 6, price: 3.8 },
                    { firstname: "Petra", lastname: "Winkler", productname: "Doubleshot Espresso", quantity: 5, price: 4.6 },
                    { firstname: "Andrew", lastname: "Rossi", productname: "Caffe Latte", quantity: 2, price: 3.5 },
                    { firstname: "Nancy", lastname: "Saavedra", productname: "Cappuccino", quantity: 1, price: 3.8 },
                    { firstname: "Regina", lastname: "Wilson", productname: "Doubleshot Espresso", quantity: 7, price: 4.6 },
                    { firstname: "Mayumi", lastname: "Bjorn", productname: "Black Tea", quantity: 1, price: 3.8 },
                    { firstname: "Beate", lastname: "Petersen", productname: "Caffe Latte", quantity: 2, price: 3.5 },
                    { firstname: "Saavedra", lastname: "Fuller", productname: "Black Tea", quantity: 6, price: 3.8 }
                ],
                datatype: 'array'
            };
        },
        methods: {
            addfilter: function () {
                // create a filter group for the FirstName column.
                let fNameFiltergroup = new jqx.filter();
                fNameFiltergroup.operator = 'or';
                // operator between the filters in the filter group. 1 is for OR. 0 is for AND.
                let filter_or_operator = 1;
                // create a string filter with `contains` condition.
                let filtervalue = 'Beate';
                let filtercondition = 'contains';
                let fNameFilter1 = fNameFiltergroup.createfilter('stringfilter', filtervalue, filtercondition);
                // create second filter.
                filtervalue = 'Andrew';
                filtercondition = 'starts_with';
                let fNameFilter2 = fNameFiltergroup.createfilter('stringfilter', filtervalue, filtercondition);
                // add the filters to the filter group.
                fNameFiltergroup.addfilter(filter_or_operator, fNameFilter1);
                fNameFiltergroup.addfilter(filter_or_operator, fNameFilter2);
                // add the filter group to the `firstname` column in the Grid.
                this.$refs.myGrid.addfilter('firstname', fNameFiltergroup);
                // create a filter group for the Quantity column.
                let quantityFilterGroup = new jqx.filter();
                quantityFilterGroup.operator = 'or';
                // create a filter.
                filter_or_operator = 1;
                filtervalue = 3;
                filtercondition = 'less_than';
                let quantityFilter1 = quantityFilterGroup.createfilter('numericfilter', filtervalue, filtercondition);
                quantityFilterGroup.addfilter(filter_or_operator, quantityFilter1);
                // add the filter group to the `quantity` column in the Grid.
                this.$refs.myGrid.addfilter('quantity', quantityFilterGroup);
                // apply the filters.
                this.$refs.myGrid.applyfilters();
            },
            ready: function () {
                this.addfilter();
            }
        }
    }
&lt;/script>
</code></pre>
                </div>
            </JqxTabs>
        </div>
        <br />
        Using the above code, jqxGrid will display any record which meets at least one of the filtering criterias i.e a record is displayed, if it meets the condition of the 'FirstName' column's filter group or the one of the 'Quantity' column's filter group.
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
                source2: new jqx.dataAdapter(this.source2),
                source3: new jqx.dataAdapter(this.source3),
                columns: [
                    { text: 'Contact Name', datafield: 'ContactName' },
                    { text: 'Contact Title', datafield: 'Title' },
                    { text: 'City', datafield: 'City' },
                    { text: 'Country', datafield: 'Country' }
                ],
                columns2: [
                    { text: 'First Name', datafield: 'firstname', width: 160 },
                    { text: 'Last Name', datafield: 'lastname', width: 160 },
                    { text: 'Product', datafield: 'productname', width: 170 },
                    { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                    { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: [
                    ['Maria Anders', 'Sales Representative', 'Berlin', 'Germany'],
                    ['Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico'],
                    ['Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico']

                    
                ],
                datafields: [
                    { name: 'ContactName', type: 'string', map: '0' },
                    { name: 'Title', type: 'string', map: '1' },
                    { name: 'City', type: 'string', map: '2' },
                    { name: 'Country', type: 'string', map: '3' }
                ],
                datatype: 'array'
            };
            this.source2 = {
                localdata: [
                    { firstname: "Andrew", lastname: "Burke", productname: "White Chocolate Mocha", quantity: 5, price: 3.8 },
                    { firstname: "Andrew", lastname: "Wilson", productname: "Espresso con Panna", quantity: 1, price: 5 },
                    { firstname: "Nancy", lastname: "Fuller", productname: "Caffe Latte", quantity: 1, price: 3.5 },
                    { firstname: "Regina", lastname: "Wilson", productname: "Doubleshot Espresso", quantity: 7, price: 4.2 },
                    { firstname: "Mayumi", lastname: "Davolio", productname: "Caffe Espresso", quantity: 1, price: 3.6 },
                    { firstname: "Beate", lastname: "Saavedra", productname: "Caffe Latte", quantity: 2, price: 3.5 },
                    { firstname: "Beate", lastname: "Nodier", productname: "White Chocolate Mocha", quantity: 6, price: 3.8 },
                    { firstname: "Petra", lastname: "Winkler", productname: "Doubleshot Espresso", quantity: 5, price: 4.6 },
                    { firstname: "Andrew", lastname: "Rossi", productname: "Caffe Latte", quantity: 2, price: 3.5 },
                    { firstname: "Nancy", lastname: "Saavedra", productname: "Cappuccino", quantity: 1, price: 3.8 },
                    { firstname: "Regina", lastname: "Wilson", productname: "Doubleshot Espresso", quantity: 7, price: 4.6 },
                    { firstname: "Mayumi", lastname: "Bjorn", productname: "Black Tea", quantity: 1, price: 3.8 },
                    { firstname: "Beate", lastname: "Petersen", productname: "Caffe Latte", quantity: 2, price: 3.5 },
                    { firstname: "Saavedra", lastname: "Fuller", productname: "Black Tea", quantity: 6, price: 3.8 }
                ],
                datatype: 'array'
            };
            this.source3 = {
                localdata: [
                    { firstname: "Andrew", lastname: "Burke", productname: "White Chocolate Mocha", quantity: 5, price: 3.8 },
                    { firstname: "Andrew", lastname: "Wilson", productname: "Espresso con Panna", quantity: 1, price: 5 },
                    { firstname: "Nancy", lastname: "Fuller", productname: "Caffe Latte", quantity: 1, price: 3.5 },
                    { firstname: "Regina", lastname: "Wilson", productname: "Doubleshot Espresso", quantity: 7, price: 4.2 },
                    { firstname: "Mayumi", lastname: "Davolio", productname: "Caffe Espresso", quantity: 1, price: 3.6 },
                    { firstname: "Beate", lastname: "Saavedra", productname: "Caffe Latte", quantity: 2, price: 3.5 },
                    { firstname: "Beate", lastname: "Nodier", productname: "White Chocolate Mocha", quantity: 6, price: 3.8 },
                    { firstname: "Petra", lastname: "Winkler", productname: "Doubleshot Espresso", quantity: 5, price: 4.6 },
                    { firstname: "Andrew", lastname: "Rossi", productname: "Caffe Latte", quantity: 2, price: 3.5 },
                    { firstname: "Nancy", lastname: "Saavedra", productname: "Cappuccino", quantity: 1, price: 3.8 },
                    { firstname: "Regina", lastname: "Wilson", productname: "Doubleshot Espresso", quantity: 7, price: 4.6 },
                    { firstname: "Mayumi", lastname: "Bjorn", productname: "Black Tea", quantity: 1, price: 3.8 },
                    { firstname: "Beate", lastname: "Petersen", productname: "Caffe Latte", quantity: 2, price: 3.5 },
                    { firstname: "Saavedra", lastname: "Fuller", productname: "Black Tea", quantity: 6, price: 3.8 }
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
            updatefilterconditions: function (type, defaultconditions) {
                let stringcomparisonoperators = ['CONTAINS', 'DOES_NOT_CONTAIN'];
                let numericcomparisonoperators = ['LESS_THAN', 'GREATER_THAN'];
                let datecomparisonoperators = ['LESS_THAN', 'GREATER_THAN'];
                let booleancomparisonoperators = ['EQUAL', 'NOT_EQUAL'];
                switch (type) {
                    case 'stringfilter':
                        return stringcomparisonoperators;
                    case 'numericfilter':
                        return numericcomparisonoperators;
                    case 'datefilter':
                        return datecomparisonoperators;
                    case 'booleanfilter':
                        return booleancomparisonoperators;
                }
            },
            ready: function () {
                let localizationObject = {
                    filterstringcomparisonoperators: ['contains', 'does not contain'],
                    // filter numeric comparison operators.
                    filternumericcomparisonoperators: ['less than', 'greater than'],
                    // filter date comparison operators.
                    filterdatecomparisonoperators: ['less than', 'greater than'],
                    // filter bool comparison operators.
                    filterbooleancomparisonoperators: ['equal', 'not equal']
                }
                this.$refs.myGrid.localizestrings(localizationObject);
            },
            ready2: function () {
                this.addfilter();
            },
            ready3: function () {
                this.addfilter2();
            },
            addfilter: function () {
                // create a filter group for the FirstName column.
                let fNameFiltergroup = new jqx.filter();
                // operator between the filters in the filter group. 1 is for OR. 0 is for AND.
                let filter_or_operator = 1;
                // create a string filter with `contains` condition.
                let filtervalue = 'Beate';
                let filtercondition = 'contains';
                let fNameFilter1 = fNameFiltergroup.createfilter('stringfilter', filtervalue, filtercondition);
                // create second filter.
                filtervalue = 'Andrew';
                filtercondition = 'starts_with';
                let fNameFilter2 = fNameFiltergroup.createfilter('stringfilter', filtervalue, filtercondition);
                // add the filters to the filter group.
                fNameFiltergroup.addfilter(filter_or_operator, fNameFilter1);
                fNameFiltergroup.addfilter(filter_or_operator, fNameFilter2);
                // add the filter group to the `firstname` column in the Grid.
                this.$refs.myGrid2.addfilter('firstname', fNameFiltergroup);
                // create a filter group for the Quantity column.
                let quantityFilterGroup = new jqx.filter();
                // create a filter.
                filter_or_operator = 1;
                filtervalue = 3;
                filtercondition = 'less_than';
                let quantityFilter1 = quantityFilterGroup.createfilter('numericfilter', filtervalue, filtercondition);
                quantityFilterGroup.addfilter(filter_or_operator, quantityFilter1);
                // add the filter group to the `quantity` column in the Grid.
                this.$refs.myGrid2.addfilter('quantity', quantityFilterGroup);
                // apply the filters.
                this.$refs.myGrid2.applyfilters();
            },
            addfilter2: function () {
                // create a filter group for the FirstName column.
                let fNameFiltergroup = new jqx.filter();
                fNameFiltergroup.operator = 'or';
                // operator between the filters in the filter group. 1 is for OR. 0 is for AND.
                let filter_or_operator = 1;
                // create a string filter with `contains` condition.
                let filtervalue = 'Beate';
                let filtercondition = 'contains';
                let fNameFilter1 = fNameFiltergroup.createfilter('stringfilter', filtervalue, filtercondition);
                // create second filter.
                filtervalue = 'Andrew';
                filtercondition = 'starts_with';
                let fNameFilter2 = fNameFiltergroup.createfilter('stringfilter', filtervalue, filtercondition);
                // add the filters to the filter group.
                fNameFiltergroup.addfilter(filter_or_operator, fNameFilter1);
                fNameFiltergroup.addfilter(filter_or_operator, fNameFilter2);
                // add the filter group to the `firstname` column in the Grid.
                this.$refs.myGrid3.addfilter('firstname', fNameFiltergroup);
                // create a filter group for the Quantity column.
                let quantityFilterGroup = new jqx.filter();
                quantityFilterGroup.operator = 'or';
                // create a filter.
                filter_or_operator = 1;
                filtervalue = 3;
                filtercondition = 'less_than';
                let quantityFilter1 = quantityFilterGroup.createfilter('numericfilter', filtervalue, filtercondition);
                quantityFilterGroup.addfilter(filter_or_operator, quantityFilter1);
                // add the filter group to the `quantity` column in the Grid.
                this.$refs.myGrid3.addfilter('quantity', quantityFilterGroup);
                // apply the filters.
                this.$refs.myGrid3.applyfilters();
            },
        }
    }
</script>
<style scoped>
    pre {
        width: 100%
    }
</style>