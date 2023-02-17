import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import './assets/styles/style.css'
import App from './App.vue'

const scrollBehavior = (to, from, savedPosition) => {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth'
        }
    }
    else if (savedPosition) {
        return savedPosition
    }
    return {top: 0}
}

const router = createRouter({
    history: createWebHistory(),
    routes: [],
    scrollBehavior
})

createApp(App)
    .use(router)
    .mount('#app')
