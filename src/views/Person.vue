<template>
  <div class="about">
    <h1>This is Person page</h1>

    <div class="row">
      <div class="person column">
        <h3>
          {{ person.username }}
        </h3>
        <h5>
          {{ person.name }}
        </h5>
        <h5>
          {{ person.email }}
        </h5>
        <h5>{{ person.address.street }},</h5>
        <h5>{{ person.address.suite }},</h5>
        <h5>{{ person.address.city }},</h5>
        <h5>
          {{ person.address.zipcode }}
        </h5>
        <h5>Phone: {{ person.phone }}</h5>
      </div>
    </div>
    <!-- 
    <div class="row">
      <div @click="toPosts()" class="column posts">
        <h3>Posts</h3>
      </div>
      <div @click="toTodos()" class="column todos">
        <h3>Todos</h3>
      </div>
    </div> -->

    <div class="row">
      <div class="column posts">
        <router-link :to="{ name: 'Posts', params: { id: person.id } }">
          <h3>Posts</h3>
        </router-link>
      </div>
      <!-- 
      <div class="column todos">
        <router-link :to="{ name: 'Todos', params: { id: person.id } }">
          <h3>Todos</h3>
        </router-link>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    console.log(this.$route.params.id);
    return {
      person: {},
    };
  },
  methods: {
    async getName() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`
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
    this.person = await this.getName();
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