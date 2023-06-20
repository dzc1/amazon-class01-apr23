<!-- html aca -->
<template>
  <h2>{{ cancionPropNieto }}</h2>
</template>

<!-- Pongan su JS aca -->
<script setup>
defineProps({
  cancionPropNieto: {
    type: String,
    required: true,
    default: "Una Cancion particular de una banda",
  },
});
</script>

<!-- CSS con atributo scoped aca -->
<style scoped></style>
