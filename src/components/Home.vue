<template>
    <div class="home">
        <div class="image">
            <h2>jQWidgets Vue Grid</h2>
            <router-link to="/demos">
                <button class="demos-button">
                    Demos
                </button>
            </router-link>
            <router-link to="/docs">
                <button class="docs-button">
                    Docs
                </button>
            </router-link>
        </div>
            <div class="grid-demo">
                <JqxGrid :width="width" :theme="'material'" :source="dataAdapter" :columns="columns"
                         :pageable="true" :autoheight="true" :sortable="true" :filterable="true"
                         :altrows="true" :enabletooltip="true" :editable="true"
                         :selectionmode="'multiplecellsadvanced'" :columngroups="columngroups">
                </JqxGrid>
            </div>

        <div class="section right">
            <b-container>
                <b-row>
                    <b-col cols="4">
                        <h3>Outlook-Style Data Grouping</h3>
                        <p>
                            Our Data Grid widget enables users to group data with simple drag and drop.
                            Users can also rearrange the grouping hierarchy by dragging and dropping the grouping headers in the group panel.
                        </p>
                    </b-col>
                    <b-col cols="8">
                        <img src="../assets/grid-grouping.png" />
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="section left">
            <b-container>
                <b-row>
                    <b-col cols="8">
                        <img src="../assets/grid-nested.png" />
                    </b-col>
                    <b-col cols="4">
                        <h3>Nested Data Grids</h3>
                        <p>
                            jqxGrid has a very flexible layout that enables easy nesting of any content, UI elements and widgets including nested data grids.
                        </p>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="section right">
            <b-container>
                <b-row>
                    <b-col cols="4">
                        <h3>Row Details</h3>
                        <p>
                            Row details are built-in feature of the Vue data grid. You can change the height of the row details area and use custom data templates.
                            You can also use jqxGrid APIs to expand and collapse the grid row details area.
                        </p>
                    </b-col>
                    <b-col cols="8">
                        <img src="../assets/grid-row-details.png" />
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="section left">
            <b-container>
                <b-row>
                    <b-col cols="8">
                        <img src="../assets/grid-columns.png" />
                    </b-col>
                    <b-col cols="4">
                        <h3>Column Types</h3>
                        <p>
                            The infrastructure of the Vue Grid is designed to support multiple column types. The data grid provides built-in 'Text', 'Number', 'DropDownList', 'DateTime' and 'CheckBox' columns.
                            Our Vue grid also supports custom data rendering. Developers can easily replace the default rendering logic and use custom columns and cells rendering.
                        </p>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="section right">
            <b-container>
                <b-row>
                    <b-col cols="4">
                        <h3>Pinned Columns</h3>
                        <p>
                            jqxGrid supports Excel-like pinned (frozen) columns. This feature also allows you to pin columns to the left the gridview's canvas.
                            The pinned columns are very useful when working with large tables and it makes it easy to scroll and compare data from different parts of the table.
                        </p>
                    </b-col>
                    <b-col cols="8">
                        <img src="../assets/grid-pinned.png" />
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="section left">
            <b-container>
                <b-row>
                    <b-col cols="8">
                        <img src="../assets/grid-formatting.png" />
                    </b-col>
                    <b-col cols="4">
                        <h3>Cells Formatting</h3>
                        <p>
                            Our Vue grid offers a cell formatting feature where you can easily specify a formatting string for grid column.
                            You can format dates, numeric values like decimal numbers, integer and floating-point numbers, currency and percentage values.
                        </p>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="section right">
            <b-container>
                <b-row>
                    <b-col cols="4">
                        <h3>Localization</h3>
                        <p>
                            Our Vue grid supports localization for multi-language web sites and applications. All text elements used in control buttons, menu items and elements can be localized.
                        </p>
                    </b-col>
                    <b-col cols="8">
                        <img src="../assets/grid-localization.png" />
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>
<script>
    import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
    export default {
        components: {
            JqxGrid
        },
        data: function () {
            return {
                width: '70%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'Product Name', columngroup: 'ProductDetails', datafield: 'ProductName', width: 250 },
                    { text: 'Quantity per Unit', columngroup: 'ProductDetails', datafield: 'QuantityPerUnit', cellsalign: 'right', align: 'right' },
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
            let buttons = document.getElementsByClassName('jqx-button');
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].removeAttribute('type');
            } 
        },
        methods: {
            cellsrenderer: function (row, columnsfield, value, defaulthtml, columnproperties) {
                if (value < 20) {
                    return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;">' + value + '</span>';
                }
                else {
                    return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;">' + value + '</span>';
                }
            }
        }
    }
</script>
<style scoped>
    h1 {
        margin-bottom: 25px;
    }

    h2 {
        font-size: 2.5rem;
        font-weight: 700;
        color: #34475F;
        padding-top: 20px;
    }

    h3 {
        margin-bottom: 20px;
    }

    p {
        text-align: left;
    }

    .grid-demo {
        margin-top: 30px;
    }

    .jqx-grid {
        margin: auto
    }

    .home {
        padding-bottom: 80px !important;
    }

    .section {
        margin-top: 80px;
    }

    img {
        width: 100%;
    }

    .right {
        background-color: #f8f9fa;
    }

    nav {
        margin-bottom: 0;
    }

    .image {
        width: 100%;
        height: 440px;
        background: url(../assets/background.jpg) no-repeat bottom center;
        background-size: cover;
    }

    button {
        margin-top: 270px;
        background-color: #2FB982;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        font-size: 20px;
        width: 100px;
        height: 40px;
    }
        button:hover {
            background-color: #34475F;
            color: #2FB982;
        }

    .demos-button {
        margin-left: -10px;
        margin-right: 262px;
    }

    @media screen and (max-width: 1100px) {
        .jqx-grid {
            width: 80% !important;
        }
    }

    @media screen and (max-width: 750px) {
        .jqx-grid {
            width: 90% !important;
        }
    }

    @media screen and (max-width: 991px) {
        .col-4 {
            flex: none;
            max-width: none;
        }
        .col-8 {
            flex: none;
            display: initial;
            max-width: none;
            width: 100%;
        }
    }

</style>
