<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import getPosts from "../composables/getPosts";

import PostList from "@/components/PostList.vue";
export default {
  name: "Home",
  components: {
    PostList,
  },
  setup() {
    const { posts, error, load } = getPosts(0);
    load();
    return { posts, error };
  },
};
</script>
<style>
.home {
  text-align: left;
}
</style>
