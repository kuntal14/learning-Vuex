<template>
  <div>
    <h1> Count : {{ count }} Done-Todo {{ DoneTodo }} </h1>
    <button @click.prevent="increment"> Increment </button>
  </div>
</template>

<script setup>

import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const count = computed(() => store.state.count)

// const increment = () => store.commit({
//   type: 'increment',
//   amount: 10
// })

const id = 1;

var DoneTodo = computed(() => store.getters.getTodoById(id))

const increment = () => store.dispatch('incrementAsync', 10)

</script>


