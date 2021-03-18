import axios from 'axios';
import router from '@/router'
const state={
    todos:[]
}

const getters = {
    allTodos: (state)=> state.todos
}

const actions = {
    async fetchTodos({commit}, id){
        const response= await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        commit('setTodos', response.data);
    }
    
}

const mutations = {
    setTodos: (state, todos) => (state.todos = todos)
}

export default{
    state,
    actions,
    getters,
    mutations
}