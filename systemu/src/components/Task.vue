<script setup>

import { defineProps, defineEmits } from 'vue';

const props = defineProps({

    done: {
        type: Boolean,
        required: true
    },

    uid: {
        type: Number,
        required: true
    }
})

const emits = defineEmits(["update:done"])


</script>
<template>

    <input type="checkbox" :value="done" :checked="done" @change="$emit('update:done', !done)" />
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
