<template>
  <div class="about">
    <h1>This is Todos page</h1>

    <div class="row">
      <div :key="todo.id" v-for="todo in todos" class="todos column">
        <h2>
          {{ todo.title }}
        </h2>
        <!-- <h5 v-if="`${todo.completed}`">Completed</h5> -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  computed: mapGetters(["allTodos"]),
  data() {
    console.log(this.$route.params.id);
    return {
      todos: [],
    };
  },
  methods: {
    ...mapActions(["fetchTodos"]),
    // async getName() {
    //   const res = await fetch(
    //     `https://jsonplaceholder.typicode.com/todos/${this.$route.params.id}`
    //   );
    //   const data = await res.json();
    //   console.log(data);
    //   return data;
    // },
  },
  created() {
    this.fetchTodos(this.$route.params.id);
    //this.todos.push(await this.getName());
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