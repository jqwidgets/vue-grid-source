import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Demos from './components/Demos.vue'
import Docs from './components/Docs.vue'
import PageNotFound from './components/PageNotFound.vue'

import DefaultFunctionality from './components/Demos/DefaultFunctionality.vue'
import DataEditing from './components/Demos/DataEditing.vue'
import DataExport from './components/Demos/DataExport.vue'
import RefreshData from './components/Demos/RefreshData.vue'
import RowDetails from './components/Demos/RowDetails.vue'
import NestedGrids from './components/Demos/NestedGrids.vue'
import VirtualScrolling from './components/Demos/VirtualScrolling.vue'
import VirtualPaging from './components/Demos/VirtualPaging.vue'

import GettingStarted from './components/Docs/GettingStarted.vue'
import Fundamentals from './components/Docs/Fundamentals.vue'
import DataBindingDocs from './components/Docs/DataBindingDocs.vue'
import Sorting from './components/Docs/Sorting.vue'
import Filtering from './components/Docs/Filtering.vue'
import Paging from './components/Docs/Paging.vue'
import Grouping from './components/Docs/Grouping.vue'
import Editing from './components/Docs/Editing.vue'
import ApiReference from './components/Docs/ApiReference.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/demos',
            component: Demos,
            children: [
                {
                    path: '',
                    component: DefaultFunctionality,
                    redirect: 'default-functionality'
                },
                {
                    path: 'default-functionality',
                    component: DefaultFunctionality
                },
                {
                    path: 'data-editing',
                    component: DataEditing
                },
                { 
                    path: 'data-export',
                    component: DataExport
                },
                {
                    path: 'refresh-data',
                    component: RefreshData
                },
                {
                    path: 'row-details',
                    component: RowDetails
                },
                {
                    path: 'nested-grids',
                    component: NestedGrids
                },
                {
                    path: 'virtual-scrolling',
                    component: VirtualScrolling
                },
                {
                    path: 'virtual-paging',
                    component: VirtualPaging
                }
            ]
        },
        {
            path: '/docs',
            component: Docs,
            children: [
                {
                    path: '',
                    component: GettingStarted,
                    redirect: 'getting-started'
                },
                {
                    path: 'getting-started',
                    component: GettingStarted
                },
                {
                    path: 'fundamentals',
                    component: Fundamentals
                },
                {
                    path: 'data-binding',
                    component: DataBindingDocs
                },
                {
                    path: 'sorting',
                    component: Sorting
                },
                {
                    path: 'filtering',
                    component: Filtering
                },
                {
                    path: 'paging',
                    component: Paging
                },
                {
                    path: 'grouping',
                    component: Grouping
                },
                {
                    path: 'editing',
                    component: Editing
                },
                {
                    path: 'api-reference',
                    component: ApiReference
                }
            ]
        },
        { path: "*", component: PageNotFound }
    ]
})
