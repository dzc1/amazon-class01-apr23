<script setup>
import { useCounterStore } from "../stores/counter";
</script>

<template>
  <main>
    <p>{{ useCounterStore().count }}</p>
    <p>{{ useCounterStore().favoriteBand }}</p>
  </main>
</template>
