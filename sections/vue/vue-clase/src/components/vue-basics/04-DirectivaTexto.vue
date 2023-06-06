<!-- html aca -->
<template>
  <div>
    <!-- Usar interpolacion de texto -->
    <h4>Usar interpolacion de texto</h4>
    <p>{{ facusFavoriteBand }}</p>
    <hr />
    <!-- Usar v-text de texto -->
    <h4>Usando v-text directivo</h4>
    <p v-text="facusFavoriteBand"></p>
    <hr />
    <!-- Usar v-text de texto pero con una variable tipo numero -->
    <h4>Usando v-text directivo - Numero</h4>
    <p v-text="elNumeroDeDios"></p>
  </div>
</template>

<!-- Pongan su JS aca -->
<script setup>
import { ref, reactive } from "vue";
// La directiva "v-text" en Vue se utiliza para establecer el contenido de texto de un elemento HTML. Es similar al uso de la interpolación doble llave "{{ }}" en Vue, pero en lugar de insertar el texto dentro del elemento, "v-text" reemplaza completamente el contenido existente con el nuevo texto proporcionado.

let facusFavoriteBand = ref("Red Hot Chilli Peppers");

let elNumeroDeDios = ref(10);
</script>

<!-- CSS con atributo scoped aca -->
<style scoped></style>
