<!-- Este tag es el tag donde ejecutamos nuestro JS. AKA nuestra logica.  -->
<!-- Script === Javascript Logica -->
<!-- Cuando vean el attributo setup dentro del elemento script, podemos deducir que podemos trabajar/instanciar js convencial como hemos aprendido en clase, es decir podemos utilizar el syntax convencional de js vainilla. 
Tambien, podemos usar las herramientas de Vue -->
<!-- setup attribute === vanilla convencional -->
<!-- Esto que ven abajo es la estructura de un proyeco de vue usando el composition API -->
<script setup>
import { ref, reactive } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import MiPrimerComponente from "./components/vue-basics/01-MiPrimerComponente.vue";
import Reactividad from "./components/vue-basics/02-UsandoReactividad.vue";
import DirectivoTexto from "./components/vue-basics/04-DirectivaTexto.vue";
import DirectivoHtml from "./components/vue-basics/05-DirectivaHtml.vue";
import DirectivoCondicionales from "./components/vue-basics/06-DirectivaCondicional.vue";
import DirectivoIteracion from "./components/vue-basics/07-DirectivoIteracion.vue";
import DirectivaTextoEjercicio from "./components/ejercicios/DirectivaTexto.vue";
import DirectivaCondicionalEjercicio from "./components/ejercicios/DirectivoCondicional.vue";
import DirectivoBindeo from "./components/vue-basics/08-DirectivoBindeo.vue";
import DirectivoFormulario from "./components/vue-basics/09-DirectivoFormulario.vue";
import SlotComp001 from "./components/vue-basics/slots/10-Slot-Comp001.vue";
import EjercicioSlot from "./components/ejercicios/EjercicioSlot.vue";

const pescado = reactive({
  img: "https://www.rockaxis.com/img/newsList/4930037.jpg",
  altText: "Una Imagen de pescado rabioso",
});

const panchos = reactive({
  titulo: "Panchos || Hot Dogs",
  img: "https://assets.epicurious.com/photos/5cfea9780fb62aae4d2bec74/1:1/w_2560%2Cc_limit/ArgentineHotDog_HERO_060619_2179.jpg",
  altText: "Una pancho bastante cheto, tirandoselas del gringo...",
  html: `
  <ul>
    <li>Salchica</li>
    <li>Pan</li>
    <li>Salsa de Tomate || Ketchup</li>
    <li>Papas Fritas</li>
    <li>Mashonesa!</li>
  </ul>
  `,
});

const lugarDeVeraneo = reactive({
  ubicacion: "Jaca, Huesca",
  img: "https://www.sensacionrural.es/blog/wp-content/uploads/2021/11/jaca-huesca-que-ver.jpg",
  altText: "Castillo de San Pedro, nunca conquistado!",
});
</script>

<!-- Este tag es el tag donde ejecutaremos nuestro HTML Y podemos referenciar nuestro js mediante este principio que se llama reactividad y tambien usaremos otro  principio que se llama interpolacion de texto -->
<!-- Template === HTML -->
<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/wu-tang-symbol.png"
      width="400"
      height="200"
    />
    <div class="wrapper">
      <HelloWorld msg="trabajando con slots" />
    </div>
  </header>

  <main>
    <!-- Aca es donde voy a referenciar mis componentes importados por parte del script para que se instancien dentro del Documento/HTML -->

    <!-- My primer Componente -->
    <!-- <MiPrimerComponente /> -->

    <!-- Aprendiendo a usar reactividad en VUE -->
    <!-- <Reactividad /> -->

    <!-- Aprendiendo a usar el directivo tipo texto -->
    <!-- <DirectivoTexto /> -->

    <!-- Aprendiendo a usar el directivo tipo html -->
    <!-- <DirectivoHtml /> -->

    <!-- Aprendiendo a usar el directivo de condicional -->
    <!-- v-if
     v-else-if
     v-else -->
    <!-- <DirectivoCondicionales /> -->

    <!-- Aprendiendo a usar el directivo tipo for - directivo de iteracion -->
    <!-- <DirectivoIteracion /> -->

    <!-- Aprendiendo a usar el directivo de bindeo - v-bind -->
    <!-- Directivo de bindeo || directivo de unificacion -->
    <!-- <DirectivoBindeo /> -->

    <!-- Aprendiendo a usar inputs con vue -->
    <!-- <DirectivoFormulario /> -->

    <!-- Aprendiendo a usa SLOTS en vue  -->
    <!-- <SlotComp001
      title="Hola chicos"
      image="https://files.worldwildlife.org/wwfcmsprod/images/Sloth_3_12_2014/story_full_width/2a8fgktz30_sloth__c__Jorge_Salas_International_Expeditions.JPG"
      description="Una breve descripcion"
    >
      <button>CLick me</button>
    </SlotComp001> -->
  </main>

  <section id="ejercicios">
    <!-- Aca vamos a colocar nuestros componentes de ejercicio -->
    <!-- <DirectivaTextoEjercicio /> -->
    <!-- <DirectivaCondicionalEjercicio /> -->
    <h2>Mi banda preferida - Facu</h2>
    <EjercicioSlot titulo="Pescadoso Rabioso">
      <img :src="pescado.img" :alt="pescado.altText" />
    </EjercicioSlot>
    <h2>Mi comida preferida - Nico</h2>
    <EjercicioSlot :titulo="panchos.titulo">
      <img :src="panchos.img" :alt="panchos.altText" />
      <div v-html="panchos.html"></div>
    </EjercicioSlot>
    <h2>Mi lugar de veraneo - Jorge</h2>
    <EjercicioSlot :titulo="lugarDeVeraneo.ubicacion">
      <img :src="lugarDeVeraneo.img" :alt="lugarDeVeraneo.altText" />
      <div :v-html="lugarDeVeraneo.googleEmbed"></div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23505.472551103892!2d-0.5656031871332332!3d42.57261541706698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5780ec767847ed%3A0x196f61f8bc9a1be2!2s22700%20Jaca%2C%20Huesca%2C%20Spain!5e0!3m2!1sen!2sse!4v1687281219071!5m2!1sen!2sse"
        width="400"
        height="300"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </EjercicioSlot>
  </section>
</template>

<!-- Este tag es el tag donde podemos ejecutar cualquier codigo de CSS -->
<!-- Stlye === CSS -->
<!-- scoped, es una attributo que se alocaliza dentro del elemento style para que los estilos de CSS solop se apliquen a este archivo en particular. -->
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

img {
  width: 50%;
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
}
</style>
