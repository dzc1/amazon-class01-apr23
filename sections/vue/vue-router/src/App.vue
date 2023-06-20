<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, reactive } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

let rutaDiego = ref("/suecia");
</script>

<template>
  <header>
    <nav>
      <!-- Cuando usamos el aTag dentro de vue en esencia formzamos un recargo/reloAd de la pagina o app, si el app contiene mucha informacfion del backend, fijense que cada ves que ustedes le den click a un elemento tipo A dentro de vue, van a hacer llamadas continuas al backend y esto en produccion || mundo real equivale a dinero -->
      <a href="/about">About - Usando un elemento normal de anclaje</a>
      <!-- Usando el router link, como ven no hay recarga de pagina, porque se usa el router y este metodo que se parsea como elementon de HTML para poder routear correctamente -->
      <!-- Este elemento depende de un atributo que se llama "to", que quede claro que yo me puedo bindear a este atributo :) -->
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink :to="rutaDiego">Suecia</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
