<template>
    <div class="paging-docs">
        <h1>Vue Grid - Paging</h1>
        <br />
        jqxGrid component has a built-in paging capability that supports paging functionality. The paging functionality is enabled when the <span class="keyword">pageable</span> property is set to true.
        The code example below illustrates how to enable the paging functionality.
        <br /><br />
        <pre class="preCode"><code class="code">&lt;JqxGrid @pagechanged="onPageChanged($event)" @pagesizechanged="onPageSizeChanged($event)"
         :width="width" :source="source" :columns="columns"
         :pageable="true">
&lt;/JqxGrid></code></pre>
        <br />
        When a page is changed or the page size is changed, the Grid raises the <span class="keyword">pagechanged</span> or <span class="keyword">pagesizechanged</span> events.
        <br /><br />
        <pre class="preCode"><code class="code">methods: {
    onPageChanged: function(event) {
        let args = event.args;
        let pagenumber = args.pagenum;
        let pagesize = args.pagesize;
    },
    onPageSizeChanged: function (event) { 
       let args = event.args;
       let pagenumber = args.pagenum;
       let pagesize = args.pagesize; 
    }
}</code></pre>
        <br />
        <strong>Grid with Basic Paging</strong>
        <br /><br />
        <div>
            <JqxTabs :theme="'material'" :width="'100%'" :height="'100%'">
                <ul>
                    <li style="margin-left: 30px;">Preview</li>
                    <li>Source</li>
                </ul>
                <div>
                    <JqxGrid :theme="'material'" :width="width" :source="source" :columns="columns"
                             :autoheight="true" :pageable="true">
                    </JqxGrid>
                </div>
                <div>
                    <pre><code class="code">&lt;template>
    &lt;JqxGrid :theme="'material'" :width="width" :source="source" :columns="columns" 
             :autoheight="true" :pageable="true">
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
                    ['Alfreds Futterkiste', 'Maria Anders', 'Berlin', 'Germany'],
                    ['Ana Trujillo Emparedados y helados', 'Ana Trujillo', 'Mxico D.F.', 'Mexico'],
                    ['Antonio Moreno Taquera', 'Antonio Moreno', 'Mxico D.F.', 'Mexico'],
                    ['Around the Horn', 'Thomas Hardy', 'London', 'UK'],
                    ['Berglunds snabbkp', 'Christina Berglund', 'Lule', 'Sweden'],
                    ['Blauer See Delikatessen', 'Hanna Moos', 'Mannheim', 'Germany'],
                    ['Blondesddsl pre et fils', 'Frdrique Citeaux', 'Strasbourg', 'France'],
                    ['Blido Comidas preparadas', 'Martn Sommer', 'Madrid', 'Spain'],
                    ['Bon app', 'Laurence Lebihan', 'Marseille', 'France'],
                    ['Bottom-Dollar Markets', 'Elizabeth Lincoln', 'Tsawassen', 'Canada'],
                    ['B`s Beverages', 'Victoria Ashworth', 'London', 'UK'],
                    ['Cactus Comidas para llelet', 'Patricio Simpson', 'Buenos Aires', 'Argentina'],
                    ['Centro comercial Moctezuma', 'Francisco Chang', 'Mxico D.F.', 'Mexico'],
                    ['Chop-suey Chinese', 'Yang Wang', 'Bern', 'Switzerland'],
                    ['Comrcio Mineiro', 'Pedro Afonso', 'Sao Paulo', 'Brazil'],
                    ['Consolidated Holdings', 'Elizabeth Brown', 'London', 'UK'],
                    ['Drachenblut Delikatessen', 'Sven Ottlieb', 'Aachen', 'Germany'],
                    ['Du monde entier', 'Janine Labrune', 'Nantes', 'France'],
                    ['Eastern Connection', 'Ann Devon', 'London', 'UK'],
                    ['Ernst Handel', 'Roland Mendel', 'Graz', 'Austria']
                ],
                datafields: [
                    { name: 'ContactName', type: 'string', map: '0' },
                    { name: 'Title', type: 'string', map: '1' },
                    { name: 'City', type: 'string', map: '2' },
                    { name: 'Country', type: 'string', map: '3' }
                ],
                datatype: 'array'
            };
        }
    }
&lt;/script>
</code></pre>
                </div>
            </JqxTabs>
        </div>
        <br />
        The Grid Page Size options are displayed in a DropDownList component in the pager area. By default, the size options are 5, 10 and 20.
        The <span class="keyword">pagesizeoptions</span> property enables you to set new size options.
        <br /><br />
        <pre class="preCode"><code class="code">&lt;JqxGrid :width="width" :source="source" :columns="columns"
         :pageable="true" :pagesizeoptions="['10', '20', '30']">
&lt;/JqxGrid></code></pre>
        <br />
        The <span class="keyword">pagesize</span> property sets the default page size when the paging functionality is enabled. By default the Grid displays 10 rows in a page.<br /><br />
        The <span class="keyword">pagerrenderer</span> property allows you to customize the UI of the Grid pager. In the sample below, we create a <span class="keyword">pagerrenderer</span> function and inside the function,
        we build a DIV element with anchor tags. Each anchor tag has a page number as text. When the user clicks an anchor tag, the Grid calls the <span class="keyword">gotopage</span> function to navigate to a page.
        The <span class="keyword">pagerrenderer</span> function returns the DIV element as a result. This element is then internally appended to the Grid's pager area.
        <br /><br />
        <strong>Grid with Custom Paging</strong>
        <br /><br />
        <div>
            <JqxTabs :theme="'material'" :width="'100%'" :height="'100%'">
                <ul>
                    <li style="margin-left: 30px;">Preview</li>
                    <li>Source</li>
                </ul>
                <div>
                    <JqxGrid ref="myGrid" :theme="'material'" :width="width" :source="source" :columns="columns"
                             :autoheight="true" :pageable="true" :pagerrenderer="pagerrenderer">
                    </JqxGrid>
                </div>
                <div>
                    <pre><code class="code">&lt;template>
    &lt;JqxGrid ref="myGrid" :theme="'material'" :width="width" :source="source" :columns="columns"
             :autoheight="true" :pageable="true" :pagerrenderer="pagerrenderer">
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
                    ['Alfreds Futterkiste', 'Maria Anders', 'Berlin', 'Germany'],
                    ['Ana Trujillo Emparedados y helados', 'Ana Trujillo', 'Mxico D.F.', 'Mexico'],
                    ['Antonio Moreno Taquera', 'Antonio Moreno', 'Mxico D.F.', 'Mexico'],
                    ['Around the Horn', 'Thomas Hardy', 'London', 'UK'],
                    ['Berglunds snabbkp', 'Christina Berglund', 'Lule', 'Sweden'],
                    ['Blauer See Delikatessen', 'Hanna Moos', 'Mannheim', 'Germany'],
                    ['Blondesddsl pre et fils', 'Frdrique Citeaux', 'Strasbourg', 'France'],
                    ['Blido Comidas preparadas', 'Martn Sommer', 'Madrid', 'Spain'],
                    ['Bon app', 'Laurence Lebihan', 'Marseille', 'France'],
                    ['Bottom-Dollar Markets', 'Elizabeth Lincoln', 'Tsawassen', 'Canada'],
                    ['B`s Beverages', 'Victoria Ashworth', 'London', 'UK'],
                    ['Cactus Comidas para llelet', 'Patricio Simpson', 'Buenos Aires', 'Argentina'],
                    ['Centro comercial Moctezuma', 'Francisco Chang', 'Mxico D.F.', 'Mexico'],
                    ['Chop-suey Chinese', 'Yang Wang', 'Bern', 'Switzerland'],
                    ['Comrcio Mineiro', 'Pedro Afonso', 'Sao Paulo', 'Brazil'],
                    ['Consolidated Holdings', 'Elizabeth Brown', 'London', 'UK'],
                    ['Drachenblut Delikatessen', 'Sven Ottlieb', 'Aachen', 'Germany'],
                    ['Du monde entier', 'Janine Labrune', 'Nantes', 'France'],
                    ['Eastern Connection', 'Ann Devon', 'London', 'UK'],
                    ['Ernst Handel', 'Roland Mendel', 'Graz', 'Austria']
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
            pagerrenderer: function () {
                let element = $("&lt;div style='margin-top: 5px; width: 100%; height: 100%;'>&lt;/div>");
                let paginginfo = this.$refs.myGrid.getpaginginformation();
                for (i = 0; i &lt; paginginfo.pagescount; i++) {
                    // add anchor tag with the page number for each page.
                    let anchor = $("&lt;a style='padding: 5px;' href='#" + i + "'>" + i + "&lt;/a>");
                    anchor.appendTo(element);
                    anchor.click((event) => {
                        // go to a page.
                        let pagenum = parseInt($(event.target).text());
                        this.$refs.myGrid.gotopage(pagenum);
                    });
                }
                return element;
            }
        }
    }
&lt;/script>
</code></pre>
                </div>
            </JqxTabs>
        </div>
        <br />
        To navigate to a page with the Grid API, use the <span class="keyword">gotopage</span> function.
        <br /><br />
        <pre class="preCode"><code class="code">this.$refs.myGrid.gotopage(1);</code></pre>
        <br />
        The <span class="keyword">gotoprevpage</span> function navigates with 1 page before the current page.<br />
        The <span class="keyword">gotonextpage</span> function navigates with 1 page after the current page.
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
                    ['Alfreds Futterkiste', 'Maria Anders', 'Berlin', 'Germany'],
                    ['Ana Trujillo Emparedados y helados', 'Ana Trujillo', 'Mxico D.F.', 'Mexico'],
                    ['Antonio Moreno Taquera', 'Antonio Moreno', 'Mxico D.F.', 'Mexico'],
                    ['Around the Horn', 'Thomas Hardy', 'London', 'UK'],
                    ['Berglunds snabbkp', 'Christina Berglund', 'Lule', 'Sweden'],
                    ['Blauer See Delikatessen', 'Hanna Moos', 'Mannheim', 'Germany'],
                    ['Blondesddsl pre et fils', 'Frdrique Citeaux', 'Strasbourg', 'France'],
                    ['Blido Comidas preparadas', 'Martn Sommer', 'Madrid', 'Spain'],
                    ['Bon app', 'Laurence Lebihan', 'Marseille', 'France'],
                    ['Bottom-Dollar Markets', 'Elizabeth Lincoln', 'Tsawassen', 'Canada'],
                    ['B`s Beverages', 'Victoria Ashworth', 'London', 'UK'],
                    ['Cactus Comidas para llelet', 'Patricio Simpson', 'Buenos Aires', 'Argentina'],
                    ['Centro comercial Moctezuma', 'Francisco Chang', 'Mxico D.F.', 'Mexico'],
                    ['Chop-suey Chinese', 'Yang Wang', 'Bern', 'Switzerland'],
                    ['Comrcio Mineiro', 'Pedro Afonso', 'Sao Paulo', 'Brazil'],
                    ['Consolidated Holdings', 'Elizabeth Brown', 'London', 'UK'],
                    ['Drachenblut Delikatessen', 'Sven Ottlieb', 'Aachen', 'Germany'],
                    ['Du monde entier', 'Janine Labrune', 'Nantes', 'France'],
                    ['Eastern Connection', 'Ann Devon', 'London', 'UK'],
                    ['Ernst Handel', 'Roland Mendel', 'Graz', 'Austria']
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
        mounted: function () {
            let codeSpans = document.getElementsByClassName('code');

            for (let i = 0; i < codeSpans.length; i++) {
                codeSpans[i].innerHTML = formatCode(codeSpans[i].innerHTML);
            }

            let buttons = document.getElementsByClassName('jqx-button');
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].removeAttribute('type'); 
            }
        }, 
        methods: { 
            pagerrenderer: function () { 
                let element = $("<div style='margin-top: 5px; width: 100%; height: 100%;'></div>");
                let paginginfo = this.$refs.myGrid.getpaginginformation();
                for (let i = 0; i < paginginfo.pagescount; i++) {
                    // add anchor tag with the page number for each page.
                    let anchor = $("<a style='padding: 5px;' href='#" + i + "'>" + i + "</a>");
                    anchor.appendTo(element);
                    anchor.click((event) => {
                        // go to a page.
                        let pagenum = parseInt($(event.target).text());
                        this.$refs.myGrid.gotopage(pagenum);
                    });
                }
                return element;
            }
        }
    }
</script>