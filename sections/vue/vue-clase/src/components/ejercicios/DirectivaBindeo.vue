<!-- // Ejercicios Attribute Binding

// Creamos la estructura básica de un componente de vue en la que vamos a mostrar el resultado de los ejercicios. Recordad importar el componente donde sea necesario para poder ver el avance de vuestros ejercicios.

// Ej.1: Creamos un <h1> que tendrá un id bindeado. Dicho id tiene que tomar como referencia una variable que habréis creado en vuestro <script setup>. Apuntando al id en cuestión desde el <style> tag le daréis un poco de estilo (color, underline... lo que queráis).

// Ej.2: Creamos un <h2> con un binding de clase. Este binding debe asignar una clase u otra según una variable booleánica. Si la variable es verdadera el h2 debería verse de color verde. En caso contrario, NO deberíamos ver el h2 en el render.

// Ej.3: Cramos un <h3> con un binding de estilo. Este binding debe leer un array de variables que tendréis en vuestro <script setup>. Cada variable debería ser una variable reactiva con un valor de objeto que contenga diferentes estilos de CSS (los que queráis).

// Ej.4: Creamos un <h4> con un binding de clase que contendrá un array. El primer elemento del array leerá una variable booleánica y solo si esta es true aplicará una clase 'red' que cambie el color a rojo. El segundo elemento del array leerá otra variable booleánica y, según si es verdadera o falsa, aisgnará un border al h4 o no. -->

<!-- html aca -->
<template>
  <h1>Ejercicio</h1>
  <!-- Ej 001 -->
  <h1 :id="emilio">Ejericio Uno</h1>
  <!-- Ej 002 -->
  <h2 :class="facuBoolean ? 'es-verdadero' : 'es-falso'">
    Ejericio dos - Condicional Ternario
  </h2>
  <!-- Ej 003 -->
  <h2 :style="[objetoUno, objetoDos]">
    Ejericio tres - Bindeo "Style" atributo + varios arrays
  </h2>
  <!-- Ej 004 -->
  <h4 :class="[booleanoUno && 'clase-roja', booleanoDos && 'clase-borde']">
    Dependencia de valores booleanicos :)
  </h4>
</template>

<!-- Pongan su JS aca -->
<script setup>
import { ref, reactive } from "vue";
// Ej.1: Creamos un <h1> que tendrá un id bindeado. Dicho id tiene que tomar como referencia una variable que habréis creado en vuestro <script setup>. Apuntando al id en cuestión desde el <style> tag le daréis un poco de estilo (color, underline... lo que queráis).
let emilio = ref("bind");

// Ej.2: Creamos un <h2> con un binding de clase. Este binding debe asignar una clase u otra según una variable booleánica. Si la variable es verdadera el h2 debería verse de color verde. En caso contrario, NO deberíamos ver el h2 en el render.
let facuBoolean = ref(false);

// Ej.3: Cramos un <h3> con un binding de estilo. Este binding debe leer un array de variables que tendréis en vuestro <script setup>. Cada variable debería ser una variable reactiva con un valor de objeto que contenga diferentes estilos de CSS (los que queráis).
let objetoUno = reactive({
  color: "orange",
  fontSize: "32px",
  textDecoration: "underline",
});
let objetoDos = reactive({
  padding: "8px",
  background: "green",
});

// Ej.4: Creamos un <h4> con un binding de clase que contendrá un array. El primer elemento del array leerá una variable booleánica y solo si esta es true aplicará una clase 'red' que cambie el color a rojo. El segundo elemento del array leerá otra variable booleánica y, según si es verdadera o falsa, aisgnará un border al h4 o no. -->

let booleanoUno = ref(true);
let booleanoDos = ref(false);
</script>

<!-- CSS con atributo scoped aca -->
<style scoped>
/* Ej 001 */
#bind {
  color: blue;
  text-decoration: underline;
}

/* Ej 002 */
.es-verdadero {
  color: green;
}
.es-falso {
  visibility: hidden;
  /* display: none; */
  /* estas dos propiedades hacen lo mismo */
}

/* Ej 004 */
.clase-roja {
  color: red;
}
.clase-borde {
  border: 1px solid red;
}
</style>
