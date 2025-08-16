<script setup>

import fetchWrapper from '@/functions/fetch-wrapper.js';
import store from '../store.js'

const getWordNumber = (str) => (str.split(' ').length)


const fetchPosts = async () => {

    const { data: posts } = await fetchWrapper('http://localhost:8080/blogs');

    store.posts = posts;
}

fetchPosts();

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