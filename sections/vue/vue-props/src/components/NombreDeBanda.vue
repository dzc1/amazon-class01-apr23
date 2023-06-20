<!-- html aca -->
<template>
  <h2>{{ nombreDeBandaPropNieto }}</h2>
</template>

<!-- Pongan su JS aca -->
<script setup>
defineProps({
  nombreDeBandaPropNieto: {
    type: String,
    required: true,
  },
});
</script>

<!-- CSS con atributo scoped aca -->
<style scoped></style>
