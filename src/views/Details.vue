<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts" class="details">
    <h2>{{ posts.title }}</h2>
    <p class="pre">{{ posts.body }}</p>
  </div>
</template>

<script>
import getPost from "@/composables/getPost";
export default {
  props: ["id"],
  setup(props) {
    const { posts, error, load } = getPost(props.id);
    load();
    return { posts, error };
  },
};
</script>

<style>
.details {
  text-align: left;
}
</style>
