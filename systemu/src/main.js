import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Todo from './components/Todo.vue'
import Counter from './components/Counter.vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [

    { path: '/count/:start(\\d+)', component: Counter, name: "counter-with-conf" },
    { path: '/todo', component: Todo },
    { path: '/', component: Counter, name: "counter" },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})



let app = createApp(App)

const pinia = createPinia()

app.use(router)
app.use(pinia)

app.mount('#app')
