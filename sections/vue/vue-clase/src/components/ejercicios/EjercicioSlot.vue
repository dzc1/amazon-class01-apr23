<template>
  <div>
    <h1 v-text="titulo"></h1>
    <slot></slot>
  </div>
</template>

<script setup>
// Quiero que se creen un componente en vue, este componene va a tener solo un h1 mediante un prop y un espacio reservadon tipo slot.
// ---
// Este componente me lon van a importar 3 veces dentro del app.
// ---
// 1er componente va atener un h1 de titulo que diga banda de rock prefereida y dentro del componente quiero que me inyecten un elemento tipo imagen con la foto de la banda
// ---
// 2do componente va atener un h1 de titulo que diga comida prefereida y dentro del componente quiero que me inyecten un elemento tipo imagen con la foto de la comida + una lista no ordenada con los ingredientes que lleva.
// ---
// 3er component va atener un h1 de titulo que diga su lugar da veraneo pereferido y dentro del componente quiero que me inyecten un elemento tipo imagen con la foto del lugar + un embeded del lugar por parte de google maps!
defineProps({
  titulo: {
    type: String,
  },
});
</script>

<style lang="scss" scoped></style>
