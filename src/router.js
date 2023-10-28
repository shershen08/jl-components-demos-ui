import Home from './Home.vue'
import UploadDemo from './components/UploadDemo.vue'
import MenuDemo from './components/MenuDemo.vue'
import ChartDemo from './components/ChartDemo.vue'
import Stats from './components/StatsDemo.vue'
import Form from './components/FormDemo.vue'
import Table from './components/TableDemo.vue'

export const routes = [
    { path: '/', component: Home },
    { path: '/upload', component: UploadDemo },
    { path: '/menu', component: MenuDemo },
    { path: '/chart', component: ChartDemo },
    { path: '/stats', component: Stats },
    { path: '/form', component: Form },
    { path: '/table', component: Table },
  ]
