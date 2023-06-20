<!-- Este tag es el tag donde ejecutamos nuestro JS. AKA nuestra logica.  -->
<!-- Script === Javascript Logica -->
<!-- Cuando vean el attributo setup dentro del elemento script, podemos deducir que podemos trabajar/instanciar js convencial como hemos aprendido en clase, es decir podemos utilizar el syntax convencional de js vainilla. 
Tambien, podemos usar las herramientas de Vue -->
<!-- setup attribute === vanilla convencional -->
<!-- Esto que ven abajo es la estructura de un proyeco de vue usando el composition API -->
<script setup>
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
      <HelloWorld msg="Vamos a aprender a trabajar con inputs en VUE" />
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
    <SlotComp001
      title="Hola chicos"
      image="https://files.worldwildlife.org/wwfcmsprod/images/Sloth_3_12_2014/story_full_width/2a8fgktz30_sloth__c__Jorge_Salas_International_Expeditions.JPG"
      description="Una breve descripcion"
    >
      <button>CLick me</button>
    </SlotComp001>
    <SlotComp001
      title="Hola chicoaskdlskmfjrsdlfgrjsdgdfsjl;s"
      image="https://files.worldwildlife.org/wwfcmsprod/images/Sloth_3_12_2014/story_full_width/2a8fgktz30_sloth__c__Jorge_Salas_International_Expeditions.JPG"
      description="Una breve descripcion"
    >
      <div>
        <img
          src="https://files.worldwildlife.org/wwfcmsprod/images/Baby_Sloth_Hanging_iStock_3_12_2014/portrait_overview/4zhzw2pmf0_iStock_000016816803XLarge_mini.jpg"
          alt="imagen de una pereza"
        />
        <p>me gustan los slots</p>
      </div>
    </SlotComp001>
  </main>

  <section id="ejercicios">
    <!-- Aca vamos a colocar nuestros componentes de ejercicio -->
    <!-- <DirectivaTextoEjercicio /> -->
    <!-- <DirectivaCondicionalEjercicio /> -->
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
