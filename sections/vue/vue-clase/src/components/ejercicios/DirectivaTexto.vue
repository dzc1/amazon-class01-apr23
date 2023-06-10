<!-- html aca -->
<template>
  <!-- Ejemplo de como se veria -->
  <!-- <div>
    Hola mi nombre es Diego Z, y tengo 32 años. Actualmente vivo en Barcelona,
    España. Soy nativo de Valencia, Venezuela y naci el 16 de mayo de 1991. Mi
    banda preferida es/son Red Hot Chilli Peppers pero mi ultimo concierto fue
    Kendrick Lamar i
  </div> -->
  <!-- Referencia de Componente educativo -->
  <!-- <DirectivaTexto /> -->

  <!-- Tu trabajo -->
  <div class="ejercicio">
    <h2>Ejercicio a traves de Interpolacion de texto</h2>
    <h4>
      Hola mi nombre es {{ miInfo.nombre }}, tengo {{ miInfo.edad }} años.
      Actulalmente vivo en {{ miInfo.currentCity }},
      {{ miInfo.currentCountry }} pero soy de {{ miInfo.cityOfOrigin }},
      {{ miInfo.countryOfOrigin }}. Una de mis bandas preferidas es
      {{ miInfo.favoriteBand }} y el ultimo concierto que fui fue
      {{ miInfo.ultimoConcierto }}
    </h4>
  </div>
  <div class="ejercicio">
    <h2>Ejercicio a traves de el directivo v-text</h2>
    <h4 v-text="miBiografia"></h4>
  </div>
  <div class="ejercicio">
    <h2>Ejercicio a traves de el directivo v-text + Spans</h2>
    <h4>
      Hola mi nombre es <span v-text="miInfo.nombre"></span>, tengo
      <span v-text="miInfo.edad"></span> años. Actulalmente vivo en
      <span v-text="miInfo.currentCity"></span>,
      <span v-text="miInfo.currentCountry"></span> pero soy de
      <span v-text="miInfo.cityOfOrigin"></span>,
      <span v-text="miInfo.countryOfOrigin"></span>. Una de mis bandas
      preferidas es <span v-text="miInfo.favoriteBand"></span> y el ultimo
      concierto que fui fue

      <span v-text="miInfo.ultimoConcierto"></span>
    </h4>
  </div>
</template>

<!-- Pongan su JS aca -->
<script setup>
import { ref, reactive } from "vue";
import DirectivaTexto from "../vue-basics/04-DirectivaTexto.vue";
// Creanse un objeto reactivo que contenga la siguiente informacion
// nombre
// edad
// Año de nacimiento
// Ciudad actual
// Pais Actual
// Ciudad Natal
// Pais Natal
// banda preferida
// Ultimo concierto

// Nuestro Objeto
const miInfo = reactive({
  nombre: "Diego",
  edad: 32,
  dob: "11/05/1991",
  currentCity: "Barcelona",
  currentCountry: "Spain",
  countryOfOrigin: "Venezuela",
  cityOfOrigin: "Valencia",
  favoriteBand: "The Arctic Monkeys",
  ultimoConcierto: "Kendrick Lamar",
});

// Juli Approach
let miBiografia = ref(
  `Hola mi nombre es  ${miInfo.nombre}, tengo ${miInfo.edad} años. Actulalmente vivo en ${miInfo.currentCity}, ${miInfo.currentCountry} pero soy de ${miInfo.cityOfOrigin}, ${miInfo.countryOfOrigin}. Una de mis bandas preferidas es ${miInfo.favoriteBand} y el ultimo concierto que fui fue ${miInfo.ultimoConcierto}`
);

// Objetivo
// Impriman dentro de un solo elemento tipo p todos estos valores del objeto mediante interpolacion  de texto
// Ayuda
// Recuerdate del elemento tipo linea <span>
</script>
