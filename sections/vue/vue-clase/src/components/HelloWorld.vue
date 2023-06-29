<script setup>
import { ref, reactive } from "vue";
defineProps({
  msg: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
  },
  booleanoDiego: {
    type: Boolean,
  },
});

let msge = ref("Hola Clase");
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <!-- <h1 class="green">{{ edad }}</h1>
    <h1 class="green">{{ booleanoDiego }}</h1>
    <h1 class="green">{{ msge }}</h1> -->
    <h3>Vamos a aprender vue mediante la creacion de componentes</h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
