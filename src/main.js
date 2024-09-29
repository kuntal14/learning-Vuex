import { createApp } from 'vue'
import App from './App.vue'

import { createStore } from 'vuex'

const app = createApp(App)

//creating a new store instance.
const store = createStore({
    state(){
        return{
            count : 0,
            todos: [
                { id: 1, text: '...', done: true },
                { id: 2, text: '...', done: true }
              ]
        }
    },
    mutations: {
        increment (state){
            state.count++;
        }
    },
    getters: {
        doneTodos(state){
            return state.todos.filter(todo => todo.done)
        },
        getTodoById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id)
          }

    }
})

app.use(store);

app.mount('#app')
