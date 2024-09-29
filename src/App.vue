<template>
  <div>
    <h1> Count : {{ count }}  </h1>
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

const increment = () => store.commit('increment', 10)

</script>


