<template>
    <div class="data-editing">
        <h1>jQWidgets Grid Data Editing</h1>
        <p>
            This demo illustrates editing in Vue Grid. In order to enter in edit mode, select a grid cell and start typing, Click or press the F2 key. You can also navigate through the cells using the keyboard arrows or with the Tab and Shift + Tab key combinations. To cancel the cell editing, press the Esc key. To save the changes press the Enter key or select another Grid cell. Pressing the 'Space' key when a checkbox cell is selected will toggle the check state. You can have different editing modes including customized editors. In addition you can disable the editing for certain rows. There is also an option for full row edit.
        </p>
        <JqxTabs ref="myTabs" :theme="'material'" :width="'100%'" :height="'100%'">
            <ul>
                <li style="margin-left: 30px;">Preview</li>
                <li>Source</li>
            </ul>
            <div>
                <JqxGrid @cellbeginedit="cellBeginEditEvent($event)" @cellendedit="cellEndEditEvent($event)"
                         :theme="'material'" :width="getWidth" :source="dataAdapter" :columns="columns"
                         :editable="true" :enabletooltips="true" :selectionmode="'multiplecellsadvanced'"> 
                </JqxGrid>
                <div style="height: 50px; font-size: 12px; font-family: Verdana; margin-top: 30px;">
                    <div ref="beginEdit"></div>
                    <div ref="endEdit" style="margin-top: 10px;"></div>
                </div>
            </div>
            <div>
                <pre><code ref="code">
    &lt;template>
        &lt;div>
            &lt;JqxGrid @cellbeginedit="cellBeginEditEvent($event)" @cellendedit="cellEndEditEvent($event)"
                     :theme="'material'" :width="getWidth" :source="dataAdapter" :columns="columns"
                     :editable="true" :enabletooltips="true" :selectionmode="'multiplecellsadvanced'">
            &lt;/JqxGrid>
            &lt;div style="font-size: 12px; font-family: Verdana; margin-top: 30px;">
                &lt;div ref="beginEdit">&lt;/div>
                &lt;div ref="endEdit" style="margin-top: 10px;">&lt;/div>
            &lt;/div>
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
                        { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 120 },
                        { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 120 },
                        { text: 'Product', columntype: 'dropdownlist', datafield: 'productname', width: 195 },
                        { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67 },
                        {
                            text: 'Ship Date', datafield: 'date', columntype: 'datetimeinput', width: 110, align: 'right', cellsalign: 'right', cellsformat: 'd',
                            validation: (cell, value) => {
                                if (value == '')
                                    return true;
                                let year = value.getFullYear();
                                if (year >= 2017) {
                                    return { result: false, message: 'Ship Date should be before 1/1/2017' };
                                }
                                return true;
                            }
                        },
                        {
                            text: 'Quantity', datafield: 'quantity', width: 70, align: 'right', cellsalign: 'right', columntype: 'numberinput',
                            validation: (cell, value) => {
                                if (value &lt; 0 || value > 150) {
                                    return { result: false, message: 'Quantity should be in the 0-150 interval' };
                                }
                                return true;
                            },
                            createeditor: (row, cellvalue, editor) => {
                                editor.jqxNumberInput({ decimalDigits: 0, digits: 3 });
                            }
                        },
                        {
                            text: 'Price', datafield: 'price', align: 'right', cellsalign: 'right', cellsformat: 'c2', columntype: 'numberinput',
                            validation: (cell, value) => {
                                if (value &lt; 0 || value > 15) {
                                    return { result: false, message: 'Price should be in the 0-15 interval' };
                                }
                                return true;
                            },
                            createeditor: (row, cellvalue, editor) => {
                                editor.jqxNumberInput({ digits: 3 });
                            }
                        }
                    ]
                }
            },
            beforeCreate: function () {
                this.source = {
                    localdata: generatedata(500, false),
                    datatype: 'array',
                    datafields:
                        [
                            { name: 'firstname', type: 'string' },
                            { name: 'lastname', type: 'string' },
                            { name: 'productname', type: 'string' },
                            { name: 'available', type: 'bool' },
                            { name: 'quantity', type: 'number' },
                            { name: 'price', type: 'number' },
                            { name: 'date', type: 'date' }
                        ]
                };
            },
            methods: {
                cellBeginEditEvent: function (event) {
                    let args = event.args;
                    this.$refs.beginEdit.innerHTML = 'Event Type: cellbeginedit, Column: ' + args.datafield + ', Row: ' + (1 + args.rowindex) + ', Value: ' + args.value;
                },
                cellEndEditEvent: function (event) {
                    let args = event.args;
                    this.$refs.endEdit.innerHTML = 'Event Type: cellendedit, Column: ' + args.datafield + ', Row: ' + (1 + args.rowindex) + ', Value: ' + args.value;
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
                    { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 120 },
                    { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 120 },
                    { text: 'Product', columntype: 'dropdownlist', datafield: 'productname', width: 195 },
                    { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67 },
                    {
                        text: 'Ship Date', datafield: 'date', columntype: 'datetimeinput', width: 110, align: 'right', cellsalign: 'right', cellsformat: 'd',
                        validation: (cell, value) => {
                            if (value == '')
                                return true;
                            let year = value.getFullYear();
                            if (year >= 2017) {
                                return { result: false, message: 'Ship Date should be before 1/1/2017' };
                            }
                            return true;
                        }
                    },
                    {
                        text: 'Quantity', datafield: 'quantity', width: 70, align: 'right', cellsalign: 'right', columntype: 'numberinput',
                        validation: (cell, value) => {
                            if (value < 0 || value > 150) {
                                return { result: false, message: 'Quantity should be in the 0-150 interval' };
                            }
                            return true;
                        },
                        createeditor: (row, cellvalue, editor) => {
                            editor.jqxNumberInput({ decimalDigits: 0, digits: 3 });
                        }
                    },
                    {
                        text: 'Price', datafield: 'price', align: 'right', cellsalign: 'right', cellsformat: 'c2', columntype: 'numberinput',
                        validation: (cell, value) => {
                            if (value < 0 || value > 15) {
                                return { result: false, message: 'Price should be in the 0-15 interval' };
                            }
                            return true;
                        },
                        createeditor: (row, cellvalue, editor) => {
                            editor.jqxNumberInput({ digits: 3 });
                        }
                    }
                ]
            }
        },
        beforeCreate: function () {
            this.source = {
                localdata: generatedata(500, false),
                datatype: 'array',
                datafields:
                    [
                        { name: 'firstname', type: 'string' },
                        { name: 'lastname', type: 'string' },
                        { name: 'productname', type: 'string' },
                        { name: 'available', type: 'bool' },
                        { name: 'quantity', type: 'number' },
                        { name: 'price', type: 'number' },
                        { name: 'date', type: 'date' }
                    ]
            };
        },
        mounted: function () {
            this.$refs.code.innerHTML = formatCode(this.$refs.code.innerHTML);
        },
        methods: {
            cellBeginEditEvent: function (event) {
                let args = event.args;
                this.$refs.beginEdit.innerHTML = 'Event Type: cellbeginedit, Column: ' + args.datafield + ', Row: ' + (1 + args.rowindex) + ', Value: ' + args.value;
            },
            cellEndEditEvent: function (event) {
                let args = event.args;
                this.$refs.endEdit.innerHTML = 'Event Type: cellendedit, Column: ' + args.datafield + ', Row: ' + (1 + args.rowindex) + ', Value: ' + args.value;
            }
        }
    }
</script>