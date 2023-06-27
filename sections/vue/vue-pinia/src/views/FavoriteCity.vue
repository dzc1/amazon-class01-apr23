<template>
  <!-- Gabo pre-refactorizacion -->
  <div>
    <p>Naci en la ciudad de {{ cityStore().city }}</p>
    <p>
      Vivi un total de
      <strong>{{ cityStore().years }} años en {{ cityStore().city }}</strong>
    </p>
    <h4>
      <strong>{{ cityStore().years }}</strong>
    </h4>
    <button @click="cityStore().increment">Incrementar años + 2</button>
    <button @click="cityStore().multiply">Multiplicar años * 4</button>
  </div>
  <!-- Post refactorizacion -->
  <div>
    <p>Naci en la ciudad de {{ city.city }}</p>
    <p>
      Vivi un total de
      <strong>{{ city.years }} años en {{ city.city }}</strong>
    </p>
    <h4>
      <strong>{{ city.years }}</strong>
    </h4>
    <button @click="city.increment">Incrementar años + 2</button>
    <button @click="city.multiply">Multiplicar años * 4</button>
    <button @click="multiplyByFour">
      Multiplicar años * 4 - func dentro de componente
    </button>
  </div>
</template>

<script setup>
import { cityStore } from "../stores/city";

// me defino una variable donde guardo la tienda en general
let city = cityStore();

// definimos funcion
let multiplyByFour = () => {
  city.years *= 4;
};
</script>

<style scoped></style>
