import {createRouter,createWebHistory,createWebHashHistory} from 'vue-router';
import LoginPage from '../Views/Login.vue';
import Dashboard from '../Views/Dashboard.vue';
const routes =[{path:"/", component: LoginPage},
    {path:"/dashboard", component: Dashboard},
];
const router = createRouter({
    routes,
    history :createWebHashHistory(),
});
export default router;