import { createApp } from 'vue'
import App from './App.vue'

import { createStore } from 'vuex'

const app = createApp(App)

//creating a new store instance.
const store = createStore({
    state(){
        return{
            count : 3,
            todos: [
                { id: 1, text: '...', done: true },
                { id: 2, text: '...', done: true }
              ]
        }
    },
    mutations: {
        increment (state, n=2){
            state.count+=n;
        }
    },
    getters: {
        doneTodos(state){
            return state.todos.filter(todo => todo.done)
        },
        getTodoById : (state) => id => {
            return state.todos.find((todo) => todo.id === id)
        },
    },
    actions: {
        async incrementAsync({commit}, amount){
            await this.dispatch('secTimeout');
            commit('increment', amount)
        },
        secTimeout({commit}){
            setTimeout(() => {
                console.log('starting timer')
                commit('increment')
            }, 1000)
        }
    }
})

app.use(store);

app.mount('#app')
