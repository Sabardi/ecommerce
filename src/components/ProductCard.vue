<template>
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div v-for="(product, index) in products" :key="index" class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a class="block relative h-48 rounded overflow-hidden">
            <img :alt="product.name" class="object-cover object-center w-full h-full block" :src="product.image" />
          </a>
          <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{{ product.category }}</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">{{ product.name }}</h2>
            <p class="mt-1">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  // Mendefinisikan props untuk komponen
  const props = defineProps({
    products: {
      type: Array,
      required: true,
      default: () => [],
    },
  });
  </script>
  
  