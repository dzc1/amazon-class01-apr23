<template>
  <div>
    <h1>Barcelona Mola, excepto Cuando toca pagar impuestos</h1>
    <!-- <RouterLink to="/el-raval">El Raval</RouterLink>
    <RouterLink to="/nou-barris">Nou Barris</RouterLink> -->
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped></style>
