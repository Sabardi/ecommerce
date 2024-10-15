<!-- src/views/Home.vue -->
<template>
    <div>
        <Header />
        <section class="text-gray-600 body-font">
            <ProductCard :products="productData" />
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Header from '../components/Header.vue';
import ProductCard from '../components/ProductCard.vue';

// Data produk
const productData = ref([]);

const fetchProducts = async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        productData.value = response.data;
    } catch (error) {
        console.error('Gagal mengambil data produk:', error);
    }
};

// Mengambil data produk saat komponen di-mount
onMounted(() => {
    fetchProducts();
});
</script>
