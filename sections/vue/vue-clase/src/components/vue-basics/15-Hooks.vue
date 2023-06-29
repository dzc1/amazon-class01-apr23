<template>
  <header class="center">
    <h1>Hook example</h1>
    <br />
    <p>What would the world be like without Captain Hook?</p>
    <br />
    <img
      class="cpt-hook"
      src="https://leonardodavincigencana.files.wordpress.com/2016/01/captain-hook.jpg"
      alt="captain hook"
    />
    <br />
  </header>

  <!-- El ejemplo empieza aquí, lo de arriba es solo para sacarte una sonrisa -->
  <div ref="el" class="center">Hola Peter</div>
  <br /><br />
  <button @click="fakeRefresh">Fake refresh</button>
  <br /><br /><br />
  <div>{{ count }}</div>
  <br />
</template>

<script setup>
import { ref, onMounted, onUpdated, onUnmounted } from "vue";
/*
    ¿Qué es un Hook?
    Es un tipo de evento que sucede siempre que la página está en un punto de su ciclo de vida. 
    
    ¿Para qué sirve?
    Te permite, como programador, hacer cosas no cuando el usuario interactúa con la página, sino cuando la propia página detecta que algo ha sucedido. 
    
    Un ejemplo
    La página acaba de cargar, por lo tanto, debes descargarte información de la base de datos en determinadas variables. 
    
    
    Como ves hay muchos life cycle methods. ¡Y aquí no están todos! Pero... ¿Para qué sirven y cómo funcionan?
    Durante el mid-term project a algunos os pasó que intentábais acceder a elementos del DOM antes de que estos se cargasen, por ejemplo.
    En otras ocasiones, sabemos que queremos que un script se ejecute antes de que un componente deje de funcionar (para guardar un estado o tener un contador de segundos de cuánto tiempo ha estado activo el componente, por ejemplo).
    Los life cycle methods sirven para este tipo de cosas.
    En composition API, es decir, cuando ponemos script setup, estamos trabajando por defecto en el setup que el el life cycle method primero que se lanza. Lo que no significa que siempre tengamos que usar el setup.
    Veamos cómo funcionan los life cycle methods con unos ejemplos sencillos.
    */
const el = ref();
const count = ref(0);

function fakeRefresh() {
  console.log("FAKE REFRESH PARA PROPOSITO EDUCATIVOS");
  count.value += 1;
}

// OnMounted Hook
onMounted(() => {
  el.value;
  console.log(el.value);
});

//UnUpdated Hook
onUpdated(() => {
  el.value.innerText = "ME robastes a wendy peter, te voy a conseguir!!!";
});

//OnUnmounted Hook
onUnmounted(() => {
  el.value.innerText = "texto cambio post destruccion de componente";
});
</script>

<style scoped>
div {
  font-size: 2em;
}
</style>
