<template>
  <h2>Ejercicio</h2>
  <form @submit.prevent="enviarFormualario">
    <!-- Input de Nombre -->
    <div>
      <label for="nombre">Nombre:</label>
      <input type="text" name="nombre" id="nombre" v-model="formValues.name" />
    </div>
    <!-- Input de Edad -->
    <div>
      <label for="edad">Edad:</label>
      <input type="number" name="edad" id="edad" v-model="formValues.age" />
    </div>
    <!-- Input de Birthday -->
    <div>
      <label for="fecha-nacimiento">Fecha de Nacimiento:</label>

      <input
        type="date"
        name="fecha-nacimiento"
        id="fecha-nacimiento"
        v-model="formValues.birthday"
      />
    </div>
    <!-- Input submit -->
    <input type="submit" value="Enviar formulario" />
  </form>
</template>

<script setup>
import { ref, reactive } from "vue";
// Ejercicios Two Way Binding

// Creamos la estructura básica de un componente de vue en la que vamos a mostrar el resultado de los ejercicios. Recordad importar el componente donde sea necesario para poder ver el avance de vuestros ejercicios.

// Ej.1: Creamos un formulario en vuestro template. El formulario debe tener un evento de submit que bloquee el default behavior del evento y llame a la función handleSubmit. Dentro del formulario debemos tener diversos inputs que nos permitan entrar la siguiente info: name, age, date of birth. Cada uno de los inputs debe estar vinculado a su propia variable reactiva.
let formValues = reactive({
  name: "",
  age: "",
  birthday: "",
});

let enviarFormualario = () => {
  alert(`
    Formulario Recibido
    name:  ${formValues.name}
    age:  ${formValues.age}
    birthday: ${formValues.birthday}
    `);
};
</script>

<style scoped>
form div {
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
}
label {
  margin: 0 2rem 0 0;
  font-size: 2.5em;
}
input {
  padding: 1rem;
  font-size: 3em;
  width: 100%;
}
input[type="submit"] {
  margin-top: 4rem;
}
</style>
