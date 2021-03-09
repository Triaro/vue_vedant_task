<template>
  <div class="about">
    <h1>This is Posts page</h1>

    <div class="row">
      <div
        :key="people[person].id"
        :v-for="person in people"
        class="person column"
      >
        <h2>
          {{ people[person].title }}
        </h2>
        <h5>
          {{ people[person].body }}
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
      console.log(data);
      return data;
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