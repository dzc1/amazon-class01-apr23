<!-- html aca -->
<template>
  <div class="card">
    <h2>{{ title }}</h2>

    <img :src="image" alt="" />
    <p>{{ description }}</p>
    <!-- Usando un slot, incremento el uso de un componente, porque no solo le paso informacion como si un prop por ejemplo pero usando este elemento "slot", vue reconoce que le podemos inyectar informacion -->
    <div class="slot-estilado">
      <slot></slot>
    </div>
    <!-- Ejemplo de como no estilar un slot ya que nos e reconoce en el DOM -->
    <!-- <slot class="slot-estilado"></slot> -->
    <!-- ^ Malas practicas ya que no reconoce la clase!  -->
    <SlotComp002>
      <h3>Soy un h3 dentro de un slot que vive dentro de un componente</h3>
    </SlotComp002>
  </div>
</template>

<!-- Pongan su JS aca -->
<script setup>
import SlotComp002 from "./11-SlotComp002.vue";
defineProps({
  title: String,
  image: String,
  description: String,
});
</script>

<style scoped>
img {
  width: 50%;
  display: block;
}

.slot-estilado {
  display: flex;
  justify-content: center;
}
</style>

<!-- ¿Qué es?
Los slots de Vue son una forma de crear componentes reutilizables y flexibles en Vue.js. Imagina que tienes un componente que deseas usar en diferentes lugares de tu aplicación web, pero también quieres personalizar algunas partes cada vez que lo uses. Los slots te permiten hacer precisamente eso. Proporcionan un espacio reservado dentro del componente donde puedes insertar tu propio contenido o componentes.

¿Por qué los usamos?
Usamos los slots para hacer nuestros componentes más versátiles y adaptables. Nos permiten crear componentes que pueden personalizarse fácilmente y reutilizarse en diferentes situaciones sin tener que escribir mucho código repetitivo. Los slots nos ayudan a separar la estructura de un componente de su contenido, lo que facilita la gestión y el mantenimiento de nuestro código.

Ejemplo sencillo:
Digamos que quieres crear un componente "Card" en Vue.js que muestre algún contenido como un título, una imagen y una descripción. Sin embargo, deseas poder personalizar el contenido de la tarjeta cada vez que la uses. -->
