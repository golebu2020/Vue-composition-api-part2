<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Home",
  setup() {
    const posts = ref([
      { title: "welcome to the blog", body: "Lorem ipsum", id: 1 },
      { title: "welcome to the blog", body: "Lorem ipsum", id: 1 },
    ]);
    return { posts };
  },
};
</script>
