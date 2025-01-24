<script setup lang="ts">
const props = defineProps(
    ['name', 'index']
)
</script>

<template>
    <li>{{ index }}. {{ name }}</li>
</template>