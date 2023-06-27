<script setup>
import { useCounterStore } from "../stores/counter";
import { cityStore } from "../stores/city";
</script>

<template>
  <main>
    <p>{{ useCounterStore().count }}</p>
    <p>{{ useCounterStore().favoriteBand }}</p>
    <p>{{ cityStore().years }}</p>
  </main>
</template>
