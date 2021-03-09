<template>
  <h1>People</h1>
  <div class="row">
    <div class="person column" :key="person.id" v-for="person in people">
      <a :href="`/person/${person.id}`">
        <h3>
          {{ person.username }}
        </h3>
        <h5>
          {{ person.name }}
        </h5>
        <h5>
          {{ person.email }}
        </h5>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      people: [],
    };
  },
  methods: {
    async getName() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      return data;
    },
    toPerson(userId) {
      this.$router.push({ name: "Person", params: { id: userId } });
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