<!-- 
¿Qué es el attribute binding?
Es una técnica que permite enlazar valores de JavaScript a los atributos de un elemento del DOM de forma dinámica.

¿Para qué sirve?
Para poner cosas en el DOM desde js. Si tienes la variable let patata = "patata", podrás hacer que aparezca la palabra "patata" fácilmente en el DOM.
Si luego la variable patata pasa a almacenar la palabra "alcachofa" automáticamente se cambiará en el DOM. 
Esto no solo sirve para strings, también sirve para clases, css y cualquier otra cosa.
Para usarlo se pone v-bind: o simplemente :

Unos ejemplos

Con V-bind:
v-bind:class="[isPromoted && 'promoted', isSoldOut ? 'sold-out' : '']"

Con :
:class="[isPromoted && 'promoted', isSoldOut ? 'sold-out' : '']"

Este ejemplo adjudica una clase determinada en función a una lógica de JavaScript que está siendo llamada en el mismo HTML. 
 -->

<!-- html aca -->
<template>
  <div id="bindeando-conectandonos-a-attributes">
    <!-- Binding ID's -->
    <div id="binding-ids">
      <!-- Without binding an ID :)  -->
      <h2 id="someRandomId">Elemento h2 con un id estatico</h2>
      <!-- Con bindeo del ID - syntax largo  -->
      <h2 v-bind:id="bindeandoUnId">
        Heading - con un ID bindeado dinamicamente desde el script tag - Version
        Larga
      </h2>
      <!-- Con bindeo del ID - syntax largo  -->
      <h2 :id="bindeandoUnIdDos">
        Heading - con un ID bindeado dinamicamente desde el script tag - Version
        Corta VERSION
      </h2>
    </div>
    <!-- Bindeando Atributos + Atributos Reservados -->
    <div id="bindeo-de-atributos-reservados">
      <!-- Case 1 - Bindeamos unn valor via una variable que es reactive y le pasamos un valor booleanico por defecto! -->
      <!-- Sin vinculo con el directivo v-bind -->
      <button disabled>Click Me</button>

      <!-- Version 1 - Usando v-bind - syntax largo -->
      <button v-bind:disabled="isDisabled">
        Click Me - v-bind syntaxd largo
      </button>
      <!-- Version 2 - Usando v-bind - syntax corto -->
      <button :disabled="isDisabled" v-text="text" />
      <!-- Version 3 - Usando v-bind - syntax corto + tomando en cuenta el caso opuesto con ! -->
      <button :disabled="!isDisabled" v-text="text" />
      <!-- Version 4 - Usando v-bind - syntax corto + condicionadop con un ternario dentro del elemento mediante syntax de bigotes -->
      <button :disabled="isDisabled">
        {{ isDisabled ? "No puedes clickear ahora" : "Ok, Ya puedes clickear" }}
      </button>
    </div>
    <!-- Bindeando Clases -->
    <div id="bindeando-clases">
      <!-- Bindeando una clase reactiva -->
      <div v-bind:class="gabriel">
        <h4>Soy un elemento con una clase bindeada</h4>
      </div>
      <!-- Bindeando una clase reactiva + clase estatica -->
      <div v-bind:class="gabriel" class="gabriel-estatico">
        <h4>Soy un elemento con una clase bindeada</h4>
      </div>
      <!-- Bindeando un set de clases reactivos mediante un array  -->
      <div :class="arrayDeClases">
        <h4>
          Soy un elemento dentro de un div reactivo con un array de clases
        </h4>
      </div>
      <!-- Bindeando atributos de clase mediante el principio de condiciones -->
      <!-- Usando solo una condicion -->
      <h4 :class="isPromoted && 'peli-promovida'">Pelicula Promovida</h4>
      <h4 :class="isPromoted ? 'peli-promovida' : 'peli-no-promovida'">
        Pelicula Promovida
      </h4>
      <h4
        :class="numberConditional > 11 ? 'peli-promovida' : 'peli-no-promovida'"
      >
        HOLAAA
      </h4>
    </div>
    <!-- Bindeando Estilos -->
    <div id="bindeando-estilos">
      <h4
        :style="{
          textDecoration: 'underline',
          color: colorDeTexto,
          fontSize: letra,
        }"
      >
        Bindeando propiedades de estilo dentro del atributo de estilo :)
      </h4>
      <!-- Bindeo de Estilos mediante un objeto que vive en el script -->
      <h4 :style="objetoDeEstilos">
        Bindeando un objeto de estilos dentro del atributo de "style", que
        apunta a un objeto dentro del script :)
      </h4>
    </div>
  </div>
  <div id="ejercicio">
    <DirectivoBindEjercicio />
  </div>
</template>

<!-- Pongan su JS aca -->
<script setup>
import { ref, reactive } from "vue";
import DirectivoBindEjercicio from "../ejercicios/DirectivaBindeo.vue";

// Bindeo de id
let bindeandoUnId = ref("titulo-heading");
let bindeandoUnIdDos = ref("titulo-heading-dos");

// Bindeo de atributos reservados
let isDisabled = ref(false);
let text = ref("Click Me - v-bind syntax corto");

// Bindeo de clases
let gabriel = ref("gabriel-clase");
let arrayDeClases = reactive(["arg-uno", "arg-dos", "arg-tres"]);
// Bindeo de clases - Con Condiciones
let isPromoted = ref(false);

let numberConditional = ref(10);

// Bindeo de Estilos
let colorDeTexto = ref("#5d9b6b");
let letra = ref("14px");

let objetoDeEstilos = reactive({
  color: "red",
  fontSize: "14px",
  textDecoration: "underline",
});
</script>

<!-- CSS con atributo scoped aca -->
<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 20px;
}

/* id' binding */
#titulo-heading {
  color: red;
}

/* Class Binding */
.gabriel-clase {
  color: red;
  width: 200px;
}
.gabriel-estatico {
  text-transform: uppercase;
}

/* Class Binding - Array */
.arg-uno {
  color: blue;
}
.arg-dos {
  text-decoration: line-through;
}
.arg-tres {
  font-style: italic;
}

/* Class Binding - Usando Condiciones */
.peli-promovida {
  color: blue;
  font-style: italic;
}
.peli-no-promovida {
  color: red;
  text-decoration: line-through;
}
</style>
