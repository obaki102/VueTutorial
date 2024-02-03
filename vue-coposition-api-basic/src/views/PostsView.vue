<template>
  <div class="about">
    <h1>Posts</h1>
    <ul>
      <li v-for="post  in  posts" :key="post.id">
        <RouterLink :to="`/postDetail/${post.id}`">{{ post.title }}</RouterLink>
      </li>

    </ul>
    <textarea v-autofocus />
    <button class="counter-button" @click="increaseCounter(1)">
      {{ counterData.count }}
    </button>
  </div>
</template>

<script setup>
/*
imports
*/
import { ref } from 'vue'
import { useCounter } from '@/use/useCounter'
import { vAutofocus } from '@/directives/vAutofocus';


/*
counter-button
*/

const { counterData, increaseCounter } = useCounter()

/*
posts
*/

const posts = ref([
  {
    id: 'id1',
    title: 'Post 1'
  },
  {
    id: 'id2',
    title: 'Post 2'
  },
  {
    id: 'id3',
    title: 'Post 3'
  }

])


</script>

<style scoped>
ul {
  margin-bottom: 30px;
}

.counter-button {
  font-size: 60px;
  width: 100%;
  background-color: pink;
}
</style>@/use/useCounter