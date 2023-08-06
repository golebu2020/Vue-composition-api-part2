import { ref } from "vue";
const getPosts = (id) => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let data = null;
      if (id === 0) data = await fetch("http://localhost:3000/posts");
      else data = await fetch("http://localhost:3000/posts/" + id);

      if (!data.ok) {
        throw Error("no data available");
      }
      posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { posts, error, load };
};

export default getPosts;
