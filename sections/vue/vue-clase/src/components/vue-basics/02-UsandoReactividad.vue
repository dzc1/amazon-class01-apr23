<!-- html aca -->
<template>
  <!-- Intro a datos reactivos -->
  <div>
    <!-- Usando un string reactivo a traves del metodo ref() -->
    <p>{{ miIntro }}</p>
    <!-- Usando un numero reactivo a traves del metodo ref() -->
    <p>{{ myAge }}</p>
    <!-- Usando un boolean reactivo a traves del metodo ref() -->
    <p>{{ booleanValue }}</p>

    <!-- Usando un array reactivo a traves del metodo reactive() -->
    <p>{{ favoriteFoods }}</p>
    <p>{{ favoriteFoods[0] }}</p>

    <!-- Usando un Objeto reactivo a traves del metodo reactive() -->
    <p>
      Hola mi nombre es {{ miInfo.name }} y tengo {{ miInfo.age }} vivo
      actualmente en {{ miInfo.location }}
    </p>
    <p>Soy un gran fan de las siguientes comidas</p>
    <ul>
      <li>{{ miInfo.favoriteFoods[0] }}</li>
      <li>{{ miInfo.favoriteFoods[1] }}</li>
      <li>{{ miInfo.favoriteFoods[2] }}</li>
    </ul>
  </div>
  <!-- Ejemplo Creando un contador -->
  <!-- Usando Reactive -->
  <div class="counter">
    <h2>{{ counter.title }}</h2>
    <div>
      <button @click="restar">-</button>
      <p>{{ counter.count }}</p>
      <button @click="incrementar">+</button>
    </div>
  </div>
  <!-- Ejemplo Creando un contador -->
  <!-- Usando Reactive -->
  <div class="counter">
    <h2>{{ counterRefTitle }}</h2>
    <div>
      <button @click="restarRef">-</button>
      <p>{{ counterRef }}</p>
      <button @click="incrementarRef">+</button>
    </div>
  </div>
</template>

<!-- Pongan su JS aca -->
<script setup>
// Para poder trabajar con datos reactivos en vue debemos destrcuturar dos metodos super importantes de la libreari de vue
// Metodo ref
// Metodo reactive
import { ref, reactive } from "vue";

// Metodo ref()
// Es el tipo de metodo que queremos usar con datos primtivos
// la relacion de este metodo es de 1 a 1 con el tipo de dato
// Strings, numeros, booleanos, nulos, empty

// Tipo de dato - String - Reactivo - metodo ref()
let miIntro = ref(
  "Mi nombre es Diego y vamos a aprender vue! - Dependiendo de una variable reactive usando ref() method"
);

// Tipo de dato - String - Reactivo - metodo ref()
let myAge = ref(32);

// Tipo de dato - String - Reactivo - metodo ref()
let booleanValue = ref(true);

// --
// --
// --
// --

// Metodo reactive()
// este metodo es el metodo que queremo usar cuando queremos trabajar con tipo de datos no-primitiovs [Arrays o Objetos]

// Tipo de dato - Array - Reactivo - metodo reactive()
let favoriteFoods = reactive(["Tacos", "5 Guys", "Pokes"]);

// Tipo de dato - Array - Reactivo - metodo reactive()
let miInfo = reactive({
  name: "Diego Zito",
  age: 32,
  location: "Barcelona, ES",
  favoriteFoods: ["Tacos", "5 Guys", "Pokes"],
});

// --
// --
// --
// --
// Usando reactivdad --- reactive() method + funcion para ver esto ya en accion
// Vamos a hacernos un counter es decior vamos A crearnos un perqueño que nos ayuda a sumar y restar
let counter = reactive({
  count: 0,
  title: "My Vue Reactive Counter",
});

// Funcion que se en carga de sumar :)
// Suma + 1
const incrementar = () => {
  counter.count++;
  if (counter.count === 5) {
    alert("Yayy has llegado a 5");
  }
};
// Funcion que se en carga de restar :)
// Restar + 1
const restar = () => {
  counter.count--;
};

// --
// --
// --
// --
// Usando reactivdad --- ref() method + funcion para ver esto ya en accion
// Vamos a hacernos un counter es decior vamos A crearnos un perqueño que nos ayuda a sumar y restar
let counterRefTitle = ref("My Vue Ref Counter");
let counterRef = ref(0);

// Funcion que se en carga de sumar :)
// Suma + 1
const incrementarRef = () => {
  counterRef.value++;
  if (counterRef.value === 5) {
    alert("Yayy has llegado a 5");
  }
};
// Funcion que se en carga de restar :)
// Restar + 1
const restarRef = () => {
  counterRef.value--;
};
</script>

<!-- CSS con atributo scoped aca -->
<style scoped>
.counter {
  display: block;
}
.counter > div {
  display: flex;
}

.counter > div > button {
  padding: 1rem;
}
.counter > div > p {
  padding: 2rem;
}
</style>
