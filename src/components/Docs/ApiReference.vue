<template>
    <div class="api-reference-docs">
        <div id="properties">
            <h3 class="documentation-top-header">Properties</h3>
            <table class="documentation-table">
                <tbody>
                    <tr><th>Name</th><th>Type</th><th>Default</th></tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan0">altrows</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            false
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Enables or disables the alternating rows. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :altrows="true"
  /&gt;
&lt;/template&gt;
  
  
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default { 
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan1">altstart</span>
                        </td>
                        <td>
                            <span>Number</span>
                        </td>
                        <td>
                            1
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>This property specifies the first alternating row. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :altrows="true"
    :altstart="2"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan2">altstep</span>
                        </td>
                        <td>
                            <span>Number</span>
                        </td>
                        <td>
                            1
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets the alternating step </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :altrows="true"
    :altstart="0" :altstep="2"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan3">autoshowloadelement</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            true
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Determines whether the loading image should be displayed until the Grid's data is loaded. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :autoshowloadelement="false"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan4">autoshowfiltericon</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            true
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Displays the filter icon only when the column is filtered. When the value of this property is set to false, all grid columns will display a filter icon when the filtering is enabled. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :filterable="true"
    :autoshowfiltericon="false"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan5">autoshowcolumnsmenubutton</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            true
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets whether the columns menu button will be displayed only when the mouse cursor is over a columns header or will be always displayed. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :filterable="true"
    :autoshowcolumnsmenubutton="false"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan6">showcolumnlines</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            true
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets whether the columns lines are displayed. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :showcolumnlines="false"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan7">showrowlines</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            true
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets whether the row lines are displayed. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :showrowlines="false"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan8">showcolumnheaderlines</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            true
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets whether the column header lines are displayed. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :showcolumnheaderlines="false"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan9">adaptive</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            false
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets whether adaptive mode is enabled. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :adaptive="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan10">adaptivewidth</span>
                        </td>
                        <td>
                            <span>Number</span>
                        </td>
                        <td>
                            600
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets the Grid's breakpoint width when adaptive mode is actived. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :adaptive="true"
    :adaptivewidth="400"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan11">clipboard</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            true
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Enables or disables the clipboard operations </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :clipboard="false"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan12">closeablegroups</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            true
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>When the value of this property is true, a close button is displayed in each grouping column. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :groupable="true"
    :groups=" ['City'] " :closeablegroups="false"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan13">columnsmenuwidth</span>
                        </td>
                        <td>
                            <span>Number</span>
                        </td>
                        <td>
                            15
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets the columns menu width. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :filterable="true"
    :autoshowcolumnsmenubutton="false" :columnsmenuwidth="40"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan14">columnmenuopening</span>
                        </td>
                        <td>
                            <span>Function</span>
                        </td>
                        <td>
                            null
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Callback called when a column menu is opening. You can use it for changing the size of the menu or cancelling the opening. Three params are passed - menu, datafield and menu's height. If you return false, the opening will be cancelled. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :columnmenuopening="columnmenuopening"
    :filterable="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      columnmenuopening: function (menu, datafield, height) {
        alert('Menu Opening');
      }
    }
  }
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan15">columnmenuclosing</span>
                        </td>
                        <td>
                            <span>Function</span>
                        </td>
                        <td>
                            null
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Callback called when a column menu is opening. You can use it for changing the size of the menu or cancelling the opening. Three params are passed - menu, datafield and menu's height. If you return false, the opening will be cancelled. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :columnmenuclosing="columnmenuclosing"
    :filterable="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      columnmenuclosing: function (menu, datafield, height) {
        alert('Menu Closing');
      }
    }
  }
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan16">cellhover</span>
                        </td>
                        <td>
                            <span>Function</span>
                        </td>
                        <td>
                            null
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Callback called when a cell is hovered. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :cellhover="cellhover"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      cellhover: function (cellhtmlElement, x, y) {
        alert('Cell Hovered!');
      }
    }
  }
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan17">enablekeyboarddelete</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            true
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Enables or disables the delete of a cell/row values by using the "delete" key. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :editable="true"
    :enablekeyboarddelete="false"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan18">enableellipsis</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            true
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Determines whether ellipsis will be displayed, if the cells or columns content overflows. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :enableellipsis="false"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan19">enablemousewheel</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            true
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Determines whether mousewheel scrolling is enabled. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="false" :height="100"
    :enablemousewheel="false"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan20">enableanimations</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            true
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Enables or disables the grid animations. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :filterable="true"
    :enableanimations="false"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan21">enabletooltips</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            false
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Enables or disables the grid tooltips. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :enabletooltips="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan22">enablehover</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            true
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Enables or disables the grid rows hover state. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :enablehover="false"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan23">enablebrowserselection</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            false
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Enables the text selection of the browser. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :enablebrowserselection="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan24">everpresentrowposition</span>
                        </td>
                        <td>
                            <span>String</span>
                        </td>
                        <td>
                            'top'
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets the position of the ever present row. Possible values: "top", "bottom", "topAboveFilterRow". </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :showeverpresentrow="true"
    :everpresentrowposition="'bottom'"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan25">everpresentrowheight</span>
                        </td>
                        <td>
                            <span>Number</span>
                        </td>
                        <td>
                            30
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets the height of the ever present row. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :showeverpresentrow="true"
    :everpresentrowheight="40"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan26">everpresentrowactions</span>
                        </td>
                        <td>
                            <span>String</span>
                        </td>
                        <td>
                            "add reset"
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets the actions of the ever present row. Possible values: "add", "reset", "update", "delete". Instead of "add", you can also use "addBottom" which is the same as "add", but adds the new row to the bottom of the Grid. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :showeverpresentrow="true"
    :everpresentrowactions="'add update delete reset'"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan27">everpresentrowactionsmode</span>
                        </td>
                        <td>
                            <span>String</span>
                        </td>
                        <td>
                            "popup"
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets the actions display mode. By default they are displayed in a popup. You can set the property to "columns" and define columns with datafields - addButtonColumn, resetButtonColumn, updateButtonColumn and deleteButtonColumn to display the actions in columns. </P>
                                <pre class="code">&lt;template>
  &lt;JqxGrid ref="myGrid"
       :width="850" :source="source" :columns="columns" :autoheight="true" :showeverpresentrow="true"
       :everpresentrowactionsmode="'columns'" />
&lt;/template>

&lt;script>
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';

  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return {
        source: new jqx.dataAdapter(this.source),
        columns: [
          { text: 'Contact Name', datafield: 'ContactName' },
          { text: 'Contact Title', datafield: 'Title' },
          { text: 'City', datafield: 'City' },
          { text: 'Country', datafield: 'Country' },
          { datafield: 'addButtonColumn', width: 50 },
          { datafield: 'resetButtonColumn', width: 50 }
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
    }
  }
&lt;/script>
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan28">filterrowheight</span>
                        </td>
                        <td>
                            <span>Number</span>
                        </td>
                        <td>
                            36
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets the filter row's height. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :filterable="true"
    :showfilterrow="true" :filterrowheight="40"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan29">filtermode</span>
                        </td>
                        <td>
                            <span>String</span>
                        </td>
                        <td>
                            "default"
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>The property specifies the type of rendering of the Filter Menu. Possible values: "default" and "excel". In "excel" mode, the Filter Menu displays a ListBox with Checkboxes with all unique cell values. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :filterable="true"
    :filtermode="'excel'"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan30">groupsrenderer</span>
                        </td>
                        <td>
                            <span>Function</span>
                        </td>
                        <td>
                            null
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>This function is called when a group is rendered. You can use it to customize the default group rendering. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :groupsrenderer="groupsrenderer"
    :groupable="true" :groups=" ['City'] "
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      groupsrenderer: function (text, group, expanded) {
        return 'City: ' + group;
      }
    }
  }
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan31">groupcolumnrenderer</span>
                        </td>
                        <td>
                            <span>Function</span>
                        </td>
                        <td>
                            null
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets a custom renderer for the grouping columns displayed in the grouping header when the grouping feature is enabled. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :groupcolumnrenderer="groupcolumnrenderer"
    :groupable="true" :groups=" ['City'] "
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      groupcolumnrenderer: function (text) {
        return 'Grouped By: ' + text;
      }
    }
  }
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan32">groupsexpandedbydefault</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            false
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets the default state of the grouped rows. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :groupable="true"
    :groups=" ['ContactName'] " :groupsexpandedbydefault="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan33">handlekeyboardnavigation</span>
                        </td>
                        <td>
                            <span>Function</span>
                        </td>
                        <td>
                            null
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>The function is called when a key is pressed. If the result of the function is true, the default keyboard navigation will be overriden for the pressed key. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :handlekeyboardnavigation="handlekeyboardnavigation"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      handlekeyboardnavigation: function () {
        const key = event.charCode ? event.charCode : event.keyCode ? event.keyCode : 0;
        alert(key);
      }
    }
  }
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan34">pagerrenderer</span>
                        </td>
                        <td>
                            <span>Function</span>
                        </td>
                        <td>
                            null
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>The function is called when the Grid Pager is rendered. This allows you to customize the default rendering of the pager. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :pagerrenderer="pagerrenderer"
    :pageable="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
        const element = document.createElement('div');
        element.innerHTML = 'Custom Render of the JqxGrid Pager!';
        return element;
      }
    }
  }
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan35">rtl</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            false
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets a value indicating whether widget's elements are aligned to support locales using right-to-left fonts.</P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :rtl="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan36">showdefaultloadelement</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            true
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Determines whether the Grid should display the built-in loading element or should use a DIV tag with class 'jqx-grid-load' </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :showdefaultloadelement="false"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan37">showfiltercolumnbackground</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            true
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>When this property is true, the Grid adds an additional visual style to the grid cells in the filter column(s). </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :filterable="true"
    :showfiltercolumnbackground="false"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan38">showfiltermenuitems</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            true
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Determines whether to display the filtering items in the column's menu. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :filterable="true"
    :showfiltermenuitems="false"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan39">showpinnedcolumnbackground</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            true
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>When this property is true, the Grid adds an additional visual style to the grid cells in the pinned column(s). </P>
                                <pre class="code">&lt;template>
  &lt;JqxGrid ref="myGrid"
       :width="500" :source="source" :columns="columns" :autoheight="true" :showpinnedcolumnbackground="false" />
&lt;/template>

&lt;script>
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';

  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return {
        source: new jqx.dataAdapter(this.source),
        columns: [
          { pinned: 'true', text: 'Contact Name', datafield: 'ContactName', width: 150 },
          { text: 'Contact Title', datafield: 'Title', width: 150 },
          { text: 'City', datafield: 'City', width: 150 },
          { text: 'Country', datafield: 'Country', width: 150 },
          { text: 'Country1', width: 150 },
          { text: 'Country2', width: 150 },
          { text: 'Country3', width: 150 },
          { text: 'Country4', width: 150 },
          { text: 'Country5', width: 150 }
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
    }
  }
&lt;/script>
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan40">showsortcolumnbackground</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            true
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>When this property is true, the Grid adds an additional visual style to the grid cells in the sort column. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :sortable="true"
    :showsortcolumnbackground="false"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan41">showsortmenuitems</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            true
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Determines whether to display the sort menu items. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :sortable="true"
    :showsortmenuitems="false"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan42">showgroupmenuitems</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            true
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Determines whether to display the group menu items. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :groupable="true"
    :showgroupmenuitems="false"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan43">showrowdetailscolumn</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            true
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Shows an additional column with expand/collapse toggle buttons when the Row details feature is enabled. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :rowdetails="true"
    :showrowdetailscolumn="false"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan44">showheader</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            true
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Shows or hides the columns header. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :showheader="false"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan45">showgroupsheader</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            true
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Shows or hides the groups header area. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :groupable="true"
    :showgroupsheader="false"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan46">showaggregates</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            false
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Shows or hides the aggregates in the grid's statusbar. </P>
                                <pre class="code">&lt;template>
  &lt;JqxGrid ref="myGrid"
       :width="850" :source="source" :columns="columns" :autoheight="true" :showaggregates="true" :showstatusbar="true" :statusbarheight="50"/>
&lt;/template>

&lt;script>
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';

  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return {
        source: new jqx.dataAdapter(this.source),
        columns: [
          { text: 'Contact Name', datafield: 'ContactName' },
          {
            text: 'Contact Title', datafield: 'Title', aggregates: ['count', {
              'Owners': function (aggregatedValue, currentValue) {
                if (currentValue == 'Owner') {
                  return aggregatedValue + 1;
                }
                return aggregatedValue;
              }
            }]
          },
          { text: 'City', datafield: 'City' },
          { text: 'Country', datafield: 'Country', aggregates: ['count'] }
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
    }
  }
&lt;/script>
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan47">showgroupaggregates</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            false
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Shows or hides the aggregates in Grid groups. </P>
                                <pre class="code">&lt;template>
  &lt;JqxGrid ref="myGrid"
       :width="850" :source="source" :columns="columns" :autoheight="true" :groupable="true" 
       :showaggregates="true" :showgroupaggregates="true" :showstatusbar="true" :statusbarheight="50" />
&lt;/template>
&lt;script>
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return {
        source: new jqx.dataAdapter(this.source),
        columns: [
          { text: 'Contact Name', datafield: 'ContactName' },
          {
            text: 'Contact Title', datafield: 'Title', aggregates: ['count', {
              'Owners': function (aggregatedValue, currentValue) {
                if (currentValue == 'Owner') {
                  return aggregatedValue + 1;
                }
                return aggregatedValue;
              }
            }]
          },
          { text: 'City', datafield: 'City' },
          { text: 'Country', datafield: 'Country', aggregates: ['count'] }
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
    }
  }
&lt;/script>
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan48">showeverpresentrow</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            false
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Shows or hides an additional row in jqxGrid which allows you to easily add new rows. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :showeverpresentrow="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan49">showfilterrow</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            false
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Shows or hides the filter row. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :filterable="true"
    :showfilterrow="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan50">showemptyrow</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            true
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Shows or hides the empty row label when the Grid has no records to display. </P>
                                <pre class="code">&lt;template>
  &lt;JqxGrid ref="myGrid"
       :width="850" :columns="columns" :autoheight="true" :showemptyrow="false" />
&lt;/template>

&lt;script>
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';

  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return {
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
    }
  }
&lt;/script>
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan51">showstatusbar</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            false
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Shows or hides the grid's statusbar. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :showstatusbar="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan52">statusbarheight</span>
                        </td>
                        <td>
                            <span>Number</span>
                        </td>
                        <td>
                            34
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets the statusbar's height. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :showstatusbar="true"
    :statusbarheight="50"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan53">showtoolbar</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            false
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Shows or hides the grid's toolbar. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :showtoolbar="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan54">selectionmode</span>
                        </td>
                        <td>
                            <span>String</span>
                        </td>
                        <td>
                            'singlerow'
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets the selection mode. </P>
                                <B>Possible Values:</B>
<PRE><CODE>'none'-disables the selection</CODE></PRE>
<PRE><CODE>'singlerow'- full row selection</CODE></PRE>
<PRE><CODE>'multiplerows' - each click selects a new row. Click on a selected row unselects it</CODE></PRE>
<PRE><CODE>'multiplerowsextended' - multiple rows selection with drag and drop. The selection behavior resembles the selection of icons on your desktop</CODE></PRE>
<PRE><CODE>'singlecell' - single cell selection</CODE></PRE>
<PRE><CODE>'multiplecells' - each click selects a new cell. Click on a selected cell unselects it</CODE></PRE>
<PRE><CODE>'multiplecellsextended' - in this mode, users can select multiple cells with a drag and drop. The selection behavior resembles the selection of icons on your desktop</CODE></PRE>
<PRE><CODE>'multiplecellsadvanced' - this mode is the most advanced cells selection mode. In this mode, users can select multiple cells with a drag and drop. The selection behavior resembles the selection of cells in a spreadsheet</CODE></PRE>
<PRE><CODE>'checkbox' - multiple rows selection through a checkbox.</CODE></PRE>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :selectionmode="'multiplerows'"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan55">updatefilterconditions</span>
                        </td>
                        <td>
                            <span>Function</span>
                        </td>
                        <td>
                            null
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <p></p>
                                <pre class="code">&lt;template>
  &lt;JqxGrid ref="myGrid" 
       :width="800" :source="source" :autoheight="true" :columns="columns" 
       :filterable="true" :autoshowfiltericon="true" :ready="ready"
       :updatefilterconditions="updatefilterconditions" :updatefilterpanel="updatefilterpanel">
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
      addfilter: function () {
        let filtergroup = new jqx.filter();
        let filter_or_operator = 1;
        let filtervalue = 'Beate';
        let filtercondition = 'contains';
        let filter1 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        filtervalue = 'Andrew';
        filtercondition = 'contains';
        let filter2 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        filtergroup.addfilter(filter_or_operator, filter1);
        filtergroup.addfilter(filter_or_operator, filter2);
        // add the filters.
        this.$refs.myGrid.addfilter('firstname', filtergroup);
        // apply the filters.
        this.$refs.myGrid.applyfilters();
      },
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
      updatefilterpanel: function (filtertypedropdown1, filtertypedropdown2, filteroperatordropdown, filterinputfield1,
        filterinputfield2, filterbutton, clearbutton, columnfilter, filtertype, filterconditions) {
        let index1 = 0;
        let index2 = 0;
        if (columnfilter != null) {
          let filter1 = columnfilter.getfilterat(0);
          let filter2 = columnfilter.getfilterat(1);
          if (filter1) {
            index1 = filterconditions.indexOf(filter1.comparisonoperator);
            let value1 = filter1.filtervalue;
            filterinputfield1.val(value1);
          }
          if (filter2) {
            index2 = filterconditions.indexOf(filter2.comparisonoperator);
            let value2 = filter2.filtervalue;
            filterinputfield2.val(value2);
          }
        }
        filtertypedropdown1.jqxDropDownList({ autoDropDownHeight: true, selectedIndex: index1 });
        filtertypedropdown2.jqxDropDownList({ autoDropDownHeight: true, selectedIndex: index2 });
      },
      ready: function () {
        this.addfilter();
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
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan56">updatefilterpanel</span>
                        </td>
                        <td>
                            <span>Function</span>
                        </td>
                        <td>
                            null
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <p></p>
                                <pre class="code">&lt;template>
  &lt;JqxGrid ref="myGrid" 
       :width="800" :source="source" :autoheight="true" :columns="columns" 
       :filterable="true" :autoshowfiltericon="true" :ready="ready"
       :updatefilterconditions="updatefilterconditions" :updatefilterpanel="updatefilterpanel">
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
      addfilter: function () {
        let filtergroup = new jqx.filter();
        let filter_or_operator = 1;
        let filtervalue = 'Beate';
        let filtercondition = 'contains';
        let filter1 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        filtervalue = 'Andrew';
        filtercondition = 'contains';
        let filter2 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        filtergroup.addfilter(filter_or_operator, filter1);
        filtergroup.addfilter(filter_or_operator, filter2);
        // add the filters.
        this.$refs.myGrid.addfilter('firstname', filtergroup);
        // apply the filters.
        this.$refs.myGrid.applyfilters();
      },
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
      updatefilterpanel: function (filtertypedropdown1, filtertypedropdown2, filteroperatordropdown, filterinputfield1,
        filterinputfield2, filterbutton, clearbutton, columnfilter, filtertype, filterconditions) {
        let index1 = 0;
        let index2 = 0;
        if (columnfilter != null) {
          let filter1 = columnfilter.getfilterat(0);
          let filter2 = columnfilter.getfilterat(1);
          if (filter1) {
            index1 = filterconditions.indexOf(filter1.comparisonoperator);
            let value1 = filter1.filtervalue;
            filterinputfield1.val(value1);
          }
          if (filter2) {
            index2 = filterconditions.indexOf(filter2.comparisonoperator);
            let value2 = filter2.filtervalue;
            filterinputfield2.val(value2);
          }
        }
        filtertypedropdown1.jqxDropDownList({ autoDropDownHeight: true, selectedIndex: index1 });
        filtertypedropdown2.jqxDropDownList({ autoDropDownHeight: true, selectedIndex: index2 });
      },
      ready: function () {
        this.addfilter();
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
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan57">theme</span>
                        </td>
                        <td>
                            <span>String</span>
                        </td>
                        <td>
                            ''
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets the widget's theme. </P>

                                <UL>
                                    <LI>
                                        Include the theme's CSS file after jqx.base.css.<BR/>The following code example adds the 'material' theme. <PRE><CODE>
<PRE><CODE>&lt;link rel="stylesheet" href="../../jqwidgets/styles/jqx.base.css" type="text/css" /&gt;
&lt;link rel="stylesheet" href="../../jqwidgets/styles/jqx.material.css" type="text/css" /&gt;
</CODE></PRE>
</CODE></PRE></LI>
                                    <LI>Set the widget's theme property to 'material' when you initialize it. </LI>
                                </UL>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :theme="'material'"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan58">toolbarheight</span>
                        </td>
                        <td>
                            <span>Number</span>
                        </td>
                        <td>
                            34
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets the toolbar's height. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :showtoolbar="true"
    :toolbarheight="40"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan59">autoheight</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            false
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets the height of the grid to be equal to the summary height of the grid rows. This option should be set when the Grid is in paging mode. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan60">autorowheight</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            false
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>This property works along with the "autoheight" property. When it is set to true, the height of the Grid rows is dynamically changed depending on the cell values. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :autorowheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan61">columnsheight</span>
                        </td>
                        <td>
                            <span>Number</span>
                        </td>
                        <td>
                            32
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets the columns height. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :columnsheight="40"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan62">deferreddatafields</span>
                        </td>
                        <td>
                            <span>Array</span>
                        </td>
                        <td>
                            []
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Determines the cell values displayed in a tooltip next to the scrollbar when the "scrollmode" is set to "deferred". </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="false" :height="100"
    :scrollmode="'deferred'" :deferreddatafields=" ['ContactName'] "
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan63">groupsheaderheight</span>
                        </td>
                        <td>
                            <span>Number</span>
                        </td>
                        <td>
                            34
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets the height of the Grid Groups Header. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :groupable="true"
    :groupsheaderheight="60"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan64">groupindentwidth</span>
                        </td>
                        <td>
                            <span>Number</span>
                        </td>
                        <td>
                            20
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets the group indent size. This size is used when the grid is grouped. This is the size of the columns with expand/collapse toggle buttons. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :groupable="true"
    :groupindentwidth="40"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan65">height</span>
                        </td>
                        <td>
                            <span>String | Number</span>
                        </td>
                        <td>
                            400
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets the Grid's height. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="false" :height="500"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan66">pagerheight</span>
                        </td>
                        <td>
                            <span>Number</span>
                        </td>
                        <td>
                            40
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets the height of the Grid Pager. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :pageable="true"
    :pagerheight="50"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan67">rowsheight</span>
                        </td>
                        <td>
                            <span>Number</span>
                        </td>
                        <td>
                            32
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets the height of the grid rows. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :rowsheight="30"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan68">scrollbarsize</span>
                        </td>
                        <td>
                            <span>Number</span>
                        </td>
                        <td>
                            15
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets the scrollbars size. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="false" :height="100"
    :scrollbarsize="20"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan69">scrollmode</span>
                        </td>
                        <td>
                            <span>String</span>
                        </td>
                        <td>
                            "default"
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Determines the scrolling mode. </P>
                                <B>Possible Values:</B>
<PRE><CODE>'default'</CODE></PRE>
<PRE><CODE>'logical'- the movement of the scrollbar thumb is by row, not by pixel</CODE></PRE>
<PRE><CODE>'deferred'-content is stationary when the user drags the Thumb of a ScrollBar</CODE></PRE>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="false" :height="100"
    :scrollmode="'logical'"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan70">scrollfeedback</span>
                        </td>
                        <td>
                            <span>Function</span>
                        </td>
                        <td>
                            null
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                When the "scrollmode" is set to "deferred", the "scrollfeedback" function may be used to display custom UI Tooltip next to the scrollbar.
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="false" :height="100"
    :scrollmode="'deferred'" :scrollfeedback="scrollfeedback"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      scrollfeedback: function (row) {
        return 'row ' + row.uid;
      }
    }
  }
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan71">width</span>
                        </td>
                        <td>
                            <span>String | Number</span>
                        </td>
                        <td>
                            600
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets the Grid's width. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan72">autosavestate</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            false
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Determines whether the Grid automatically saves its current state. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :autoloadstate="true"
    :autosavestate="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan73">autoloadstate</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            false
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Determines whether the Grid automatically loads its current state(if there's already saved one). The Grid's state is loaded when the page is refreshed. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :autoloadstate="true"
    :autosavestate="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan74">columns</span>
                        </td>
                        <td>
                            <span>Array</span>
                        </td>
                        <td>
                            []
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets the Grid columns. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan75">columngroups</span>
                        </td>
                        <td>
                            <span>Array</span>
                        </td>
                        <td>
                            []
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <UL>
                                    <LI>parentgroup - sets the column header's parent group name.</LI>
                                    <LI>name - sets the column header's name.</LI>
                                    <LI>align - sets the column header's alignment to 'left', 'center' or 'right'. </LI>
                                </UL>
                                <pre class="code">&lt;template>
  &lt;JqxGrid ref="myGrid"
       :width="850" :source="source" :columns="columns" :autoheight="true" :columngroups="columngroups" />
&lt;/template>

&lt;script>
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';

  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return {
        source: new jqx.dataAdapter(this.source),
        columns: [
          { text: 'Contact Name', datafield: 'ContactName', columngroup: 'ContactInfo' },
          { text: 'Contact Title', datafield: 'Title', columngroup: 'ContactInfo' },
          { text: 'City', datafield: 'City' },
          { text: 'Country', datafield: 'Country' }
        ],
        columngroups: [{ text: 'Contact Info', name: 'ContactInfo', align: 'center' }]
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
    }
  }
&lt;/script>
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan76">columnsmenu</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            true
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Enables or disables the columns dropdown menu. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :sortable="true"
    :columnsmenu="false"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan77">columnsresize</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            false
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Enables or disables the columns resizing. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :columnsresize="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan78">columnsautoresize</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            true
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Enables or disables the columns resizing when the column's border is double-clicked and <CODE>columnsresize</CODE> is set to true. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :columnsresize="true"
    :columnsautoresize="false"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan79">columnsreorder</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            false
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Enables or disables the columns reordering. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :columnsreorder="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan80">disabled</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            false
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Enables or disables the Grid's plugin. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :disabled="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan81">editable</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            false
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>The editable property enables or disables the Grid editing feature. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :editable="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan82">editmode</span>
                        </td>
                        <td>
                            <span>String</span>
                        </td>
                        <td>
                            'selectedcell'
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>The editmode property specifies the action that the end-user should make to open an editor. </P>
                                <B>Possible Values:</B>
<PRE><CODE>'click' - Marks the clicked cell as selected and shows the editor. The editor's value is equal to the cell's value</CODE></PRE>
<PRE><CODE>'selectedcell' - Marks the cell as selected. A second click on the selected cell shows the editor. The editor's value is equal to the cell's value</CODE></PRE>
<PRE><CODE>'selectedrow' - A second click on a selected row shows the row editors.</CODE></PRE>
<PRE><CODE>'dblclick' - Marks the clicked cell as selected and shows the editor. The editor's value is equal to the cell's value</CODE></PRE>
<PRE><CODE>'programmatic' - Cell editors are activated and deactivated only through the API(see begincelledit and endcelledit methods)</CODE></PRE>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :editable="true"
    :editmode="'dblclick'"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan83">filter</span>
                        </td>
                        <td>
                            <span>Function</span>
                        </td>
                        <td>
                            null
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Custom Filtering function. It overrides the built-in Filtering. When the user filters, the Grid calls this function, when it is implemented. The function is expected to return a boolean value or undefined. </P>

                                <UL>
                                    <LI>cellValue - current cell's value.</LI>
                                    <LI>rowData - JSON object which contains the current row's data.</LI>
                                    <LI>dataField - filter column's field.</LI>
                                    <LI>filterGroup - group of filters.</LI>
                                    <LI>defaultFilterResult - the default filter result. </LI>
                                </UL>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :filterable="true"
    :filter="filter"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      filter: function (cellValue, rowData, dataField, filterGroup, defaultFilterResult) {
        // implements a custom filter for the "Contactname" field. 
        if (dataField === "ContactName") {
          var filters = filterGroup.getfilters();
          for (var i = 0; i &lt; filters.length; i++) {
            var filter = filters[i];
            var filterValue = filter.value;
            var filterCondition = filter.condition;
            var filterType = filter.type;

            if (cellValue.indexOf("Ana") >= 0) {
              return true;
            }
          }

          return false;
        }
      }
    }
  }
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan84">filterable</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            false
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Enables or disables the Grid Filtering feature. When the value of this property is true, the Grid displays a filtering panel in the columns popup menus. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :filterable="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan85">groupable</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            false
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>This property enables or disables the grouping feature. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :groupable="true"
    :groups=" ['ContactName'] "
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan86">groups</span>
                        </td>
                        <td>
                            <span>Array</span>
                        </td>
                        <td>
                            []
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets the Grid groups when the Grouping feature is enabled. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :groupable="true"
    :groups=" ['ContactName'] "
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan87">horizontalscrollbarstep</span>
                        </td>
                        <td>
                            <span>Number</span>
                        </td>
                        <td>
                            5
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets the scrollbar's step when the user clicks the scroll arrows. </P>
                                <pre class="code">&lt;template>
  &lt;JqxGrid ref="myGrid"
       :width="400" :source="source" :columns="columns" :autoheight="true" :horizontalscrollbarstep="200" />
&lt;/template>

&lt;script>
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';

  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return {
        source: new jqx.dataAdapter(this.source),
        columns: [
          { text: 'Contact Name', datafield: 'ContactName', width: '100' },
          { text: 'Contact Title', datafield: 'Title', width: '100' },
          { text: 'City', datafield: 'City', width: '100' },
          { text: 'Country', datafield: 'Country', width: '100' },
          { text: 'Column5', width: '100' },
          { text: 'Column6', width: '100' },
          { text: 'Column7', width: '100' },
          { text: 'Column8', width: '100' },
          { text: 'Column9', width: '100' },
          { text: 'Column10', width: '100' },
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
    }
  }
&lt;/script>
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan88">horizontalscrollbarlargestep</span>
                        </td>
                        <td>
                            <span>Number</span>
                        </td>
                        <td>
                            50
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets the scrollbar's large step. This property specifies the step with which the horizontal scrollbar's value is changed when the user clicks the area above or below the thumb. </P>
                                <pre class="code">&lt;template>
  &lt;JqxGrid ref="myGrid"
       :width="400" :source="source" :columns="columns" :autoheight="true" :horizontalscrollbarlargestep="600" />
&lt;/template>

&lt;script>
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';

  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return {
        source: new jqx.dataAdapter(this.source),
        columns: [
          { text: 'Contact Name', datafield: 'ContactName', width: '100' },
          { text: 'Contact Title', datafield: 'Title', width: '100' },
          { text: 'City', datafield: 'City', width: '100' },
          { text: 'Country', datafield: 'Country', width: '100' },
          { text: 'Column5', width: '100' },
          { text: 'Column6', width: '100' },
          { text: 'Column7', width: '100' },
          { text: 'Column8', width: '100' },
          { text: 'Column9', width: '100' },
          { text: 'Column10', width: '100' },
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
    }
  }
&lt;/script>
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan89">initrowdetails</span>
                        </td>
                        <td>
                            <span>Function</span>
                        </td>
                        <td>
                            null
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>This function is called when the user expands the row details and the details are going to be rendered. </P>
                                <pre class="code">&lt;template>
  &lt;JqxGrid ref="myGrid"
       :width="850" :source="source" :columns="columns" :autoheight="true" 
       :rowdetails="true" :initrowdetails="initrowdetails" :rowdetailstemplate="rowdetailstemplate" />
&lt;/template>

&lt;script>
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';

  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return {
        source: new jqx.dataAdapter(this.source),
        columns: [
          { text: 'Contact Name', datafield: 'ContactName' },
          { text: 'Contact Title', datafield: 'Title' },
          { text: 'City', datafield: 'City' },
          { text: 'Country', datafield: 'Country' }
        ],
        rowdetailstemplate: {
          rowdetails: "&lt;div style='margin: 10px;'>Row Details&lt;/div>",
          rowdetailsheight: 50
        }
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
      initrowdetails: function(index, parentElement, gridElement, datarecord) {
        var details = $($(parentElement).children()[0]);
        details.html("Details: " + index);
      }      
    }
  }
&lt;/script>
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan90">keyboardnavigation</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            true
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Enables or disables the keyboard navigation. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :keyboardnavigation="false"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan91">localization</span>
                        </td>
                        <td>
                            <span>Object</span>
                        </td>
                        <td>
                            null
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Localizes the Grid.</P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :pageable="true"
    :localization="localization"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
        localization: getLocalization('de'),
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan92">pagesize</span>
                        </td>
                        <td>
                            <span>Number</span>
                        </td>
                        <td>
                            10
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets the number of visible rows per page when the Grid paging is enabled. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :pageable="true"
    :pagesize="2"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan93">pagesizeoptions</span>
                        </td>
                        <td>
                            <span>Array</span>
                        </td>
                        <td>
                            ['5', '10', '20']
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets the available page size options. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :pageable="true"
    :pagesizeoptions=" ['15', '30', '50'] "
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan94">pagermode</span>
                        </td>
                        <td>
                            <span>String</span>
                        </td>
                        <td>
                            "default"
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets the rendering mode of the pager. Available values - "simple" and "default". </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :pageable="true"
    :pagermode="'simple'"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan95">pagerbuttonscount</span>
                        </td>
                        <td>
                            <span>Number</span>
                        </td>
                        <td>
                            5
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets the buttons displayed in the pager when the "pagermode" is set to "simple". </P>
                                <pre class="code">&lt;template>
  &lt;JqxGrid ref="myGrid"
       :width="850" :source="source" :columns="columns" :autoheight="true" :pageable="true"
       :pagermode="'simple'" :pagesize="1" :pagerbuttonscount="10" />
&lt;/template>

&lt;script>
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';

  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return {
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
          ['Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico'],
          ['Maria Anders', 'Sales Representative', 'Berlin', 'Germany'],
          ['Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico'],
          ['Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico'],
          ['Maria Anders', 'Sales Representative', 'Berlin', 'Germany'],
          ['Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico'],
          ['Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico'],
          ['Maria Anders', 'Sales Representative', 'Berlin', 'Germany'],
          ['Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico'],
          ['Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico'],
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
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan96">pageable</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            false
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Enables or disables the Grid Paging feature. When the value of this property is true, the Grid displays a pager below the rows. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :pageable="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan97">rowdetails</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            false
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Enables or disables the row details. When this option is enabled, the Grid can show additional information below each grid row. </P>
                                <pre class="code">&lt;template>
  &lt;JqxGrid ref="myGrid"
       :width="850" :source="source" :columns="columns" :autoheight="true" 
       :rowdetails="true" :initrowdetails="initrowdetails" :rowdetailstemplate="rowdetailstemplate" />
&lt;/template>

&lt;script>
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';

  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return {
        source: new jqx.dataAdapter(this.source),
        columns: [
          { text: 'Contact Name', datafield: 'ContactName' },
          { text: 'Contact Title', datafield: 'Title' },
          { text: 'City', datafield: 'City' },
          { text: 'Country', datafield: 'Country' }
        ],
        rowdetailstemplate: {
          rowdetails: "&lt;div style='margin: 10px;'>Row Details&lt;/div>",
          rowdetailsheight: 50
        }
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
      initrowdetails: function(index, parentElement, gridElement, datarecord) {
        var details = $($(parentElement).children()[0]);
        details.html("Details: " + index);
      }      
    }
  }
&lt;/script>
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan98">rowdetailstemplate</span>
                        </td>
                        <td>
                            <span>Object</span>
                        </td>
                        <td>
                            null
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Determines the template of the row details. The rowdetails field specifies the HTML used for details. The rowdetailsheight specifies the height of the details. </P>
                                <pre class="code">&lt;template>
  &lt;JqxGrid ref="myGrid"
       :width="850" :source="source" :columns="columns" :autoheight="true" 
       :rowdetails="true" :initrowdetails="initrowdetails" :rowdetailstemplate="rowdetailstemplate" />
&lt;/template>

&lt;script>
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';

  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return {
        source: new jqx.dataAdapter(this.source),
        columns: [
          { text: 'Contact Name', datafield: 'ContactName' },
          { text: 'Contact Title', datafield: 'Title' },
          { text: 'City', datafield: 'City' },
          { text: 'Country', datafield: 'Country' }
        ],
        rowdetailstemplate: {
          rowdetails: "&lt;div style='margin: 10px;'>Row Details&lt;/div>",
          rowdetailsheight: 50
        }
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
      initrowdetails: function(index, parentElement, gridElement, datarecord) {
        var details = $($(parentElement).children()[0]);
        details.html("Details: " + index);
      }      
    }
  }
&lt;/script>
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan99">ready</span>
                        </td>
                        <td>
                            <span>Function</span>
                        </td>
                        <td>
                            null
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>This function is called when the grid is initialized and the binding is complete. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :ready="ready"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      ready: function () {
        alert('ready!')
      }
    }
  }
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan100">rendered</span>
                        </td>
                        <td>
                            <span>Function</span>
                        </td>
                        <td>
                            null
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Callback function which is called when the jqxGrid's render function is called either internally or not. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :rendered="rendered"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      rendered: function () {
        alert('rendered!')
      }
    }
  }
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan101">renderstatusbar</span>
                        </td>
                        <td>
                            <span>Function</span>
                        </td>
                        <td>
                            null
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Callback function which allows you to customize the rendering of the Grid's statusbar. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :showstatusbar="true"
    :renderstatusbar="renderstatusbar"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      renderstatusbar: function (statusbar) {
        statusbar.append($("&lt;span style='margin: 5px;'>Status Bar&lt;/span>"));
      }
    }
  }
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan102">rendertoolbar</span>
                        </td>
                        <td>
                            <span>Function</span>
                        </td>
                        <td>
                            null
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Callback function which allows you to customize the rendering of the Grid's toolbar. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :showtoolbar="true"
    :rendertoolbar="rendertoolbar"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      rendertoolbar: function (toolbar) {
        toolbar.append($("&lt;span style='margin: 5px;'>Tool Bar&lt;/span>"));
      }
    }
  }
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan103">rendergridrows</span>
                        </td>
                        <td>
                            <span>Function</span>
                        </td>
                        <td>
                            null
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>This is a function called when the grid is used in virtual mode. The function should return an array of rows which will be rendered by the Grid. </P>
                                <pre class="code">&lt;template>
  &lt;div style="font-size: 13px; font-family: Verdana; float: left">
    &lt;JqxGrid :width="800" :source="dataAdapter" :columns="columns"
         :autoheight="true" :virtualmode="true" :pageable="true"
         :rendergridrows="rendergridrows">
    &lt;/JqxGrid>
  &lt;/div>
&lt;/template>
&lt;script>
  import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return {
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
      generateData: function(startindex, endindex) {
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
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan104">sortable</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            false
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>The sortable property enables or disables the sorting feature. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :sortable="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan105">sortmode</span>
                        </td>
                        <td>
                            <span>String</span>
                        </td>
                        <td>
                            'one'
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>The sortmode property determines the Grid can sort by single or multiple columns. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :sortable="true"
    :sortmode="'many'"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan106">selectedrowindex</span>
                        </td>
                        <td>
                            <span>Number</span>
                        </td>
                        <td>
                            -1
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Selects a row at a specified index. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :selectedrowindex="2"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan107">selectedrowindexes</span>
                        </td>
                        <td>
                            <span>Array</span>
                        </td>
                        <td>
                            []
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Selects single or multiple rows. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :selectionmode="'multiplerows'"
    :selectedrowindexes=" [0, 2] "
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan108">source</span>
                        </td>
                        <td>
                            <span>Object</span>
                        </td>
                        <td>
                            {}
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets and gets the source. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan109">sorttogglestates</span>
                        </td>
                        <td>
                            <span>Number</span>
                        </td>
                        <td>
                            2
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <B>Possible Values:</B>
<PRE><CODE>'0'-disables toggling</CODE></PRE>
<PRE><CODE></CODE>'1'-enables togging. Click on a column toggles the sort direction</PRE>
<PRE><CODE>'2'-enables remove sorting option</CODE></PRE>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :sortable="true"
    :sorttogglestates="1"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan110">updatedelay</span>
                        </td>
                        <td>
                            <span>Number</span>
                        </td>
                        <td>
                            0
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets the rendering update delay. This could be used for deferred scrolling scenarios. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true" :updatedelay="20"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
&lt;/script&gt;
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan111">virtualmode</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                        <td>
                            false
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Enables or disables the virtual data mode. </P>
                                <pre class="code">&lt;template>
  &lt;div style="font-size: 13px; font-family: Verdana; float: left">
    &lt;JqxGrid :width="800" :source="dataAdapter" :columns="columns"
         :autoheight="true" :virtualmode="true" :pageable="true"
         :rendergridrows="rendergridrows">
    &lt;/JqxGrid>
  &lt;/div>
&lt;/template>
&lt;script>
  import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return {
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
      generateData: function(startindex, endindex) {
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
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan112">verticalscrollbarstep</span>
                        </td>
                        <td>
                            <span>Number</span>
                        </td>
                        <td>
                            5
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets the scrollbar's step when the user clicks the scroll arrows. </P>
                                <pre class="code">&lt;template>
  &lt;JqxGrid :width="getWidth" :source="dataAdapter" :columns="columns" :columnsresize="true" :verticalscrollbarstep="200">
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
        getWidth: getWidth('grid'),
        dataAdapter: new jqx.dataAdapter(this.source),
        columns: [
          { text: 'Name', datafield: 'firstname', width: 120 },
          { text: 'Last Name', datafield: 'lastname', width: 120 },
          { text: 'Product', datafield: 'productname', width: 180 },
          { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
          { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
          { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
        ]
      }
    },
    beforeCreate: function () {
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

      let generateData = () => {
        let data = {};
        for (let i = 0; i &lt; 200; i++) {
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
      };

      this.source = {
        localdata: generateData(),
        datatype: 'array',
        datafields:
          [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'total', type: 'number' }
          ]
      };
    }
  }
&lt;/script>
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan113">verticalscrollbarlargestep</span>
                        </td>
                        <td>
                            <span>Number</span>
                        </td>
                        <td>
                            400
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets or gets the scrollbar's large step. This property specifies the step with which the vertical scrollbar's value is changed when the user clicks the area above or below the thumb. </P>
                                <pre class="code">&lt;template>
  &lt;JqxGrid :width="getWidth" :source="dataAdapter" :columns="columns" :columnsresize="true" :verticalscrollbarlargestep="2000">
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
        getWidth: getWidth('grid'),
        dataAdapter: new jqx.dataAdapter(this.source),
        columns: [
          { text: 'Name', datafield: 'firstname', width: 120 },
          { text: 'Last Name', datafield: 'lastname', width: 120 },
          { text: 'Product', datafield: 'productname', width: 180 },
          { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
          { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
          { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
        ]
      }
    },
    beforeCreate: function () {
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

      let generateData = () => {
        let data = {};
        for (let i = 0; i &lt; 200; i++) {
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
      };

      this.source = {
        localdata: generateData(),
        datatype: 'array',
        datafields:
          [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'total', type: 'number' }
          ]
      };
    }
  }
&lt;/script>
</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <h3 class="documentation-top-header">
                                Events
                            </h3>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan114">bindingcomplete</span>
                        </td>
                        <td>
                            <span>Event</span>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>This event is triggered when the binding is completed. Note: Bind to that event before the Grid's initialization, because if you data bind the Grid to a local data source and bind to the "bindingcomplete" event after the initializaation, the data binding will be already completed. </P>
                                <h4>Code examples</h4>
                                <p>
                                    Bind to the <code>bindingcomplete</code> event of jqxGrid.
                                </p>
                                <p>
                                    <pre class="code">&lt;template>
  &lt;JqxGrid ref="myGrid" @bindingcomplete="onBindingcomplete($event)"
       :width="850" :columns="columns" :autoheight="true" />
&lt;/template>

&lt;script>
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';

  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return {
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
    mounted: function () {
      this.$refs.myGrid.source = this.source;
    },
    methods: {
      onBindingcomplete: function (event) {
        alert('do something...');
      }
    }
  }
&lt;/script>
</pre>
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan115">columnresized</span>
                        </td>
                        <td>
                            <span>Event</span>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>This event is triggered when a Grid Column is resized. </P>
                                <h4>Code examples</h4>
                                <p>
                                    Bind to the <code>columnresized</code> event of jqxGrid.
                                </p>
                                <p>
                                    <pre class="code">&lt;template>
  &lt;JqxGrid ref="myGrid" @columnresized="onColumnresized($event)"
       :width="850" :source="source" :columns="columns" :columnsresize="true" :autoheight="true" />
&lt;/template>

&lt;script>
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';

  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return {
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
      onColumnresized: function (event) {
        alert('do something...');
      }
    }
  }
&lt;/script>
</pre>
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan116">columnreordered</span>
                        </td>
                        <td>
                            <span>Event</span>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>This event is triggered when a Grid Column is moved to a new position. </P>
                                <h4>Code examples</h4>
                                <p>
                                    Bind to the <code>columnreordered</code> event of jqxGrid.
                                </p>
                                <p>
                                    <pre class="code">&lt;template>
  &lt;JqxGrid ref="myGrid" @columnreordered="onColumnreordered($event)"
       :width="850" :source="source" :columns="columns" :columnsreorder="true" :autoheight="true" />
&lt;/template>

&lt;script>
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';

  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return {
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
      onColumnreordered: function (event) {
        alert('do something...');
      }
    }
  }
&lt;/script>
</pre>
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan117">columnclick</span>
                        </td>
                        <td>
                            <span>Event</span>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>This event is triggered when a column is clicked. </P>
                                <h4>Code examples</h4>
                                <p>
                                    Bind to the <code>columnclick</code> event of jqxGrid.
                                </p>
                                <p>
                                    <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid" @columnclick="onColumnclick($event)"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      onColumnclick: function (event) {
        alert('do something...');
      }
    }
  }
&lt;/script&gt;
</pre>
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan118">cellclick</span>
                        </td>
                        <td>
                            <span>Event</span>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>This event is triggered when a cell is clicked. </P>
                                <h4>Code examples</h4>
                                <p>
                                    Bind to the <code>cellclick</code> event of jqxGrid.
                                </p>
                                <p>
                                    <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid" @cellclick="onCellclick($event)"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      onCellclick: function (event) {
        alert('do something...');
      }
    }
  }
&lt;/script&gt;
</pre>
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan119">celldoubleclick</span>
                        </td>
                        <td>
                            <span>Event</span>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>This event is triggered when a cell is double-clicked. </P>
                                <h4>Code examples</h4>
                                <p>
                                    Bind to the <code>celldoubleclick</code> event of jqxGrid.
                                </p>
                                <p>
                                    <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid" @celldoubleclick="onCelldoubleclick($event)"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      onCelldoubleclick: function (event) {
        alert('do something...');
      }
    }
  }
&lt;/script&gt;
</pre>
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan120">cellselect</span>
                        </td>
                        <td>
                            <span>Event</span>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>This event is triggered when a cell is selected. </P>
                                <h4>Code examples</h4>
                                <p>
                                    Bind to the <code>cellselect</code> event of jqxGrid.
                                </p>
                                <p>
                                    <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid" @cellselect="onCellselect($event)"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.selectionmode = 'singlecell';

    },
    methods: {
      onCellselect: function (event) {
        alert('do something...');
      }
    }
  }
&lt;/script&gt;
</pre>
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan121">cellunselect</span>
                        </td>
                        <td>
                            <span>Event</span>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>This event is triggered when a cell is unselected. </P>
                                <h4>Code examples</h4>
                                <p>
                                    Bind to the <code>cellunselect</code> event of jqxGrid.
                                </p>
                                <p>
                                    <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid" @cellunselect="onCellunselect($event)"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.selectionmode = 'singlecell';

    },
    methods: {
      onCellunselect: function (event) {
        alert('do something...');
      }
    }
  }
&lt;/script&gt;
</pre>
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan122">cellvaluechanged</span>
                        </td>
                        <td>
                            <span>Event</span>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>This event is triggered when a cell's value is changed. </P>
                                <h4>Code examples</h4>
                                <p>
                                    Bind to the <code>cellvaluechanged</code> event of jqxGrid.
                                </p>
                                <p>
                                    <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid" @cellvaluechanged="onCellvaluechanged($event)"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.editable = true;

    },
    methods: {
      onCellvaluechanged: function (event) {
        alert('do something...');
      }
    }
  }
&lt;/script&gt;
</pre>
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan123">cellbeginedit</span>
                        </td>
                        <td>
                            <span>Event</span>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>This event is triggered when a cell's editor is displayed. </P>
                                <h4>Code examples</h4>
                                <p>
                                    Bind to the <code>cellbeginedit</code> event of jqxGrid.
                                </p>
                                <p>
                                    <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid" @cellbeginedit="onCellbeginedit($event)"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.editable = true;

    },
    methods: {
      onCellbeginedit: function (event) {
        alert('do something...');
      }
    }
  }
&lt;/script&gt;
</pre>
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan124">cellendedit</span>
                        </td>
                        <td>
                            <span>Event</span>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>This event is triggered when a cell's edit operation has ended. </P>
                                <h4>Code examples</h4>
                                <p>
                                    Bind to the <code>cellendedit</code> event of jqxGrid.
                                </p>
                                <p>
                                    <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid" @cellendedit="onCellendedit($event)"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.editable = true;

    },
    methods: {
      onCellendedit: function (event) {
        alert('do something...');
      }
    }
  }
&lt;/script&gt;
</pre>
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan125">filter</span>
                        </td>
                        <td>
                            <span>Event</span>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>This event is triggered when the Grid is filtered. </P>
                                <h4>Code examples</h4>
                                <p>
                                    Bind to the <code>filter</code> event of jqxGrid.
                                </p>
                                <p>
                                    <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid" @filter="onFilter($event)"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.filterable = true;

    },
    methods: {
      onFilter: function (event) {
        alert('do something...');
      }
    }
  }
&lt;/script&gt;
</pre>
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan126">groupschanged</span>
                        </td>
                        <td>
                            <span>Event</span>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>This event is triggered when a group is added, inserted or removed. </P>
                                <h4>Code examples</h4>
                                <p>
                                    Bind to the <code>groupschanged</code> event of jqxGrid.
                                </p>
                                <p>
                                    <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid" @groupschanged="onGroupschanged($event)"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.groupable = true;

    },
    methods: {
      onGroupschanged: function (event) {
        alert('do something...');
      }
    }
  }
&lt;/script&gt;
</pre>
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan127">groupexpand</span>
                        </td>
                        <td>
                            <span>Event</span>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>This event is triggered when a group is expanded. </P>
                                <h4>Code examples</h4>
                                <p>
                                    Bind to the <code>groupexpand</code> event of jqxGrid.
                                </p>
                                <p>
                                    <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid" @groupexpand="onGroupexpand($event)"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.groupable = true;

    },
    methods: {
      onGroupexpand: function (event) {
        alert('do something...');
      }
    }
  }
&lt;/script&gt;
</pre>
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan128">groupcollapse</span>
                        </td>
                        <td>
                            <span>Event</span>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>This event is triggered when a group is collapsed. </P>
                                <h4>Code examples</h4>
                                <p>
                                    Bind to the <code>groupcollapse</code> event of jqxGrid.
                                </p>
                                <p>
                                    <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid" @groupcollapse="onGroupcollapse($event)"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.groupable = true;

    },
    methods: {
      onGroupcollapse: function (event) {
        alert('do something...');
      }
    }
  }
&lt;/script&gt;
</pre>
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan129">pagechanged</span>
                        </td>
                        <td>
                            <span>Event</span>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>This event is triggered when the current page is changed. </P>
                                <h4>Code examples</h4>
                                <p>
                                    Bind to the <code>pagechanged</code> event of jqxGrid.
                                </p>
                                <p>
                                    <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid" @pagechanged="onPagechanged($event)"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.pageable = true;
      this.$refs.myGrid.pagesize = 1;

    },
    methods: {
      onPagechanged: function (event) {
        alert('do something...');
      }
    }
  }
&lt;/script&gt;
</pre>
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan130">pagesizechanged</span>
                        </td>
                        <td>
                            <span>Event</span>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>This event is triggered when the page size is changed. </P>
                                <h4>Code examples</h4>
                                <p>
                                    Bind to the <code>pagesizechanged</code> event of jqxGrid.
                                </p>
                                <p>
                                    <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid" @pagesizechanged="onPagesizechanged($event)"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.pageable = true;

    },
    methods: {
      onPagesizechanged: function (event) {
        alert('do something...');
      }
    }
  }
&lt;/script&gt;
</pre>
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan131">rowclick</span>
                        </td>
                        <td>
                            <span>Event</span>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>This event is triggered when a row is clicked. </P>
                                <h4>Code examples</h4>
                                <p>
                                    Bind to the <code>rowclick</code> event of jqxGrid.
                                </p>
                                <p>
                                    <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid" @rowclick="onRowclick($event)"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      onRowclick: function (event) {
        alert('do something...');
      }
    }
  }
&lt;/script&gt;
</pre>
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan132">rowdoubleclick</span>
                        </td>
                        <td>
                            <span>Event</span>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>This event is triggered when a row is double clicked. </P>
                                <h4>Code examples</h4>
                                <p>
                                    Bind to the <code>rowdoubleclick</code> event of jqxGrid.
                                </p>
                                <p>
                                    <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid" @rowdoubleclick="onRowdoubleclick($event)"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      onRowdoubleclick: function (event) {
        alert('do something...');
      }
    }
  }
&lt;/script&gt;
</pre>
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan133">rowselect</span>
                        </td>
                        <td>
                            <span>Event</span>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>This event is triggered when a row is selected. </P>
                                <h4>Code examples</h4>
                                <p>
                                    Bind to the <code>rowselect</code> event of jqxGrid.
                                </p>
                                <p>
                                    <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid" @rowselect="onRowselect($event)"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      onRowselect: function (event) {
        alert('do something...');
      }
    }
  }
&lt;/script&gt;
</pre>
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan134">rowunselect</span>
                        </td>
                        <td>
                            <span>Event</span>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>This event is triggered when a row is unselected. </P>
                                <h4>Code examples</h4>
                                <p>
                                    Bind to the <code>rowunselect</code> event of jqxGrid.
                                </p>
                                <p>
                                    <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid" @rowunselect="onRowunselect($event)"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      onRowunselect: function (event) {
        alert('do something...');
      }
    }
  }
&lt;/script&gt;
</pre>
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan135">rowexpand</span>
                        </td>
                        <td>
                            <span>Event</span>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>This event is triggered when a row with details is expanded. </P>
                                <h4>Code examples</h4>
                                <p>
                                    Bind to the <code>rowexpand</code> event of jqxGrid.
                                </p>
                                <p>
                                    <pre class="code">&lt;template>
  &lt;JqxGrid ref="myGrid" @rowexpand="onRowexpand($event)" :width="850" :source="source" :columns="columns" 
       :rowdetails="true" :initrowdetails="initrowdetails" :rowdetailstemplate="rowdetailstemplate" :autoheight="true" />
&lt;/template>

&lt;script>
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';

  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return {
        source: new jqx.dataAdapter(this.source),
        columns: [
          { text: 'Contact Name', datafield: 'ContactName' },
          { text: 'Contact Title', datafield: 'Title' },
          { text: 'City', datafield: 'City' },
          { text: 'Country', datafield: 'Country' }
        ],
        rowdetailstemplate: {
          rowdetails: "&lt;div style='margin: 10px;'>Row Details&lt;/div>",
          rowdetailsheight: 50
        }
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
      initrowdetails: function (index, parentElement, gridElement, datarecord) {
        var details = $($(parentElement).children()[0]);
        details.html("Details: " + index);
      },
      onRowexpand: function (event) {
        alert('do something...');
      }
    }
  }
&lt;/script>
</pre>
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan136">rowcollapse</span>
                        </td>
                        <td>
                            <span>Event</span>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>This event is triggered when a row with details is collapsed. </P>
                                <h4>Code examples</h4>
                                <p>
                                    Bind to the <code>rowcollapse</code> event of jqxGrid.
                                </p>
                                <p>
                                    <pre class="code">&lt;template>
  &lt;JqxGrid ref="myGrid" @rowcollapse="onRowcollapse($event)" :width="850" :source="source" :columns="columns" 
       :rowdetails="true" :initrowdetails="initrowdetails" :rowdetailstemplate="rowdetailstemplate" :autoheight="true" />
&lt;/template>

&lt;script>
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';

  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return {
        source: new jqx.dataAdapter(this.source),
        columns: [
          { text: 'Contact Name', datafield: 'ContactName' },
          { text: 'Contact Title', datafield: 'Title' },
          { text: 'City', datafield: 'City' },
          { text: 'Country', datafield: 'Country' }
        ],
        rowdetailstemplate: {
          rowdetails: "&lt;div style='margin: 10px;'>Row Details&lt;/div>",
          rowdetailsheight: 50
        }
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
      initrowdetails: function (index, parentElement, gridElement, datarecord) {
        var details = $($(parentElement).children()[0]);
        details.html("Details: " + index);
      },
      onRowcollapse: function (event) {
        alert('do something...');
      }
    }
  }
&lt;/script>
</pre>
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan137">sort</span>
                        </td>
                        <td>
                            <span>Event</span>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>This event is triggered when the Grid is sorted. </P>
                                <h4>Code examples</h4>
                                <p>
                                    Bind to the <code>sort</code> event of jqxGrid.
                                </p>
                                <p>
                                    <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid" @sort="onSort($event)"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.sortable = true;
      this.$refs.myGrid.showsortmenuitems = true;

    },
    methods: {
      onSort: function (event) {
        alert('do something...');
      }
    }
  }
&lt;/script&gt;
</pre>
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <h3 class="documentation-top-header">
                                Methods
                            </h3>
                        </td>
                    </tr>
                    <tr><th>Name</th><th>Arguments</th><th>Return Type</th></tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan138">autoresizecolumns</span>
                        </td>
                        <td>
                            <span>type</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Auto-resizes all columns. </P>
                                <pre class="code">&lt;template>
  &lt;div>
    &lt;JqxGrid ref="myGrid"
         :width="410" :source="source" :columns="columns" :autoheight="true" />
    &lt;JqxButton style="margin-top: 20px;" :width="150" @click="resizeColumns()">Auto Resize Columns&lt;/JqxButton>
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
        source: new jqx.dataAdapter(this.source),
        columns: [
          { text: 'Contact Name', datafield: 'ContactName', width: 50 },
          { text: 'Contact Title', datafield: 'Title', width: 50 },
          { text: 'City', datafield: 'City', width: 50 },
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
      resizeColumns: function () {
        this.$refs.myGrid.autoresizecolumns();
      }
    }
  }
&lt;/script></pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan139">autoresizecolumn</span>
                        </td>
                        <td>
                            <span>dataField, type</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Auto-resizes a column. </P>
                                <pre class="code">&lt;template>
  &lt;div>
    &lt;JqxGrid ref="myGrid"
         :width="500" :source="source" :columns="columns" :autoheight="true" />
    &lt;JqxButton style="margin-top: 20px;" :width="200" @click="resizeColumn()">Auto Resize Second Column&lt;/JqxButton>
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
        source: new jqx.dataAdapter(this.source),
        columns: [
          { text: 'Contact Name', datafield: 'ContactName', width: 150 },
          { text: 'Contact Title', datafield: 'Title', width: 50 },
          { text: 'City', datafield: 'City', width: 100 },
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
      resizeColumn: function () {
        this.$refs.myGrid.autoresizecolumn('Title');
      }
    }
  }
&lt;/script></pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan140">beginupdate</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Starts an update operation. This is appropriate when calling multiple methods or set multiple properties at once. Optional boolean parameter: suspendAllActions. When you call beginupdate with parameter equal to <CODE>true</CODE>, the jqxGrid stops all rendering processes and when you call "endupdate", it will call the "render" method. Otherwise, it will try to resume its state with minimial performance impact. Use the suspendAllActions when you make multiple changes which require full-rerender such as changing the Grid's source, columns, groups. </P>
                                <pre class="code">&lt;template>
  &lt;div>
    &lt;JqxGrid ref="myGrid"
         :width="800" :source="source" :columns="columns" :sortable="true" :autoheight="true" />
    &lt;JqxButton style="margin-right: 20px;" :width="100" @click="beginUpdate()">Begin Update&lt;/JqxButton>
    &lt;JqxButton :width="100" @click="endUpdate()">End Update&lt;/JqxButton>
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
      beginUpdate: function () {
        this.$refs.myGrid.beginupdate();
      },
      endUpdate: function () {
        this.$refs.myGrid.endupdate();
      }
    }
  }
&lt;/script>
&lt;style>
  .jqx-button {
    display: inline-block;
    margin-top: 20px;
  }
&lt;/style></pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan141">clear</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Clears the Grid contents. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.clear();
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan142">destroy</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Removes the Grid from the document and releases its resources. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.destroy();
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan143">endupdate</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Ends the update operation. </P>
                                <pre class="code">&lt;template>
  &lt;div>
    &lt;JqxGrid ref="myGrid"
         :width="800" :source="source" :columns="columns" :sortable="true" :autoheight="true" />
    &lt;JqxButton style="margin-right: 20px;" :width="100" @click="beginUpdate()">Begin Update&lt;/JqxButton>
    &lt;JqxButton :width="100" @click="endUpdate()">End Update&lt;/JqxButton>
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
      beginUpdate: function () {
        this.$refs.myGrid.beginupdate();
      },
      endUpdate: function () {
        this.$refs.myGrid.endupdate();
      }
    }
  }
&lt;/script>
&lt;style>
  .jqx-button {
    display: inline-block;
    margin-top: 20px;
  }
&lt;/style></pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan144">ensurerowvisible</span>
                        </td>
                        <td>
                            <span>rowBoundIndex</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Scrolls to a row. The parameter is a bound index. </P>
                                <pre class="code">&lt;template>
  &lt;JqxGrid ref="myGrid"
       :width="850" :source="source" :columns="columns" :height="70" />
&lt;/template>

&lt;script>
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';

  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return {
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
    mounted: function () {
      this.$refs.myGrid.ensurerowvisible(2);
    }
  }
&lt;/script></pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan145">focus</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets the keyboard Focus to the jqxGrid widget. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.focus();
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan146">getcolumnindex</span>
                        </td>
                        <td>
                            <span>dataField</span>
                        </td>
                        <td>
                            <span>Number</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Gets the index of a column in the columns collection. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      const value = this.$refs.myGrid.getcolumnindex('Title');
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan147">getcolumn</span>
                        </td>
                        <td>
                            <span>dataField</span>
                        </td>
                        <td>
                            <span>Object</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Gets a column by datafield value.Column's fields: </P>
                                <UL>
                                    <LI>datafield - column's datafield. To get the cells labels and values from the data source, the Grid uses the "datafield" and "displayfield" properties. If the "displayfield" is not set, the "displayfield" is equal to the "datafield'.</LI>
                                    <LI>text - column's text.</LI>
                                    <LI>displayfield - column's displayfield. To get the cells labels and values from the data source, the Grid uses the "datafield" and "displayfield" properties. If the "displayfield" is not set, the "displayfield" is equal to the "datafield'.</LI>
                                    <LI>sortable - determines whether the column is sortable.</LI>
                                    <LI>filterable - determines whether the column is filterable.</LI>
                                    <LI>exportable - determines whether the column will be exported through the "exportdata" method.</LI>
                                    <LI>editable - determines whether the column is editable.</LI>
                                    <LI>groupable - determines whether the column is groupable.</LI>
                                    <LI>resizable - determines whether the column is resizable.</LI>
                                    <LI>draggable - determines whether the column is draggable.</LI>
                                    <LI>classname - determines the column's header classname.</LI>
                                    <LI>cellclassname - determines the column's cells classname.</LI>
                                    <LI>width - determines the column's width.</LI>
                                    <LI>menu - determines whether the column has an associated popup menu or not. </LI>
                                </UL>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      const value = this.$refs.myGrid.getcolumn('Title');
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan148">getcolumnproperty</span>
                        </td>
                        <td>
                            <span>dataField, propertyName</span>
                        </td>
                        <td>
                            <span>Object</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Gets a property of a column. Possible property names: 'text', 'hidden', 'hideable', 'renderer', 'cellsrenderer', 'align', 'cellsalign', 'cellsformat', 'pinned', 'contenttype', 'resizable', 'filterable', 'editable', 'cellclassname', 'classname', 'width', 'minwidth', 'maxwidth' </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      const value = this.$refs.myGrid.getcolumnproperty('Title','text');
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan149">getrowid</span>
                        </td>
                        <td>
                            <span>rowBoundIndex</span>
                        </td>
                        <td>
                            <span>String</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Gets the id of a row. The returned value is a 'string' or 'number' depending on the id's type. The parameter is the row's bound index. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      const value = this.$refs.myGrid.getrowid(0);
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan150">getrowdata</span>
                        </td>
                        <td>
                            <span>rowBoundIndex</span>
                        </td>
                        <td>
                            <span>Object</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Gets the data of a row. The returned value is a JSON object. The parameter is the row's bound index. Note: If you pass a bound index of a row which is not visible in the Grid, the method returns null. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      const value = this.$refs.myGrid.getrowdata(0);
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan151">getrowdatabyid</span>
                        </td>
                        <td>
                            <span>rowID</span>
                        </td>
                        <td>
                            <span>Object</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Gets the data of a row. The returned value is a JSON object. The parameter is the row's id. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      const value = this.$refs.myGrid.getrowdatabyid(0);
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan152">getrowboundindexbyid</span>
                        </td>
                        <td>
                            <span>rowID</span>
                        </td>
                        <td>
                            <span>Number</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Gets the index of a row in the array returned by the <CODE>getboundrows</CODE> method. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      const value = this.$refs.myGrid.getrowboundindexbyid(0);
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan153">getrowboundindex</span>
                        </td>
                        <td>
                            <span>rowDisplayIndex</span>
                        </td>
                        <td>
                            <span>Number</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Gets the index of a row in the array returned by the <CODE>getboundrows</CODE> method. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      const value = this.$refs.myGrid.getrowboundindex(0);
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan154">getrows</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>Array</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Gets all rows. Returns an array of all rows loaded in the Grid. If the Grid is filtered, the returned value is an array of the filtered records. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      const value = this.$refs.myGrid.getrows();
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan155">getboundrows</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>Array</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Gets all rows loaded from the data source. The method returns an Array of all rows. The Grid's sorting, filtering, grouping and paging will not affect the result of this method. It will always return the rows collection loaded from the data source. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      const value = this.$refs.myGrid.getboundrows();
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan156">getdisplayrows</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>Array</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Gets all rows that are currently displayed in the Grid. The method returns an Array of the displayed rows. The Grid's sorting, filtering, grouping and paging will affect the result of this method. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      const value = this.$refs.myGrid.getdisplayrows();
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan157">getdatainformation</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>Object</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Gets bound data information. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.pageable = true;
      this.$refs.myGrid.sortable = true;

      const value = this.$refs.myGrid.getdatainformation();
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan158">getsortinformation</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>Object</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Gets the sort information. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.sortable = true;

      const value = this.$refs.myGrid.getsortinformation();
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan159">getpaginginformation</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>Object</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Gets the paging information. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.pageable = true;

      const value = this.$refs.myGrid.getpaginginformation();
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan160">hidecolumn</span>
                        </td>
                        <td>
                            <span>dataField</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Hides a column. </P>
                                <pre class="code">&lt;template>
  &lt;div>
    &lt;JqxGrid ref="myGrid"
         :width="800" :source="source" :columns="columns" :autoheight="true" />
    &lt;JqxButton style="margin-right: 20px;" :width="100" @click="showColumn()">Show Column&lt;/JqxButton>
    &lt;JqxButton :width="100" @click="hideColumn()">Hide Column&lt;/JqxButton>
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
        source: new jqx.dataAdapter(this.source),
        columns: [
          { text: 'Contact Name', datafield: 'ContactName'},
          { text: 'Contact Title', datafield: 'Title'},
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
      showColumn: function () {
        this.$refs.myGrid.showcolumn('ContactName');
      },
      hideColumn: function () {
        this.$refs.myGrid.hidecolumn('ContactName');
      }
    }
  }
&lt;/script>
&lt;style>
  .jqx-button {
    display: inline-block;
    margin-top: 20px;
  }
&lt;/style></pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan161">hideloadelement</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Hides the data loading image. </P>
                                <pre class="code">&lt;template>
  &lt;div>
    &lt;JqxGrid ref="myGrid"
         :width="800" :source="source" :columns="columns" :autoheight="true" />
    &lt;JqxButton style="margin-right: 20px;" :width="150" @click="showElement()">Show Load Element&lt;/JqxButton>
    &lt;JqxButton :width="150" @click="hideElement()">Hide Load Element&lt;/JqxButton>
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
      showElement: function () {
        this.$refs.myGrid.showloadelement();
      },
      hideElement: function () {
        this.$refs.myGrid.hideloadelement();
      }
    }
  }
&lt;/script>
&lt;style>
  .jqx-button {
    display: inline-block;
    margin-top: 20px;
  }
&lt;/style></pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan162">hiderowdetails</span>
                        </td>
                        <td>
                            <span>rowBoundIndex</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Hides the details of a row. </P>
                                <pre class="code">&lt;template>
  &lt;div>
    &lt;JqxGrid ref="myGrid"
         :width="800" :source="source" :columns="columns" :autoheight="true"
         :rowdetails="true" :initrowdetails="initrowdetails" :rowdetailstemplate="rowdetailstemplate" />
    &lt;JqxButton style="margin-right: 20px;" :width="150" @click="showDetails()">Show Row Details&lt;/JqxButton>
    &lt;JqxButton :width="150" @click="hideDetails()">Hide Row Details&lt;/JqxButton>
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
        source: new jqx.dataAdapter(this.source),
        columns: [
          { text: 'Contact Name', datafield: 'ContactName' },
          { text: 'Contact Title', datafield: 'Title' },
          { text: 'City', datafield: 'City' },
          { text: 'Country', datafield: 'Country' }
        ],
        rowdetailstemplate: {
          rowdetails: "&lt;div style='margin: 10px;'>Row Details&lt;/div>",
          rowdetailsheight: 50
        }
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
      initrowdetails: function (index, parentElement, gridElement, datarecord) {
        var details = $($(parentElement).children()[0]);
        details.html("Details: " + index);
      },
      showDetails: function () {
        this.$refs.myGrid.showrowdetails(0);
      },
      hideDetails: function () {
        this.$refs.myGrid.hiderowdetails(0);
      }
    }
  }
&lt;/script>
&lt;style>
  .jqx-button {
    display: inline-block;
    margin-top: 20px;
  }
&lt;/style></pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan163">iscolumnvisible</span>
                        </td>
                        <td>
                            <span>dataField</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Gets whether a column is visible. Returns a boolean value. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      const value = this.$refs.myGrid.iscolumnvisible('ContactName');
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan164">iscolumnpinned</span>
                        </td>
                        <td>
                            <span>dataField</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Gets whether a column is pinned. Returns a boolean value. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      const value = this.$refs.myGrid.iscolumnpinned('ContactName');
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan165">localizestrings</span>
                        </td>
                        <td>
                            <span>localizationobject</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Localizes the grid strings. This method allows you to change the valus of all Grid strings and also to change the cells formatting settings. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.pageable = true;

      this.$refs.myGrid.localizestrings(getLocalization('de'));
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan166">pincolumn</span>
                        </td>
                        <td>
                            <span>dataField</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Pins the column. </P>
                                <pre class="code">&lt;template>
  &lt;div>
    &lt;JqxGrid ref="myGrid"
         :width="800" :source="source" :columns="columns" :autoheight="true" />
    &lt;JqxButton style="margin-right: 20px;" :width="100" @click="pinColumn()">Pin Column&lt;/JqxButton>
    &lt;JqxButton :width="100" @click="unpinColumn()">Unpin Column&lt;/JqxButton>
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
      pinColumn: function () {
        this.$refs.myGrid.pincolumn('ContactName');
      },
      unpinColumn: function () {
        this.$refs.myGrid.unpincolumn('ContactName');
      }
    }
  }
&lt;/script>
&lt;style>
  .jqx-button {
    display: inline-block;
    margin-top: 20px;
  }
&lt;/style></pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan167">refreshdata</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Refreshes the data. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.refreshdata();
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan168">refresh</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Repaints the Grid View. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.refresh();
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan169">render</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Renders the Grid contents. This method completely refreshes the Grid cells, columns, layout and repaints the view. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.render();
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan170">scrolloffset</span>
                        </td>
                        <td>
                            <span>top, left</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Scrolls the grid contents. </P>
                                <pre class="code">&lt;template>
  &lt;JqxGrid ref="myGrid"
       :width="400" :source="source" :columns="columns" :autoheight="true" />
&lt;/template>

&lt;script>
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';

  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return {
        source: new jqx.dataAdapter(this.source),
        columns: [
          { text: 'Contact Name', datafield: 'ContactName', width: 150 },
          { text: 'Contact Title', datafield: 'Title', width: 150 },
          { text: 'City', datafield: 'City', width: 150 },
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
    mounted: function () {
      this.$refs.myGrid.scrolloffset(0, 100);
    }
  }
&lt;/script></pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan171">scrollposition</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>Object</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Returns the scrollbars position. </P>
                                <pre class="code">&lt;template>
  &lt;JqxGrid ref="myGrid"
       :width="400" :source="source" :columns="columns" :autoheight="true" />
&lt;/template>
&lt;script>
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return {
        source: new jqx.dataAdapter(this.source),
        columns: [
          { text: 'Contact Name', datafield: 'ContactName', width: 150 },
          { text: 'Contact Title', datafield: 'Title', width: 150 },
          { text: 'City', datafield: 'City', width: 150 },
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
    mounted: function () {
      let position = this.$refs.myGrid.scrollposition();
      let left = position.left;
      let top = position.top;
      alert('Left: ' + left + ", Top: " + top);
    }
  }
&lt;/script></pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan172">showloadelement</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Shows the data loading image. </P>
                                <pre class="code">&lt;template>
  &lt;div>
    &lt;JqxGrid ref="myGrid"
         :width="800" :source="source" :columns="columns" :autoheight="true" />
    &lt;JqxButton style="margin-right: 20px;" :width="150" @click="showElement()">Show Load Element&lt;/JqxButton>
    &lt;JqxButton :width="150" @click="hideElement()">Hide Load Element&lt;/JqxButton>
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
      showElement: function () {
        this.$refs.myGrid.showloadelement();
      },
      hideElement: function () {
        this.$refs.myGrid.hideloadelement();
      }
    }
  }
&lt;/script>
&lt;style>
  .jqx-button {
    display: inline-block;
    margin-top: 20px;
  }
&lt;/style></pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan173">showrowdetails</span>
                        </td>
                        <td>
                            <span>rowBoundIndex</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Shows the details of a row. </P>
                                <pre class="code">&lt;template>
  &lt;div>
    &lt;JqxGrid ref="myGrid"
         :width="800" :source="source" :columns="columns" :autoheight="true"
         :rowdetails="true" :initrowdetails="initrowdetails" :rowdetailstemplate="rowdetailstemplate" />
    &lt;JqxButton style="margin-right: 20px;" :width="150" @click="showDetails()">Show Row Details&lt;/JqxButton>
    &lt;JqxButton :width="150" @click="hideDetails()">Hide Row Details&lt;/JqxButton>
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
        source: new jqx.dataAdapter(this.source),
        columns: [
          { text: 'Contact Name', datafield: 'ContactName' },
          { text: 'Contact Title', datafield: 'Title' },
          { text: 'City', datafield: 'City' },
          { text: 'Country', datafield: 'Country' }
        ],
        rowdetailstemplate: {
          rowdetails: "&lt;div style='margin: 10px;'>Row Details&lt;/div>",
          rowdetailsheight: 50
        }
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
      initrowdetails: function (index, parentElement, gridElement, datarecord) {
        var details = $($(parentElement).children()[0]);
        details.html("Details: " + index);
      },
      showDetails: function () {
        this.$refs.myGrid.showrowdetails(0);
      },
      hideDetails: function () {
        this.$refs.myGrid.hiderowdetails(0);
      }
    }
  }
&lt;/script>
&lt;style>
  .jqx-button {
    display: inline-block;
    margin-top: 20px;
  }
&lt;/style></pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan174">setcolumnindex</span>
                        </td>
                        <td>
                            <span>dataField, index</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                n<P>Sets the index of a column in the columns collection. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.setcolumnindex('Title',0);
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan175">setcolumnproperty</span>
                        </td>
                        <td>
                            <span>dataField, propertyName, propertyValue</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets a property of a column.Possible property names: 'text', 'hidden', 'hideable', 'renderer', 'cellsrenderer', 'align', 'cellsalign', 'cellsformat', 'pinned', 'contenttype', 'resizable', 'filterable', 'editable', 'cellclassname', 'classname', 'width', 'minwidth', 'maxwidth' </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.setcolumnproperty('Title','text','New Name');
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan176">showcolumn</span>
                        </td>
                        <td>
                            <span>dataField</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Shows a column. </P>
                                <pre class="code">&lt;template>
  &lt;div>
    &lt;JqxGrid ref="myGrid"
         :width="800" :source="source" :columns="columns" :autoheight="true" />
    &lt;JqxButton style="margin-right: 20px;" :width="100" @click="showColumn()">Show Column&lt;/JqxButton>
    &lt;JqxButton :width="100" @click="hideColumn()">Hide Column&lt;/JqxButton>
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
        source: new jqx.dataAdapter(this.source),
        columns: [
          { text: 'Contact Name', datafield: 'ContactName'},
          { text: 'Contact Title', datafield: 'Title'},
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
      showColumn: function () {
        this.$refs.myGrid.showcolumn('ContactName');
      },
      hideColumn: function () {
        this.$refs.myGrid.hidecolumn('ContactName');
      }
    }
  }
&lt;/script>
&lt;style>
  .jqx-button {
    display: inline-block;
    margin-top: 20px;
  }
&lt;/style></pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan177">unpincolumn</span>
                        </td>
                        <td>
                            <span>dataField</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Unpins the column. </P>
                                <pre class="code">&lt;template>
  &lt;div>
    &lt;JqxGrid ref="myGrid"
         :width="800" :source="source" :columns="columns" :autoheight="true" />
    &lt;JqxButton style="margin-right: 20px;" :width="100" @click="pinColumn()">Pin Column&lt;/JqxButton>
    &lt;JqxButton :width="100" @click="unpinColumn()">Unpin Column&lt;/JqxButton>
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
      pinColumn: function () {
        this.$refs.myGrid.pincolumn('ContactName');
      },
      unpinColumn: function () {
        this.$refs.myGrid.unpincolumn('ContactName');
      }
    }
  }
&lt;/script>
&lt;style>
  .jqx-button {
    display: inline-block;
    margin-top: 20px;
  }
&lt;/style></pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan178">updatebounddata</span>
                        </td>
                        <td>
                            <span>type</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Updates the bound data and refreshes the grid. You can pass 'filter' or 'sort' as parameter, if the update reason is change in 'filtering' or 'sorting'. To update only the data without the columns, use the 'data' parameter. To make a quick update of the cells, pass "cells" as parameter. Passing "cells" will refresh only the cells values when the new rows count is equal to the previous rows count. To make a full update, do not pass any parameter. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.updatebounddata();
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan179">updating</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Gets the updating operation state. Returns a boolean value. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      const value = this.$refs.myGrid.updating();
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan180">getsortcolumn</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>String</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Gets the sort column. Returns the column's datafield or null, if sorting is not applied. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.sortable = true;

      const value = this.$refs.myGrid.getsortcolumn();
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan181">removesort</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Removes the sorting. </P>
                                <pre class="code">&lt;template>
  &lt;div>
    &lt;JqxGrid ref="myGrid"
         :width="850" :source="source" :columns="columns" :sortable="true" :autoheight="true" />
    &lt;JqxButton style="margin-top: 20px;" :width="150" @click="removeSort()">Remove Sort&lt;/JqxButton>
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
      removeSort: function () {
        this.$refs.myGrid.removesort();
      }
    }
  }
&lt;/script></pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan182">sortby</span>
                        </td>
                        <td>
                            <span>dataField, sortOrder</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sorts the Grid data. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.sortable = true;

      this.$refs.myGrid.sortby('ContactName','asc');
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan183">addgroup</span>
                        </td>
                        <td>
                            <span>dataField</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Groups by a column. </P>
                                <pre class="code">&lt;template>
  &lt;div>
    &lt;JqxGrid ref="myGrid"
         :width="800" :source="source" :columns="columns" :groupable="true" :autoheight="true" />
    &lt;JqxButton style="margin-right: 20px;" :width="100" @click="addGroup()">Add Group&lt;/JqxButton>
    &lt;JqxButton :width="100" @click="removeGroup()">Remove Group&lt;/JqxButton>
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
      addGroup: function () {
        this.$refs.myGrid.addgroup('ContactName');
      },
      removeGroup: function () {
        this.$refs.myGrid.removegroup('ContactName');
      }
    }
  }
&lt;/script>
&lt;style>
  .jqx-button {
    display: inline-block;
    margin-top: 20px;
  }
&lt;/style></pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan184">cleargroups</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Clears all groups. </P>
                                <pre class="code">&lt;template>
  &lt;div>
    &lt;JqxGrid ref="myGrid"
         :width="800" :source="source" :columns="columns" :groupable="true" :autoheight="true" />
    &lt;JqxButton style="margin-top: 20px;" :width="100" @click="clearGroups()">Clear Groups&lt;/JqxButton>
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
      clearGroups: function () {
        this.$refs.myGrid.cleargroups();
      }
    }
  }
&lt;/script></pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan185">collapsegroup</span>
                        </td>
                        <td>
                            <span>group</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Collapses a group. </P>
                                <pre class="code">&lt;template>
  &lt;div>
    &lt;JqxGrid ref="myGrid"
         :width="800" :source="source" :columns="columns" :groupable="true" :groups=" ['ContactName'] " :autoheight="true" />
    &lt;JqxButton style="margin-right: 20px;" :width="100" @click="expandGroup()">Expand Group&lt;/JqxButton>
    &lt;JqxButton :width="100" @click="collapseGroup()">Collapse Group&lt;/JqxButton>
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
      expandGroup: function () {
        this.$refs.myGrid.expandgroup(0);
      },
      collapseGroup: function () {
        this.$refs.myGrid.collapsegroup(0);
      }
    }
  }
&lt;/script>
&lt;style>
  .jqx-button {
    display: inline-block;
    margin-top: 20px;
  }
&lt;/style></pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan186">collapseallgroups</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Collapses all groups. </P>
                                <pre class="code">&lt;template>
  &lt;div>
    &lt;JqxGrid ref="myGrid"
         :width="800" :source="source" :columns="columns" :groupable="true" :groups=" ['ContactName'] " :autoheight="true" />
    &lt;JqxButton style="margin-right: 20px;" :width="110" @click="expandGroup()">Expand Groups&lt;/JqxButton>
    &lt;JqxButton :width="110" @click="collapseGroup()">Collapse Groups&lt;/JqxButton>
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
      expandGroup: function () {
        this.$refs.myGrid.expandallgroups();
      },
      collapseGroup: function () {
        this.$refs.myGrid.collapseallgroups();
      }
    }
  }
&lt;/script>
&lt;style>
  .jqx-button {
    display: inline-block;
    margin-top: 20px;
  }
&lt;/style></pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan187">expandallgroups</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Expands all groups. </P>
                                <pre class="code">&lt;template>
  &lt;div>
    &lt;JqxGrid ref="myGrid"
         :width="800" :source="source" :columns="columns" :groupable="true" :groups=" ['ContactName'] " :autoheight="true" />
    &lt;JqxButton style="margin-right: 20px;" :width="110" @click="expandGroup()">Expand Groups&lt;/JqxButton>
    &lt;JqxButton :width="110" @click="collapseGroup()">Collapse Groups&lt;/JqxButton>
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
      expandGroup: function () {
        this.$refs.myGrid.expandallgroups();
      },
      collapseGroup: function () {
        this.$refs.myGrid.collapseallgroups();
      }
    }
  }
&lt;/script>
&lt;style>
  .jqx-button {
    display: inline-block;
    margin-top: 20px;
  }
&lt;/style></pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan188">expandgroup</span>
                        </td>
                        <td>
                            <span>group</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Expands a group. </P>
                                <pre class="code">&lt;template>
  &lt;div>
    &lt;JqxGrid ref="myGrid"
         :width="800" :source="source" :columns="columns" :groupable="true" :groups=" ['ContactName'] " :autoheight="true" />
    &lt;JqxButton style="margin-right: 20px;" :width="100" @click="expandGroup()">Expand Group&lt;/JqxButton>
    &lt;JqxButton :width="100" @click="collapseGroup()">Collapse Group&lt;/JqxButton>
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
      expandGroup: function () {
        this.$refs.myGrid.expandgroup(0);
      },
      collapseGroup: function () {
        this.$refs.myGrid.collapsegroup(0);
      }
    }
  }
&lt;/script>
&lt;style>
  .jqx-button {
    display: inline-block;
    margin-top: 20px;
  }
&lt;/style></pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan189">getrootgroupscount</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>Number</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Gets the number of root groups. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.groupable = true;
      this.$refs.myGrid.groups = ['ContactName'];

      const value = this.$refs.myGrid.getrootgroupscount();
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan190">getgroup</span>
                        </td>
                        <td>
                            <span>groupIndex</span>
                        </td>
                        <td>
                            <span>Object</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Gets a group. The method returns an object with details about the Group. The object has the following fields: </P>
                                <UL>
                                    <LI>group - group's name.</LI>
                                    <LI>level - group's level in the group's hierarchy.</LI>
                                    <LI>expanded - group's expand state.</LI>
                                    <LI>subgroups - an array of sub groups or null.</LI>
                                    <LI>subrows - an array of rows or null. </LI>
                                </UL>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.groupable = true;
      this.$refs.myGrid.groups = ['ContactName'];

      const value = this.$refs.myGrid.getgroup(0);
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan191">insertgroup</span>
                        </td>
                        <td>
                            <span>groupIndex, dataField</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Groups by a column. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.groupable = true;
      this.$refs.myGrid.groups = ['ContactName'];

      this.$refs.myGrid.insertgroup(0,'Title');
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan192">iscolumngroupable</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Gets whether the user can group by a column. Returns a boolean value. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.groupable = true;

      const value = this.$refs.myGrid.iscolumngroupable('ContactName');
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan193">removegroupat</span>
                        </td>
                        <td>
                            <span>groupIndex</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Removes a group at specific index. </P>
                                <pre class="code">&lt;template>
  &lt;div>
    &lt;JqxGrid ref="myGrid"
         :width="800" :source="source" :columns="columns" :groupable="true" :autoheight="true" />
    &lt;JqxButton style="margin-top: 20px;" :width="150" @click="removeGroupAt()">Remove First Group&lt;/JqxButton>
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
      removeGroupAt: function () {
        this.$refs.myGrid.removegroupat('0');
      }
    }
  }
&lt;/script></pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan194">removegroup</span>
                        </td>
                        <td>
                            <span>dataField</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Removes a group. </P>
                                <pre class="code">&lt;template>
  &lt;div>
    &lt;JqxGrid ref="myGrid"
         :width="800" :source="source" :columns="columns" :groupable="true" :autoheight="true" />
    &lt;JqxButton style="margin-right: 20px;" :width="100" @click="addGroup()">Add Group&lt;/JqxButton>
    &lt;JqxButton :width="100" @click="removeGroup()">Remove Group&lt;/JqxButton>
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
      addGroup: function () {
        this.$refs.myGrid.addgroup('ContactName');
      },
      removeGroup: function () {
        this.$refs.myGrid.removegroup('ContactName');
      }
    }
  }
&lt;/script>
&lt;style>
  .jqx-button {
    display: inline-block;
    margin-top: 20px;
  }
&lt;/style></pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan195">addfilter</span>
                        </td>
                        <td>
                            <span>dataField, filterGroup, refreshGrid</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Adds a filter to the Grid. </P>
                                <pre class="code">&lt;template>
  &lt;JqxGrid ref="myGrid"
       :width="850" :source="source" :columns="columns" :filterable="true" :autoheight="true" />
&lt;/template>

&lt;script>
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';

  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return {
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
    mounted: function () {
      let filtergroup = new jqx.filter();
      let filter_or_operator = 1;
      let filtervalue = 'Maria';
      let filtercondition = 'contains';
      let filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
      filtergroup.addfilter(filter_or_operator, filter);
      this.$refs.myGrid.addfilter('ContactName', filtergroup);
      this.$refs.myGrid.applyfilters();
    }
  }
&lt;/script></pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan196">applyfilters</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Applies all filters to the Grid. </P>
                                <pre class="code">&lt;template>
  &lt;JqxGrid ref="myGrid"
       :width="850" :source="source" :columns="columns" :filterable="true" :autoheight="true" />
&lt;/template>

&lt;script>
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';

  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return {
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
    mounted: function () {
      let filtergroup = new jqx.filter();
      let filter_or_operator = 1;
      let filtervalue = 'Maria';
      let filtercondition = 'contains';
      let filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
      filtergroup.addfilter(filter_or_operator, filter);
      this.$refs.myGrid.addfilter('ContactName', filtergroup);
      this.$refs.myGrid.applyfilters();
    }
  }
&lt;/script></pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan197">clearfilters</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Clears all filters from the Grid. You can call the method with optional boolean parameter. If the parameter is "true" or you call the method without parameter, the Grid will clear the filters and refresh the Grid(default behavior). If the parameter is "false", the method will clear the filters without refreshing the Grid. </P>
                                <pre class="code">&lt;template>
  &lt;div>
    &lt;JqxGrid ref="myGrid"
         :width="800" :source="source" :columns="columns" :filterable="true" :autoheight="true" />
    &lt;JqxButton style="margin-top: 20px;" :width="100" @click="clearFilters()">Clear Filters&lt;/JqxButton>
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
      clearFilters: function () {
        this.$refs.myGrid.clearfilters();
      }
    }
  }
&lt;/script></pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan198">getfilterinformation</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>Any</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Gets the information about the Grid filters. The method returns an array of the applied filters. The returned information includes the filter objects and filter columns. Each filter in the Array has the following fields: </P>
                                <UL>
                                    <LI>
                                        filter - a filter object which may contain one or more filters. <BR/>Properties and Methods of the filter object.
                                        <UL>
                                            <LI>
                                                getfilters - returns an array of all filters in the filter object. Each filter in the Array has:
                                                <UL>
                                                    <LI>value - filter's value.</LI>
                                                    <LI>id - filter's id.</LI>
                                                    <LI>condition - filter's operator. For string filter the value could be: 'EMPTY', 'NOT_EMPTY', 'CONTAINS', 'CONTAINS_CASE_SENSITIVE', 'DOES_NOT_CONTAIN', 'DOES_NOT_CONTAIN_CASE_SENSITIVE', 'STARTS_WITH', 'STARTS_WITH_CASE_SENSITIVE', 'ENDS_WITH', 'ENDS_WITH_CASE_SENSITIVE', 'EQUAL', 'EQUAL_CASE_SENSITIVE', 'NULL', 'NOT_NULL. For Date and number filter the value could be: 'EQUAL', 'NOT_EQUAL', 'LESS_THAN', 'LESS_THAN_OR_EQUAL', 'GREATER_THAN', 'GREATER_THAN_OR_EQUAL', 'NULL', 'NOT_NULL'. For boolean filter, the value could be: 'EQUAL', 'NOT_EQUAL'</LI>
                                                    <LI>type - filter's type - 'stringfilter', 'numericfilter', 'booleanfilter' or 'datefilter'. </LI>
                                                </UL>
                                            </LI>
                                            <LI>operator - 'and' or 'or'. Determines the connection between the filters in the group. </LI>
                                        </UL>
                                    </LI>
                                    <LI>datafield - the column's datafield.</LI>
                                    <LI>displayfield - the column's display field. </LI>
                                </UL>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.filterable = true;

      const value = this.$refs.myGrid.getfilterinformation();
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan199">getcolumnat</span>
                        </td>
                        <td>
                            <span>index</span>
                        </td>
                        <td>
                            <span>Object</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <p>Method: getcolumnat</p>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      const value = this.$refs.myGrid.getcolumnat(3);
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan200">removefilter</span>
                        </td>
                        <td>
                            <span>dataField, refreshGrid</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Removes a filter from the Grid. </P>
                                <pre class="code">&lt;template>
  &lt;div>
    &lt;JqxGrid ref="myGrid"
         :width="800" :source="source" :columns="columns" :filterable="true" :autoheight="true" />
    &lt;JqxButton style="margin-top: 20px;" :width="200" @click="removeFilter()">Remove Contact Name Filter&lt;/JqxButton>
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
      removeFilter: function () {
        this.$refs.myGrid.removefilter('ContactName');
      }
    }
  }
&lt;/script></pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan201">refreshfilterrow</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Refreshes the filter row and updates the filter widgets. The filter row's widgets are synchronized with the applied filters. </P>
                                <pre class="code">&lt;template>
  &lt;div>
    &lt;JqxGrid ref="myGrid"
         :width="800" :source="source" :columns="columns" :filterable="true" :showfilterrow="true" :autoheight="true" />
    &lt;JqxButton style="margin-top: 20px;" :width="200" @click="refresh()">Refresh filter row&lt;/JqxButton>
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
      addFilters: function() {
        let filtergroup = new jqx.filter();
        let filter_or_operator = 1;
        let filtervalue = 'Maria';
        let filtercondition = 'contains';
        let filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        filtergroup.addfilter(filter_or_operator, filter);
        this.$refs.myGrid.addfilter('ContactName', filtergroup);
        this.$refs.myGrid.applyfilters();
      },
      refresh: function () {
        this.addFilters()
        this.$refs.myGrid.refreshfilterrow();
      }
    }
  }
&lt;/script></pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan202">gotopage</span>
                        </td>
                        <td>
                            <span>pagenumber</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Navigates to a page when the Grid paging is enabled i.e when the pageable property value is true. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.pageable = true;
      this.$refs.myGrid.pagesize = 1;

      this.$refs.myGrid.gotopage(2);
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan203">gotoprevpage</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Navigates to a previous page when the Grid paging is enabled i.e when the pageable property value is true. </P>
                                <pre class="code">&lt;template>
  &lt;div>
    &lt;JqxGrid ref="myGrid"
         :width="800" :source="source" :columns="columns" :pageable="true" :pagesize="1" :autoheight="true" />
    &lt;JqxButton style="margin-right: 20px;margin-top: 20px;" :width="100" @click="prevPage()">Previous Page&lt;/JqxButton>
    &lt;JqxButton style="margin-top: 20px;":width="100" @click="nextPage()">Next Page&lt;/JqxButton>
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
      prevPage: function () {
        this.$refs.myGrid.gotoprevpage();
      },
      nextPage: function () {
        this.$refs.myGrid.gotonextpage();
      }
    }
  }
&lt;/script>
&lt;style>
  .jqx-button {
    display: inline-block;
  }
&lt;/style></pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan204">gotonextpage</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Navigates to a next page when the Grid paging is enabled i.e when the pageable property value is true. </P>
                                <pre class="code">&lt;template>
  &lt;div>
    &lt;JqxGrid ref="myGrid"
         :width="800" :source="source" :columns="columns" :pageable="true" :pagesize="1" :autoheight="true" />
    &lt;JqxButton style="margin-right: 20px;margin-top: 20px;" :width="100" @click="prevPage()">Previous Page&lt;/JqxButton>
    &lt;JqxButton style="margin-top: 20px;":width="100" @click="nextPage()">Next Page&lt;/JqxButton>
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
      prevPage: function () {
        this.$refs.myGrid.gotoprevpage();
      },
      nextPage: function () {
        this.$refs.myGrid.gotonextpage();
      }
    }
  }
&lt;/script>
&lt;style>
  .jqx-button {
    display: inline-block;
  }
&lt;/style></pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan205">addrow</span>
                        </td>
                        <td>
                            <span>rowIds, data, rowPosition</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Adds a new row or multiple rows. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.addrow(1,{});
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan206">begincelledit</span>
                        </td>
                        <td>
                            <span>rowBoundIndex, dataField</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Shows the cell's editor. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.begincelledit(1,'firstname');
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan207">beginrowedit</span>
                        </td>
                        <td>
                            <span>rowBoundIndex</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Shows the cell editors for an entire row. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.beginrowedit(1);
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan208">closemenu</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Closes a column's menu. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.closemenu();
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan209">deleterow</span>
                        </td>
                        <td>
                            <span>rowIds</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Deletes a row or multiple rows. Returns a boolean value. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.deleterow(1);
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan210">endcelledit</span>
                        </td>
                        <td>
                            <span>rowBoundIndex, dataField, confirmChanges</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Hides the edit cell's editor and saves or cancels the changes. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.endcelledit(1,'firstname',true);
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan211">endrowedit</span>
                        </td>
                        <td>
                            <span>rowBoundIndex, confirmChanges</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Hides the edited row's editors and saves or cancels the changes. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.endrowedit(1,true);
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan212">getcell</span>
                        </td>
                        <td>
                            <span>rowBoundIndex, datafield</span>
                        </td>
                        <td>
                            <span>Object</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Gets a cell. Returns an object with the following fields: </P>
                                <UL>
                                    <LI>value - cell's value.</LI>
                                    <LI>row - cell's row number.</LI>
                                    <LI>column - column's datafield. </LI>
                                </UL>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      const value = this.$refs.myGrid.getcell(1,'firstname');
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan213">getcellatposition</span>
                        </td>
                        <td>
                            <span>left, top</span>
                        </td>
                        <td>
                            <span>Object</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Gets a cell at specific position. Returns an object with the following fields: </P>
                                <UL>
                                    <LI>value - cell's value.</LI>
                                    <LI>row - cell's row number.</LI>
                                    <LI>column - column's datafield. </LI>
                                </UL>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      const value = this.$refs.myGrid.getcellatposition(10,100);
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan214">getcelltext</span>
                        </td>
                        <td>
                            <span>rowBoundIndex, dataField</span>
                        </td>
                        <td>
                            <span>String</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Gets the text of a cell. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      const value = this.$refs.myGrid.getcelltext(1,'firstname');
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan215">getcelltextbyid</span>
                        </td>
                        <td>
                            <span>rowID, dataField</span>
                        </td>
                        <td>
                            <span>String</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Gets the text of a cell. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      const value = this.$refs.myGrid.getcelltextbyid(1,'firstname');
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan216">getcellvaluebyid</span>
                        </td>
                        <td>
                            <span>rowID, dataField</span>
                        </td>
                        <td>
                            <span>Object</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Gets the value of a cell. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      const value = this.$refs.myGrid.getcellvaluebyid(1,'firstname');
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan217">getcellvalue</span>
                        </td>
                        <td>
                            <span>rowBoundIndex, dataField</span>
                        </td>
                        <td>
                            <span>Object</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Gets the value of a cell. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      const value = this.$refs.myGrid.getcellvalue(1,'firstname');
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan218">isBindingCompleted</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>Boolean</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Returns whether the binding is completed and if the result is true, this means that you can invoke methods and set properties. Otherwise, if the binding is not completed and you try to set a property or invoke a method, the widget will throw an exception. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      const value = this.$refs.myGrid.isBindingCompleted();
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan219">openmenu</span>
                        </td>
                        <td>
                            <span>dataField</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Displays a column's menu. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.openmenu('firstname');
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan220">setcellvalue</span>
                        </td>
                        <td>
                            <span>rowBoundIndex, dataField, value</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets a new value to a cell. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.setcellvalue(1,'firstname','New Name');
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan221">setcellvaluebyid</span>
                        </td>
                        <td>
                            <span>rowID, dataField, value</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Sets a new value to a cell. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.setcellvaluebyid(1,'firstname','New Name');
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan222">showvalidationpopup</span>
                        </td>
                        <td>
                            <span>rowBoundIndex, dataField, validationMessage</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Displays a validation popup below a Grid cell. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.showvalidationpopup(1,'firstname','Error message');
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan223">updaterow</span>
                        </td>
                        <td>
                            <span>rowIds, data</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Updates a row or multiple rows. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.updaterow(1,{firstname: 'New Name'});
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan224">clearselection</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Clears the selection. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.clearselection();
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan225">getselectedrowindex</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>Number</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>The expected selection mode is 'singlerow', 'multiplerows' or 'multiplerowsextended'</P>
                                <P>Gets the bound index of the selected row. Returns -1, if there's no selection. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      const value = this.$refs.myGrid.getselectedrowindex();
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan226">getselectedrowindexes</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>Array</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>The expected selection mode is 'singlerow', 'multiplerows' or 'multiplerowsextended'</P>
                                <P>Gets the indexes of the selected rows. Returns an array of the selected rows. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      const value = this.$refs.myGrid.getselectedrowindexes();
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan227">getselectedcell</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>Object</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>The expected selection mode is 'singlecell', 'multiplecells' or 'multiplecellsextended'</P>
                                <P>Gets the selected cell. The returned value is an object with two fields: 'rowindex' - the row's bound index and 'datafield' - the column's datafield. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      const value = this.$refs.myGrid.getselectedcell();
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan228">getselectedcells</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>Array</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>The expected selection mode is 'singlecell', 'multiplecells' or 'multiplecellsextended'</P>
                                <P>Gets all selected cells. Returns an array of all selected cells. Each cell in the array is an object with two fields: 'rowindex' - the row's bound index and 'datafield' - the column's datafield. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      const value = this.$refs.myGrid.getselectedcells();
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan229">selectcell</span>
                        </td>
                        <td>
                            <span>rowBoundIndex, dataField</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>The expected selection mode is 'singlecell', 'multiplecells' or 'multiplecellsextended'</P>
                                <P>Selects a cell. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.selectcell(1,'firstname');
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan230">selectallrows</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>The selection mode should be set to: 'multiplerows' or 'multiplerowsextended'</P>
                                <P>Selects all Grid rows. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.selectallrows();
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan231">selectrow</span>
                        </td>
                        <td>
                            <span>rowBoundIndex</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>The expected selection mode is 'singlerow', 'multiplerows' or 'multiplerowsextended'</P>
                                <P>Selects a row. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.selectrow(1);
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan232">unselectrow</span>
                        </td>
                        <td>
                            <span>rowBoundIndex</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>The expected selection mode is 'singlerow', 'multiplerows' or 'multiplerowsextended'</P>
                                <P>Unselects a row. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.unselectrow(1);
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan233">unselectcell</span>
                        </td>
                        <td>
                            <span>rowBoundIndex, dataField</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>The expected selection mode is 'singlecell', 'multiplecells' or 'multiplecellsextended'</P>
                                <P>Unselects a cell. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.unselectcell(1,'firstname');
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan234">getcolumnaggregateddata</span>
                        </td>
                        <td>
                            <span>dataField, aggregates</span>
                        </td>
                        <td>
                            <span>String</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Gets the aggregated data of a Grid column. Returns a JSON object. Each field name is the aggregate's type('min', 'max', 'sum', etc.).</P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      const value = this.$refs.myGrid.getcolumnaggregateddata();
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan235">refreshaggregates</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Refreshes the Aggregates in the Grid's status bar.</P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.refreshaggregates();
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan236">renderaggregates</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Renders the aggregates in the Grid's status bar.</P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.renderaggregates();
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan237">exportdata</span>
                        </td>
                        <td>
                            <span>dataType, fileName, exportHeader, rows, exportHiddenColumns, serverURL, charSet</span>
                        </td>
                        <td>
                            <span>Any</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Exports all rows loaded within the Grid to Excel, XML, CSV, TSV, HTML or JSON. </P>
<PRE><CODE>var data = $("#jqxgrid").jqxGrid('exportdata', 'json');</CODE></PRE>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      const value = this.$refs.myGrid.exportdata('xls,'grid.xls');
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan238">getstate</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>Object</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Gets the Grid's state. the getstate method gets the following information: 'sort column, sort order, page number, page size, applied filters and filter row values, column widths and visibility, cells and rows selection and groups. </P>
                                <UL>
                                    <LI>width - the Grid's width.</LI>
                                    <LI>height - the Grid's height.</LI>
                                    <LI>pagenum - the Grid's page number.</LI>
                                    <LI>pagesize - the Grid's page size.</LI>
                                    <LI>pagesizeoptions - the Grid's page size options - an array of the available page sizes.</LI>
                                    <LI>sortcolumn - the Grid's sort column. The value is the column's datafield or null, if sorting is not applied.</LI>
                                    <LI>sortdirection - JSON object with two boolean fields: 'ascending' and 'descending'.</LI>
                                    <LI>filters - the applied filters. See the 'getfilterinformation' method.</LI>
                                    <LI>groups - the Grid's groups array which contains the grouped columns data fields.</LI>
                                    <LI>
                                        columns - an array of Columns. Each column in the array has the following fields:
                                        <UL>
                                            <LI>width - column's width.</LI>
                                            <LI>hidden - column's visible state.</LI>
                                            <LI>pinned - column's pinned state.</LI>
                                            <LI>groupable - column's groupable state.</LI>
                                            <LI>resizable - column's resizable state.</LI>
                                            <LI>draggable - column's draggable state.</LI>
                                            <LI>text - column's text.</LI>
                                            <LI>align - column's align.</LI>
                                            <LI>cellsalign - column's cells align. </LI>
                                        </UL>
                                    </LI>
                                </UL>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      const value = this.$refs.myGrid.getstate();
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan239">loadstate</span>
                        </td>
                        <td>
                            <span>stateobject</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Loads the Grid's state. the loadstate method loads the following information: 'sort column, sort order, page number, page size, applied filters and filter row values, column widths and visibility, cells and rows selection and groups. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      this.$refs.myGrid.loadstate();
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="documentation-option-type-click">
                            <span id="propertiesSpan240">savestate</span>
                        </td>
                        <td>
                            <span>None</span>
                        </td>
                        <td>
                            <span>Object</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style="width: 100%">
                            <div class="documentation-option-description property-content" style="display: none;">
                                <P>Saves the Grid's current state. the savestate method saves the following information: 'sort column, sort order, page number, page size, applied filters and filter row values, column widths and visibility, cells and rows selection and groups. </P>
                                <pre class="code">&lt;template&gt;
  &lt;JqxGrid ref="myGrid"
    :width="850" :source="source" :columns="columns" :autoheight="true"
  /&gt;
&lt;/template&gt;

 
&lt;script&gt;
  import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
 
  export default {
    components: {
      JqxGrid
    },
    data: function () {
      return  {
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
          [ 'Maria Anders', 'Sales Representative', 'Berlin', 'Germany' ],
          [ 'Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico' ],
          [ 'Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico' ]
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
      const value = this.$refs.myGrid.savestate();
    }
  }
&lt;/script&gt;</pre>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    export default {
        mounted: function () {
            $(".documentation-option-type-click").click(function (event) {
                $(event.target).parents('tr').next().find(".property-content").toggle();
            });
            formatAPI();
        }
    }
</script>
<style scoped>
@import '../../assets/jqx.apireference.css';
 code {
     color: black !important;
 }
</style>