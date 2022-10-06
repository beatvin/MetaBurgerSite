import { createRouter,createWebHashHistory } from "vue-router";

import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import Counter from '@/components/Counter.vue';
import Notes from '@/components/Notes.vue';
import MetaBurger from '@/components/MetaBurger.vue';


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/counter', component: Counter },
    { path: '/notes', component: Notes },
    { path: '/metaburger', component: MetaBurger },
  ]

const router = createRouter({

    history: createWebHashHistory(),
    routes,     

});

export default router