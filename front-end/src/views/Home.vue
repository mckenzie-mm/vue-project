<script setup>

import store from '../store.js'

const getWordNumber = (str) => (str.split(' ').length)


const data = async () => {
    fetch('http://localhost:8080/blogs') // Basic GET request
    .then(response => response.json()) // Parse response as JSON
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

data();

</script>


<template>
    <div class="Home">
        <main class="container mx-auto">
            <div class="PostItem border border-slate-700 mb-4 p-4 rounded-sm" 
                v-for="item, itemIndex in store.posts" :key="itemIndex"
                @click="$router.push(`/post/${item.id}`)"
            >
                <h1 class="text-3xl text-slate-900 font-bold mb-4" >
                    {{  item.title }} {{ item.id }}
                </h1>
                <p class="text-xl text-slate-500">{{ item.description }}</p>
                <p>{{ getWordNumber(item.description) }} words</p>
            </div>
        </main>
    </div>
</template>