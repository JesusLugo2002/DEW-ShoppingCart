<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps(['name', 'image', 'price', 'developer'])

const isSelected = ref(false)
</script>

<template>
    <li class="list-group-item">
        <div class="game-item row">
            <div class="game-cover col-1">
                <img :src="image" :alt="name + ' cover'" class="img-fluid" />
            </div>

            <div class="game-info col-9">
                <h3>{{ name }}</h3>
                <p class="text-secondary h5 w-75">Developer: {{ developer }}</p>
                <p class="h5">
                    Price: <span class="badge text-bg-success">{{ price }}€</span>
                </p>
            </div>

            <div class="game-buy-button col-2 d-flex align-items-center justify-content-center">
                <button class="btn btn-primary" v-if="!isSelected" @click="isSelected = true">Add to cart</button>
                <div class="input-group" v-else>
                    <button class="btn btn-danger col-2 d-flex justify-content-center" @click="isSelected = false"><i
                            class="bi bi-x"></i></button>
                    <input class="col form-control" type="number" name="quantity" id="quantity-input" value="1"
                        min="1" />
                    <button class="btn btn-success col-2 d-flex justify-content-center"><i
                            class="bi bi-check"></i></button>
                </div>
            </div>
        </div>
    </li>
</template>
