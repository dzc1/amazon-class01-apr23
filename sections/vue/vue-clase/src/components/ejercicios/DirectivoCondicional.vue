<!-- HTML HERE -->
<template>
  <div class="ejercicio">
    <h2>Ejercicio 001</h2>
    <!-- Ejericicio Condicional 001 - Metodo Reactivo -->
    <div class="ejercicio">
      <h2>Data Reactiva - Booleanica</h2>
      <button @click="toggleEjercicioUnoReactivo">
        Cambiar valor del dato - boolean {{ ejercicioUnoReactivo.isTrue }}
      </button>
      <div>
        <h4 v-if="ejercicioUnoReactivo.isTrue">
          I'm showing up beacuse our reactive data is true!
        </h4>
        <h4 v-else>
          I'm the option anytime our reactive data cannot be read as true
        </h4>
      </div>
    </div>
    <!-- Ejericicio Condicional 001 - Metodo Ref -->
    <div class="ejercicio">
      <h2>Data Ref - Booleanica</h2>
      <button @click="toggleEjercicioUnoRef">
        Cambiar valor del dato - boolean {{ ejercicioUnoRef }}
      </button>
      <div>
        <h4 v-if="ejercicioUnoRef">
          I'm showing up beacuse our reactive data is true!
        </h4>
        <h4 v-else>
          I'm the option anytime our reactive data cannot be read as true
        </h4>
      </div>
    </div>
  </div>
  <div class="ejercicio">
    <h2>Ejercicio 002</h2>
    <p v-if="lenguaje === 'HTML'">Hoy estaremos aprendiendo {{ lenguaje }}</p>
    <p v-else-if="lenguaje === 'CSS'">
      Hoy estaremos aprendiendo {{ lenguaje }}
    </p>
    <p v-else-if="lenguaje === 'JS'">
      Hoy estaremos aprendiendo {{ lenguaje }}
    </p>
    <p v-else-if="lenguaje === 'VUE'">
      Hoy estaremos aprendiendo {{ lenguaje }}
    </p>
    <p v-else>El profe esta de fiesta, no hay clase!</p>
  </div>
  <div class="ejercicio">
    <h2>Ejercicio 003</h2>
    <!-- Podemos ver que si usamos v-show no eliminamos el elemento del dom segun su valor booleano true/false, lo que vemos es que se le inyecta un estilo con la propiedad display:none -->
    <div v-show="show">
      <h4>{{ biografia.name }}</h4>
      <div>
        <p v-if="biografia.age >= 18">Soy un adulto</p>
        <p v-else>Soy un menor!</p>
      </div>
      <div>
        <p v-if="biografia.age >= 18">Soy un adulto</p>
        <p v-else-if="biografia.age < 18">Soy un menor!</p>
      </div>
      <div>
        <p v-if="biografia.hasCodedBefore">He codificado antes</p>
        <p v-else>
          No, nunca porque soy un rockstar!
          <img
            v-bind:src="imgUrl"
            alt="Img de Jim Morrison, cantor de The Doors."
          />
        </p>
      </div>
    </div>
  </div>
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";

let imgUrl = ref("https://i.ytimg.com/vi/xx6dF8ph06c/maxresdefault.jpg");

// Ej.1: Creamos dos <h1> diferentes, uno que diga "I'm showing up beacuse our reactive data is true!" y el otro que diga "I'm the option anytime our reactive data cannot be read as true". Como vemos, los dos dependerán de una variable reactiva en vuestro script y, según si esta es true or false, enseñaréis uno u otro.

// Definimos variable con objeto + dependencia de metodo reactive
let ejercicioUnoReactivo = reactive({
  isTrue: true,
});
// Creamos funcion para apuntar a isTrue para cambiar el valor
const toggleEjercicioUnoReactivo = () =>
  (ejercicioUnoReactivo.isTrue = !ejercicioUnoReactivo.isTrue);

let ejercicioUnoRef = ref(true);
// syntax que se conoce como .value
// es decir si quiero referenciar este tipo de variable singular tengo que usar este ejemplo ejercicioUnoRef.value :)
const toggleEjercicioUnoRef = () =>
  (ejercicioUnoRef.value = !ejercicioUnoRef.value);

// Ej.2: Creamos cuatro <p> tags. Los cuatro se renderizarán condicionalmente mirando a una misma variable que llamaremos "language". Esta variable podrá tener tres valores distintos: "HTML", "CSS" o "JS". En nuestro template deberemos leer dicha variable y enseñar un <p> u otro según su valor. Cada uno de los <p> tags a su vez contendrá el texto "Today we are learing" seguido del valor de la variable que imprimiréis en pantalla usando la moustache syntax. El último <p> tag se encargará de aparecer cuando el valor de "language" no sea ninguno de los tres mencionado anteriormente, y contendrá el texto "Today there's no class!".
let lenguaje = ref("VUE");

// Ej.3***: Creamos una variable reactiva que contenga un objeto con vuestro nombre (string), vuestra edad (number) y una key hasCodedBefore (boolean) la cual será true or false dependiendo de si antes del bootcamp habíais picado código o no. Después creamos otra variable reactiva booleánica que podéis llamar show, por ejemplo. Según si show está en true or false, en vuestro template deberíais enseñar o no una pequeña biografía. Esta biografía, a su vez, constará primero de vuestro nombre como título. Después tendrá un <p> que se renderizará de manera condicional. En caso de que vuestra edad sea superior a 18 enseñaremos la frase "I am an adult! :)"; en caso contrario, enseñaremos "I'm still a minor :(". Finalmente, según si hasCodedBefore es true or false también renderizaréis "I am still a newbie to code but I'm learning fast" o "This is not my first time at the javascript and vue rodeo".
let biografia = reactive({
  name: "Jim Morrison",
  age: 27,
  hasCodedBefore: false,
});
let show = ref(true);
</script>
<!-- CSS HERE -->
<style scoped>
img {
  width: 50%;
}
</style>
