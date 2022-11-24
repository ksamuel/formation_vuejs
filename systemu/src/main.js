import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Todo from './components/Todo.vue'
import Counter from './components/Counter.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: Counter },
    { path: '/todo', component: Todo }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

let app = createApp(App)

app.use(router)

app.mount('#app')
