<!-- html aca -->
<template>
  <h2>{{ infoCancionPropNieto }}</h2>
</template>

<!-- Pongan su JS aca -->
<script setup>
defineProps({
  infoCancionPropNieto: {
    type: String,
    required: true,
  },
});
</script>

<!-- CSS con atributo scoped aca -->
<style scoped></style>
