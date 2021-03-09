<template>
  <div class="about">
    <h1>This is Posts page</h1>

    <div class="row">
      <div :key="person.id" :v-for="person in people" class="person column">
        <h2>
          {{ person.title }}
        </h2>
        <h5>
          {{ person.body }}
        </h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    console.log(this.$route.params.id);
    return {
      people: [],
    };
  },
  methods: {
    async getName() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
      );
      const data = await res.json();
      return data;
    },
    toPosts() {
      this.$router.push({
        name: "Posts",
        params: { id: this.$route.params.id },
      });
    },
    toTodos() {
      this.$router.push({
        name: "Todos",
        params: { id: this.$route.params.id },
      });
    },
  },
  async created() {
    this.people = await this.getName();
  },
};
</script>


<style scoped>
.column {
  flex: 30%;
  margin: 20px;
}
.posts {
  background: salmon;
  border-radius: 25px;
  padding: 20px;
}
.todos {
  background: springgreen;
  border-radius: 25px;
  padding: 20px;
}
.row :hover {
  background: rgb(126, 171, 255);
  border-radius: 25px;
}
.person {
  background: rgb(0, 52, 148);
  border-radius: 25px;
  padding: 20px;
}
.person h3 {
  color: rgb(241, 0, 0);
}
.person h5 {
  color: rgb(255, 255, 255);
}
h1 {
  color: aliceblue;
}
</style>