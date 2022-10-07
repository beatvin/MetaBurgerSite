import { createRouter,createWebHashHistory } from "vue-router";

import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import MetaBurger from '@/components/MetaBurger.vue';


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/buy', component: MetaBurger },
  ]

const router = createRouter({

    history: createWebHashHistory(),
    routes,     

});

export default router