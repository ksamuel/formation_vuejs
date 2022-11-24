<script setup>

import Task from "./Task.vue"
import { ref, computed } from 'vue'

const tasks = ref([
    { text: "Acheter du lait", done: false, uid: -1 },
    { text: "Faire la lessive", done: false, uid: -2 },
])
const newTask = ref("")
const filter = ref("")
const lastId = ref(0)

function addTask() {
    if (newTask) {
        lastId.value++
        tasks.value.push({
            text: newTask.value,
            done: false,
            uid: lastId.value
        })
        newTask.value = ""
    }
}

const filteredTasks = computed(() => {
    return tasks.value.filter(task => task.text.includes(filter))
})

</script>
<template>
    <form action="" @submit.prevent="addTask()">
        <p>
            <input type="text" v-model="newTask">
            <button>Add</button>
        </p>
    </form>
    <ul>
        <li v-for="task in tasks">
            <Task :key="task.uid" v-model:done="task.done" :uid="task.uid">
                <template #default="espace_memoire_du_slot">
                    A faire: {{ task.text }}
                </template>
            </Task>
        </li>
    </ul>
    <p>
        Filter: <input type="text" v-model="filter">
    </p>
</template>

<style scoped>

</style>
