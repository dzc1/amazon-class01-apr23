<!-- html aca -->
<template>
  <img :src="imagenDeBandaPropNieto" :alt="textoAlternativoImagenPropNieto" />
</template>

<!-- Pongan su JS aca -->
<script setup>
defineProps({
  imagenDeBandaPropNieto: {
    type: String,
    required: true,
  },
  textoAlternativoImagenPropNieto: {
    type: String,
    required: true,
  },
});
</script>

<!-- CSS con atributo scoped aca -->
<style scoped>
img {
  width: 20%;
}
</style>
