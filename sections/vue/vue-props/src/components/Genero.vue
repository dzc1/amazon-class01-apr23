<!-- html aca -->
<template>
  <h2>{{ generoPropNieto }}</h2>
</template>

<!-- Pongan su JS aca -->
<script setup>
defineProps({
  generoPropNieto: {
    type: String,
    required: true,
  },
});
</script>

<!-- CSS con atributo scoped aca -->
<style scoped></style>
