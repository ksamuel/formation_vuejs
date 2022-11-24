<script>

import { mapActions, mapStores } from 'pinia';
import { useTaskStore } from '../stores/taskStore';

export default {
    props: {

        done: {
            type: Boolean,
            required: true
        },

        uid: {
            type: Number,
            required: true
        }
    },
    emits: ["update:done"],

    methods: {
        ...mapActions(useTaskStore, ["toggleTask"])
    }

}



</script>
<template>

    <input type="checkbox" :value="done" :checked="done" @click="toggleTask(uid)" />
    <label :class="{ done: done }">
        <slot>{{ text }}</slot>
    </label>

</template>

<style scoped>
.done {
    text-decoration: line-through;
    color: grey;
}
</style>
