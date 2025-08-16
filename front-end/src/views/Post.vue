<script setup>
import { useRoute } from 'vue-router'
import store from '../store'
import fetchWrapper from '@/functions/fetch-wrapper.js';
import { reactive } from 'vue';

const route = useRoute()

let post = reactive({}); 

const fetchPost = async (id) => {

    const found = store.posts.find(x => x.id === parseInt(route.params.id))
    if (found) {
        Object.assign(post, found)
        return;
    }
    const { data } = await fetchWrapper(`http://localhost:8080/blogs/${id}`);

    // requires object.assign and reactive for vue to trigger
    Object.assign(post, data) 

    // update store with post
    store.posts = [...store.posts, post];
}

fetchPost(route.params.id);

</script>



<template>
    <div v-if="!post">
        No post found.
    </div>
    <div v-else class="Post">
        <h1 class="text-slate-900 text-3xl font-bold mb-4">{{ post.title }}</h1>
        <p class="text-md text-slate-300">{{ post.date }}</p>
        <p class="text-xl text-slate-500">{{ post.description }}</p>
    </div>
</template>