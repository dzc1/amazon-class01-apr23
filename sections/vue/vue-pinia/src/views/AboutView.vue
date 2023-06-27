<script setup>
import { ref, reactive } from "vue";
import { useCounterStore } from "../stores/counter";

//2da manera
const counterStore = useCounterStore();
console.log(counterStore.count);

// 3ra manera
let countStore = useCounterStore().count;
let bandStore = useCounterStore().favoriteBand;
let doubleCountStore = useCounterStore().doubleCount;
console.log(doubleCountStore);
</script>

<template>
  <div class="about">
    <h1>Diferentes Maneras de Usar data de tu tienda :)</h1>

    <!-- 1ra manera es usar un poco de concatenacion para poder acceder a mi data -->
    <p class="info-fuera-script">{{ useCounterStore().count }}</p>
    <p>{{ useCounterStore().favoriteBand }}</p>
    <button @click="useCounterStore().increment">
      Click me para subir 1 al count
    </button>

    <!-- 2da Manera de como usar la info de la tienda mediante guardamos la informacion dentro una variable -->
    <p class="info-dentro-script">{{ counterStore.count }}</p>
    <!-- 3ra Manera de como usar la info de la tienda mediante guardamos la informacion dentro una variable reactiva para poder acceder al contenido -->
    <p class="info-dentro-script">{{ countStore }}</p>
    <p class="info-dentro-script">{{ doubleCountStore }}</p>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  p {
    font-size: 3em;
  }
}

.info-dentro-script {
  background: red;
  text-align: center;
  color: white;
  margin: 2em 0;
}
.info-fuera-script {
  background: blue;
  text-align: center;
  color: white;
}
</style>
