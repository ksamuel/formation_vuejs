<script setup>

import Task from "./Task.vue"
import { ref, computed } from 'vue'
import { useTaskStore } from "../stores/taskStore";

const store = useTaskStore()

const newTask = ref("")
const filter = ref("")




</script>
<template>
    <form action="" @submit.prevent="store.addTask(newTask)">
        <p>
            <input type="text" v-model="newTask">
            <button>Add</button>
        </p>
    </form>
    <ul>
        <li v-for="task in store.tasks">
            <Task :key="task.uid" :uid="task.uid" :done="task.done">
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
