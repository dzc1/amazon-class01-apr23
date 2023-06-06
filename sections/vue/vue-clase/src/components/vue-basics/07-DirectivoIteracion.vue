<!-- html aca -->
<template>
  <div id="arrays">
    <div id="simple-v-directive">
      <!-- ejemplo 001 -  usando el paramtero individual que nos creamos noostors "worldCupTeams" como key para iterar correctamente dentro de la lista  -->
      <!-- En este caso:   -->
      <!-- 1. "team" === una palabra descriptiva que nosotros nos creamos para basicamente segmentar cada iteracion individual del array/lista/objeto -->
      <!-- 2. "in" === palabra reservada para poder accionar el iterador del directivo v-for -->
      <!-- 3. "worldCupTeams" === variable que contiene el array de equipos de futbol -->
      <!-- 4. "{{ team }}" ===  el uso de una expression {{  }} que dentro contiene el valor indivudal de cada equipo de la lista  -->
      <h4>Equipos de Futbol - Ej001</h4>
      <ul v-for="equipo in worldCupTeams">
        <li>{{ equipo }}</li>
      </ul>
    </div>
    <hr />
    <div id="v-directive-usando-todos-los-attributos-correctos">
      <h4>Equipos de Futbol Americano - Ej002</h4>
      <ul v-for="(equipoFutbolAmericano, index) in nflTeams" v-bind:key="index">
        <li>{{ index }} - {{ equipoFutbolAmericano }}</li>
      </ul>
    </div>
  </div>
  <div id="objetos">
    <div id="iterando-objeto-de-comida">
      <h2>Mis comidas preferidas</h2>
      <ul v-for="(comida, index) in foodTypes" v-bind:key="index">
        <li>
          <h5>{{ comida.name }}</h5>
          <p>
            {{ comida.countryOrigin }} - <span>{{ comida.rating }}</span>
          </p>
        </li>
      </ul>
    </div>
    <div id="iterando-array-de-objeto-anidado-de-actores">
      <h2>Actores y sus pelis</h2>
      <div v-for="(actor, index) in actors" v-bind:key="index">
        <h5 v-text="actor.name"></h5>
        <h6>Peliculas</h6>
        <ul v-for="(pelicula, index) in actor.movies" v-bind:key="index">
          <li>{{ index }} - {{ pelicula }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<!-- Pongan su JS aca -->
<script setup>
import { ref, reactive } from "vue";

// ARRAYS
/// ----
/// ----
/// ----
/// ----
/// ----
/// ----
/// ----

const worldCupTeams = reactive([
  "Argentina",
  "Francia",
  "España",
  "Japon",
  "Alemania",
]);

const nflTeams = reactive([
  "Miami Dolphins",
  "New England Patrios",
  "New York Jets",
  "San Francisco 49'ers",
  "Green Bay Packers",
]);

/// ARRAY DE OBJETOS
/// ----
/// ----
/// ----
/// ----
/// ----
/// ----
/// ----
// Iterating array of objects
const foodTypes = reactive([
  { name: "Pizza", countryOrigin: "Italia", rating: "5/5" },
  { name: "Sushi", countryOrigin: "Japan", rating: "5/5" },
  { name: "Fajitas", countryOrigin: "Mexico", rating: "15/5" },
  { name: "Paella", countryOrigin: "Spain", rating: "5/5" },
]);

// Iterating an array of an array within an object
const actors = reactive([
  {
    name: "Robert De Niro",
    movies: ["The Godfather II", "Casino", "Goodfellas"],
  },
  {
    name: "Daniel Day Lewis",
    movies: [
      "There will be blood",
      "The Last of the Mohicans",
      "Gangs of New York",
    ],
  },
  {
    name: "Merryl Streep",
    movies: ["The Devil wears prada", "Kramer vs Kramer", "Sophies Choice"],
  },
]);
</script>

<!-- CSS con atributo scoped aca -->
<style scoped></style>

<!-- DIRECTIVOS DE ITERACION

¿Que es un elemento iterativo?
Un sistema que tiene vue para recorrer arrays/objetos! 

¿Para qué sirve?
Para repetir varias veces una operación similar. Es una versión adaptada a VUE del bucle for. 

Un ejemplo
Tengo un array con mi nombre y el de mis hermanos. Quiero que para cada nombre haya un h2 que indique el nombre, un p que indique la biografía y otro p indicando 
la fecha de nacimiento. Todo extraido de una base de datos.  -->

<!-- V-FOR DIRECTIVE -->

<!-- SYNTAX ESPECIAL que se llama v-for, este directive tal cual como funciona
    este bucle dentro de vanillaJS, acepta un paramtero que viene siendo la
    lista o la data que queremos iterar, el otro parametro que podemos pasarle
    viene siendo un parametro que nosotros mismos nombramos :), aparte de estos
    2 paraemtros podemos pasarle un tercer parametro que es el key el key es un
    elemento unico dentro de cada iteracion de la lista para asegurarnos de no
    tener ningun tipo de inconsistencia dentro de la data :) -->

<!-- ATTRIBUTE "key" dentro del v-for directivo -->

<!-- Cuando Vue está actualizando una lista de elementos renderizados con v-for, por defecto usa una estrategia de "parche in-place". Si el orden de los elementos de datos ha cambiado, en lugar de mover los elementos DOM para que coincidan con el orden de los elementos, Vue parcheará cada elemento in-place y se asegurará de que refleje lo que debería ser renderizado en ese índice en particular.

Este modo predeterminado es eficiente, pero solo es adecuado cuando la salida de renderizado de su lista no depende del estado de componente hijo o del estado temporal DOM (por ejemplo, valores de entrada de formularios).

Para darle una pista a Vue para que pueda realizar un seguimiento de la identidad de cada nodo y, por lo tanto, reutilizar y reordenar elementos existentes, debe proporcionar un atributo de clave única para cada elemento:" -->
