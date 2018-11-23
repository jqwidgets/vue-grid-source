<template>
    <div class="editing-docs">
        <h1>Vue Grid - Editing</h1>
        <br />
        jqxGrid Cell Editing feature much resembles the data entering experience in an Excel Spreadsheet - once you select a grid cell,
        you can enter data when you start typing text.<br />
        The Grid's <span class="keyword">editable</span> property specifies whether the editing is enabled or not.
        <br /><br />
        <strong>Mouse Edit Actions</strong>
        <br /><br />
        <ul>
            <li>Single mouse click: Marks the clicked cell as selected and shows the editor. The editor's value is equal to the cell's value.</li>
            <li>Single mouse click on a selected cell: Marks the cell as selected and shows the editor.</li>
            <li>Double mouse click on a cell: Marks the cell as selected and shows the editor. The editor's value is equal to the cell's value.</li>
        </ul>

        <strong>Keyboard Edit Actions and Navigation</strong>
        <br /><br />
        If the user starts typing text, the cell's content is replaced with the text entered from the user.
        <ul>
            <li>Left Arrow key is pressed - Selects the left cell, when the Grid is not in edit mode. Otherwise, the key stroke is handled by the editor.</li>
            <li>Right Arrow key is pressed - Selects the right cell, when the Grid is not in edit mode. Otherwise, the key stroke is handled by the editor.</li>
            <li>Up Arrow key is pressed - Selects the cell above, when the Grid is not in edit mode. Otherwise, the key stroke is handled by the editor.</li>
            <li>Down Arrow key is pressed - Selects the cell below, when the Grid is not in edit mode. Otherwise, the key stroke is handled by the editor.</li>
            <li>Page Up/Down is pressed - Navigate Up or Down with one page, when the Grid is not in edit mode. Otherwise, the key stroke is handled by the editor.</li>
            <li>Home/End is pressed - Navigate to the first or last row, when the Grid is not in edit mode. Otherwise, the key stroke is handled by the editor.</li>
            <li>Enter key is pressed - Shows the selected cell's editor. If the cell is in edit mode, hides the cell's editor and saves the new value. The editor's value is equal to the cell's value.</li>
            <li>Esc key is pressed - Hides the cell's editor and cancels the changes.</li>
            <li>Tab key is pressed - Selects the right cell. If the Grid is in edit mode, saves the edit cell's value, closes its editor, selects the right cell and opens its editor.</li>
            <li>Shift+Tab keys are pressed - Selects the left cell. If the Grid is in edit mode, saves the edit cell's value, closes its editor, selects the left cell and opens its editor.</li>
            <li>F2 key is pressed - shows the selected cell's editor.</li>
            <li>Space key is pressed - Toggles the checkbox editor's check state when the selected cell's column is a checkbox column.</li>
        </ul>
        <strong>Programmatic Editing</strong>
        <br /><br />
        The Grid have APIs for showing and hiding the cell editors.<br />
        The <span class="keyword">begincelledit</span> method allows you to put a specific cell into edit mode.
        <br /><br />
        <pre class="preCode"><code class="code">this.$refs.myGrid.begincelledit(0, 'firstname');</code></pre>
        <br />
        The <span class="keyword">endcelledit</span> method ends the edit operation and confirms or cancels the changes. <br />
        The following code cancels the changes:
        <br /><br />
        <pre class="preCode"><code class="code">this.$refs.myGrid.endcelledit(0, 'firstname', true);</code></pre>
        <br />
        The following code cancels the changes:
        <br /><br />
        <pre class="preCode"><code class="code">this.$refs.myGrid.endcelledit(0, 'firstname', false);</code></pre>
        <br />
        To set a new value to a Grid cell, you can use the <span class="keyword">setcellvalue</span> method:
        <br /><br />
        <pre class="preCode"><code class="code">// the first parameter is the row's index.
// the second parameter is the column's datafield.
// the third parameter is the new cell's value.
this.$refs.myGrid.setcellvalue(0, 'lastname', 'My Value');</code></pre>
        <br />
        To get the value of a Grid cell, you can use the <span class="keyword">getcellvalue</span> method:
        <br /> <br />
        <pre class="preCode"><code class="code">// the first parameter is the row's index.
// the second parameter is the column's datafield.
let value = this.$refs.myGrid.getcellvalue(0, 'lastname');</code></pre>
        <br />
        The <span class="keyword">cellbeginedit</span> and <span class="keyword">cellendedit</span> events are raised when the edit operation begins or ends.
        <br /><br />
        <pre class="preCode"><code class="code">&lt;JqxGrid @cellbeginedit="onCellBeginEdit($event)" @cellendedit="onCellEndEdit($event)"
         :width="width" :source="dataAdapter" :columns="columns"
         :editable="true">
&lt;/JqxGrid></code></pre>
        <br />
        <pre class="preCode"><code class="code">methods: {
    onCellBeginEdit: function (event) {
        let args = event.args;
        let columnDataField = args.datafield;
        let rowIndex = args.rowindex;
        let cellValue = args.value;
    },
    onCellEndEdit: function (event) {
        let args = event.args;
        let columnDataField = args.datafield;
        let rowIndex = args.rowindex;
        let cellValue = args.value;
        let oldValue = args.oldvalue;
    }
}</code></pre>
        <br />
        <strong>Editor Types</strong>
        <br /><br />
        jqxGrid supports the following types of editors:
        <ul>
            <li>TextBox</li>
            <li>CheckBox(uses the jqxCheckBox widget)</li>
            <li>NumberInput(uses the jqxNumberInput widget and edits currency, percentange and any type of numeric information)</li>
            <li>DateTimeInput(uses the jqxDateTimeInput widget and edits date and time values)</li>
            <li>DropDownList(uses the jqxDropDownList widget and selects a single value from a list of values)</li>
        </ul>
        To specify the column's editor, you should set the column's <span class="keyword">columntype</span> property to 'textbox', 'dropdownlist', 'numberinput', 'checkbox' or 'datetimeinput'.
        To disable the editing of a specific grid column, you can set the column's <span class="keyword">editable</span> property to false. The <span class="keyword">initeditor</span> function is called when the editor's widget
        is initialized. It allows you to use the properties of the widget and make it best fit your application's scenario.
        <br /><br />
        <div>
            <JqxTabs :theme="'material'" :width="'100%'" :height="'100%'">
                <ul>
                    <li style="margin-left: 30px;">Preview</li>
                    <li>Source</li>
                </ul>
                <div>
                    <JqxGrid :theme="'material'" :width="width" :source="source" :columns="columns"
                             :editable="true">
                    </JqxGrid>
                </div>
                <div>
                    <pre><code class="code">&lt;template>
    &lt;JqxGrid :theme="'material'" :width="width" :source="source" :columns="columns"
             :editable="true">
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
                    { text: 'First Name', columntype: 'textbox', datafield: 'firstname' },
                    { text: 'Last Name', datafield: 'lastname', columntype: 'textbox' },
                    { text: 'Product', columntype: 'dropdownlist', datafield: 'productname', width: 195 },
                    { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67 },
                    { text: 'Ship Date', datafield: 'date', columntype: 'datetimeinput', width: 110, align: 'right', cellsalign: 'right', cellsformat: 'd' },
                    {
                        text: 'Quantity', datafield: 'quantity', width: 70, align: 'right', cellsalign: 'right', columntype: 'numberinput',
                        initeditor: (row, cellvalue, editor) => {
                            editor.jqxNumberInput({ decimalDigits: 0, digits: 3 });
                        }
                    },
                    {
                        text: 'Price', datafield: 'price', align: 'right', cellsalign: 'right', cellsformat: 'c2', columntype: 'numberinput',
                        createeditor: (row, cellvalue, editor) => {
                            editor.jqxNumberInput({ digits: 3 });
                        }
                    }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(50, false),
                datatype: 'array',
                datafields: [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'date', type: 'date' },
                    { name: 'available', type: 'bool' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' },                   
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
        <br />
        <strong>Validation</strong>
        <br /><br />

        The Grid will display a validation popup message when the new cell's value is not valid. The developers are able to set a custom validation logic and error messages
        for each grid column. The Grid will stay in edit mode until a correct value is entered or the user presses the "Esc" key.
        <br /><br />
        In following code, the "Ship Date", "Quantity" and "Price" columns define custom validation functions. Each function has 2 parameters - the edit cell and its value.
        Depending on your logic, you can validate the value and return true if the value is correct or false, if the value is not correct.
        You can also return an object with 2 members - result and message. The message member represents the message that your users will see, if the validation fails.
        <br /> <br />
        <div>
            <JqxTabs :theme="'material'" :width="'100%'" :height="'100%'">
                <ul>
                    <li style="margin-left: 30px;">Preview</li>
                    <li>Source</li>
                </ul>
                <div>
                    <JqxGrid :theme="'material'" :width="width" :source="source" :columns="columns2"
                             :editable="true">
                    </JqxGrid>
                </div>
                <div>
                    <pre><code class="code">&lt;template>
    &lt;JqxGrid :theme="'material'" :width="width" :source="source" :columns="columns"
             :editable="true">
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
                    { text: 'First Name', columntype: 'textbox', datafield: 'firstname' },
                    { text: 'Last Name', datafield: 'lastname', columntype: 'textbox' },
                    { text: 'Product', columntype: 'dropdownlist', datafield: 'productname', width: 195 },
                    { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67 },
                    {
                        text: 'Ship Date', datafield: 'date', columntype: 'datetimeinput', width: 110, cellsalign: 'right', cellsformat: 'd',
                        validation: function (cell, value) {
                            var year = value.getFullYear();
                            if (year >= 2013) {
                                return { result: false, message: "Ship Date should be before 1/1/2013" };
                            }
                            return true;
                        }
                    },
                    {
                        text: 'Quantity', datafield: 'quantity', width: 70, cellsalign: 'right', columntype: 'numberinput',
                        validation: function (cell, value) {
                            if (value &lt; 0 || value > 100) {
                                return { result: false, message: "Quantity should be in the 0-100 interval" };
                            }
                            return true;
                        },
                        initeditor: function (row, cellvalue, editor) {
                            editor.jqxNumberInput({ decimalDigits: 0 });
                        }
                    },
                    {
                        text: 'Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2', columntype: 'numberinput',
                        validation: function (cell, value) {
                            if (value &lt; 0 || value > 15) {
                                return { result: false, message: "Price should be in the 0-15 interval" };
                            }
                            return true;
                        },
                        initeditor: function (row, cellvalue, editor) {
                            editor.jqxNumberInput({ digits: 3 });
                        }
                    }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(50, false),
                datatype: 'array',
                datafields: [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'date', type: 'date' },
                    { name: 'available', type: 'bool' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' },                   
                ]
            };
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
                    { text: 'First Name', columntype: 'textbox', datafield: 'firstname' },
                    { text: 'Last Name', datafield: 'lastname', columntype: 'textbox' },
                    { text: 'Product', columntype: 'dropdownlist', datafield: 'productname', width: 195 },
                    { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67 },
                    { text: 'Ship Date', datafield: 'date', columntype: 'datetimeinput', width: 110, align: 'right', cellsalign: 'right', cellsformat: 'd' },
                    {
                        text: 'Quantity', datafield: 'quantity', width: 70, align: 'right', cellsalign: 'right', columntype: 'numberinput',
                        initeditor: (row, cellvalue, editor) => {
                            editor.jqxNumberInput({ decimalDigits: 0, digits: 3 });
                        }
                    },
                    {
                        text: 'Price', datafield: 'price', align: 'right', cellsalign: 'right', cellsformat: 'c2', columntype: 'numberinput',
                        createeditor: (row, cellvalue, editor) => {
                            editor.jqxNumberInput({ digits: 3 });
                        }
                    }
                ],
                columns2: [
                    { text: 'First Name', columntype: 'textbox', datafield: 'firstname' },
                    { text: 'Last Name', datafield: 'lastname', columntype: 'textbox' },
                    { text: 'Product', columntype: 'dropdownlist', datafield: 'productname', width: 195 },
                    { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67 },
                    {
                        text: 'Ship Date', datafield: 'date', columntype: 'datetimeinput', width: 110, cellsalign: 'right', cellsformat: 'd',
                        validation: function (cell, value) {
                            var year = value.getFullYear();
                            if (year >= 2013) {
                                return { result: false, message: "Ship Date should be before 1/1/2013" };
                            }
                            return true;
                        }
                    },
                    {
                        text: 'Quantity', datafield: 'quantity', width: 70, cellsalign: 'right', columntype: 'numberinput',
                        validation: function (cell, value) {
                            if (value < 0 || value > 100) {
                                return { result: false, message: "Quantity should be in the 0-100 interval" };
                            }
                            return true;
                        },
                        initeditor: function (row, cellvalue, editor) {
                            editor.jqxNumberInput({ decimalDigits: 0 });
                        }
                    },
                    {
                        text: 'Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2', columntype: 'numberinput',
                        validation: function (cell, value) {
                            if (value < 0 || value > 15) {
                                return { result: false, message: "Price should be in the 0-15 interval" };
                            }
                            return true;
                        },
                        initeditor: function (row, cellvalue, editor) {
                            editor.jqxNumberInput({ digits: 3 });
                        }
                    }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(50, false),
                datatype: 'array',
                datafields: [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'date', type: 'date' },
                    { name: 'available', type: 'bool' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' },
                ]
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