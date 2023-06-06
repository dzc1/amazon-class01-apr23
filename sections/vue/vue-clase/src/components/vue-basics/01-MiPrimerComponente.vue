<!-- Pongan su JS aca -->
<script setup>
//Interpolacion de texto
// AKA - Also known as "El Syntax De bigotes"

// Tipo de dato - String
let miIntro =
  "Mi nombre es Diego y vamos a aprender vue! - Dependiendo de una variable";
// Tipo de dato - Numero
let myAge = 32;
// Tipo de dato - Array
let favoriteFoods = ["Tacos", "5 Guys", "Pokes"];
// Tipo de dato - Objeto
let favoriteFoodObject = {
  europe: "Paella",
  latinAmerica: "Arepas",
  asia: "Sushi",
};

// ESTOS TIPOS DE DE DATOS NO SON REACTIVOS :(
</script>

<!-- html aca -->
<template>
  <div>
    <!-- Aca estamos pasando a pelo el contenido dentro de la p -->
    <p>Mi nombre es Diego y vamos a aprender vue!</p>
    <!-- Aca estamos pasando el contenido dentro de la p mediante interpolacion de texto usando el principio de bigotes -->
    <p>{{ miIntro }}</p>
    <p>{{ myAge }}</p>
    <p>{{ favoriteFoods }}</p>
    <p>{{ favoriteFoods[0] }}</p>
    <p>{{ favoriteFoodObject }}</p>
    <p>{{ favoriteFoodObject.europe }}</p>
    <p>{{ 2 * 2 }}</p>
  </div>
</template>

<!-- CSS con atributo scoped aca -->
<style scoped></style>
