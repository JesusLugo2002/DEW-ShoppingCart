<script setup lang="ts">
const props = defineProps(['name', 'image', 'price', 'developer'])
</script>

<template>
    <li class="list-group-item">
        <div class="row">
            <div class="col-1">
                <img :src="image" :alt="name + ' cover'" class="img-fluid">
            </div>
            <div class="col-9">
                <h3>{{ name }}</h3>
                <p class="text-secondary h5 w-75">Developer: {{ developer }}</p>
                <p class="h5">Price: <span class="badge text-bg-success">{{ price }}€</span></p>
            </div>
            <div class="col-2 d-flex align-items-center justify-content-center">
                <button class="btn btn-primary">Add to cart</button>
            </div>
        </div>
    </li>
</template>
