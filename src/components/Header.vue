<!-- src/components/Header.vue -->
<template>
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <router-link to="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="https://th.bing.com/th?id=OIP.ydrnNYRV5C_jzabMMMICFgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            width="100" class="rounded-full" alt="">
          <span class="ml-3 text-xl">Everyouwant</span>
        </router-link>
        <!-- Panggil komponen Nav di sini -->
        <Nav />
        <button
          class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Sign Up
        </button>
      </div>
    </header>
  </template>
  
  <script setup>
  import Nav from './Nav.vue'
  </script>
  