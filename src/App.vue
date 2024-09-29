<template>
  <div>
    <h1> Completed : {{ completed }}  </h1>
    <button @click.prevent="increment"> Increment </button>
  </div>
</template>

<script setup>

import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const completed = computed(() => store.getters.getTodoById(2))


</script>


