
<template>
  <div class="post-detail">
    <h1>This is a post detail page</h1>
    <p> Id : {{ $route.params.id }}</p>
    <div>
      <button @click="showPostId">Show Post ID</button>
    </div>
    <div>
      <button @click="goHome">Go home</button>
    </div>
    <div>
      <button @click="goToFirstPost">Go to first post</button>
    </div>
    <p>
      <RouterLink to="/posts"> &lt; Back </RouterLink>
    </p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
const showPostId = () => {
  alert(`The ID of this post is: ${route.params.id}`)
}

const goHome = () => {
  router.push({ name: 'home' })
}
const goToFirstPost = () => {
  router.push({
    name: 'postDetail',
    params: {
      id: 'id1'
    }
  })
}

</script>