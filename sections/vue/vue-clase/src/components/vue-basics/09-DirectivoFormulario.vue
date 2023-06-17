<template>
  <!-- Ejemplo Inicial -->
  <!-- <label for="mensaje">Mensaje:</label>
  <input type="text" name="mensaje" id="mensaje" v-model="mensaje" /> -->
  <!-- <input
    type="text"
    name="mensaje"
    id="mensaje"
    @input="
      (event) => {
        mensaje = event.target.value;
      }
    "
  /> -->

  <!-- Este div nos dara el resultado en pantalla de nuestros datos -->
  <div>
    <pre>
            {{ JSON.stringify(formValues, null, 1) }}
        </pre
    >
  </div>
  <h2>Formulario de Trabajo</h2>
  <!-- Formulario -->
  <div id="my-form">
    <!-- PROPPGAR el DIRECTIVO CON FUNCION IUNA VEZ LA HEMOS CREADO, NO ESTA CREADA -->
    <!-- <form v-on:submit=""></form> -- MANERA LARGA con relacion al v-on -->
    <form @submit.prevent="enviarInfoDeFormulario">
      <div id="nombre-de-aplicante">
        <label for="nombre">Escribe tu nombre:</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          autocomplete="off"
          v-model="formValues.formName"
        />
      </div>
      <div id="edad-de-aplicante">
        <label for="edad">Por favor pon tu edad:</label>
        <input
          type="number"
          name="edad"
          id="edad"
          placeholder="0"
          v-model="formValues.candidateAge"
        />
      </div>
      <div id="-de-aplicante">
        <label for="resumen">Por favor escribe un resumen laboral:</label>
        <textarea
          name="resumen"
          id="resumen"
          cols="30"
          rows="10"
          v-model="formValues.applicantSummary"
        ></textarea>
      </div>
      <div id="pais-de-aplicante">
        <label for="pais">Pais de nacimiento:</label>
        <select id="pais" v-model="formValues.country">
          <option selected>Elige un pais de nacimiento</option>
          <option value="españa">España</option>
          <option value="francia">Francia</option>
          <option value="portugal">Portugal</option>
        </select>
      </div>
      <div id="reubicar">
        <label
          >Este trabajo capaz requiere que te mudes a una de nuestras sedes
          europeas</label
        >
        <!-- Alemania -->
        <div class="multiple-checkboxes">
          <input
            v-model="formValues.jobRelocation"
            type="checkbox"
            value="alemania"
            name="alemania"
            id="alemania"
          />
          <label for="alemania">Alemania</label>
        </div>
        <!-- Suecia -->
        <div class="multiple-checkboxes">
          <input
            v-model="formValues.jobRelocation"
            type="checkbox"
            name="suecia"
            value="suecia"
            id="suecia"
          />
          <label for="suecia">Suecia</label>
        </div>
        <!-- Estonia -->
        <div class="multiple-checkboxes">
          <input
            v-model="formValues.jobRelocation"
            type="checkbox"
            value="estonia"
            name="estonia"
            id="estonia"
          />
          <label for="estonia">Estonia</label>
        </div>
      </div>
      <div id="trabajo-en-remoto" class="multiple-checkboxes">
        <input
          type="checkbox"
          name="trabajar-remoto"
          id="trabajar-remoto"
          v-model="formValues.remoteWork"
        />
        <label for="trabajar-remoto"
          >Estas dispuesto a trabajar 100% remoto? - ten en cuenta que te
          descontaremos todos tus viaticos/dietas</label
        >
      </div>
      <div id="skilset">
        <label>De estos lenguajes y frameworks cuales dominas? </label>
        <div class="multiple-checkboxes">
          <input
            v-model="formValues.skillSet"
            type="checkbox"
            name="html"
            id="html"
            value="html"
          /><label for="html">HTML</label>
        </div>
        <div class="multiple-checkboxes">
          <input
            v-model="formValues.skillSet"
            type="checkbox"
            name="css"
            id="css"
            value="css"
          /><label for="css">CSS</label>
        </div>
        <div class="multiple-checkboxes">
          <input
            v-model="formValues.skillSet"
            type="checkbox"
            name="javascript"
            id="javascript"
            value="javascript"
          /><label for="javascript">Javascript</label>
        </div>
        <div class="multiple-checkboxes">
          <input
            v-model="formValues.skillSet"
            type="checkbox"
            name="vue"
            id="vue"
            value="vue"
          /><label for="vue">Vue</label>
        </div>

        <div id="años-experiencia">
          <label>Cuentanos, cuantos años de experiencia tienes</label>
          <div class="multiple-checkboxes">
            <input
              v-model="formValues.experience"
              type="radio"
              id="0-3"
              value="0-3"
            />
            <label for="0-3">0-3 Años de Experiencia - Junior</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              v-model="formValues.experience"
              type="radio"
              id="3-5"
              value="3-5"
            />
            <label for="3-5">3-5 Años de Experiencia - Mid</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              v-model="formValues.experience"
              type="radio"
              id="5+"
              value="5+"
            />
            <label for="5+">5+ Años de Experiencia - Senior</label>
          </div>
          <input type="submit" value="Enviar Fomulario de Trabajo" />
        </div>
      </div>
    </form>
  </div>
  <hr />
  <FormularioEjercicio />
</template>

<script setup>
import { ref, reactive } from "vue";
import FormularioEjercicio from "../ejercicios/DirectivaFormulario.vue";

let mensaje = ref("");

// Creamos una variable que sea un objeto que contendo todas las llaves || "keys" que queremos recibir por el formulario.
// Como queremos  guardar toda esta info dentro de un solo sitio, lo guardamos dentro de un objketop mediante el metodo reactivo.
let formValues = reactive({
  formName: "",
  candidateAge: "",
  applicantSummary: "",
  country: "",
  jobRelocation: [],
  remoteWork: false,
  skillSet: [],
  experience: "",
});

// Crearemos una funcion que se encargue de enviar la info
let enviarInfoDeFormulario = () => {
  alert(`
    !! Felicitaciones por Aplicar a Wu Tang Financial - Europe Division !! 

    Te confirmamos tus respuestas: 

    - Nombre: ${formValues.formName}
    - Edad: ${formValues.candidateAge}
    - Resumen: ${formValues.applicantSummary}
    - Pais de Origen:  ${formValues.country}
    - Reubicacion: ${formValues.jobRelocation}
    - Trabajo Remoto: ${
      formValues.remoteWork
        ? "Estoy dispuesto a mudarme de pais"
        : "No estoy dispuesto a mudarme"
    }
    - Habilidades:  ${formValues.skillSet}
    - Años de experiencia: ${formValues.experience}
    `);
};
</script>

<style scoped>
pre {
  font-size: 24px;
}
div {
  display: flex;
  flex-direction: column;
}

.multiple-checkboxes {
  display: flex;
  flex-direction: row;
}

.form-class-container {
  min-width: 75%;
}

label {
  font-size: 1rem;
}

input[type="text"],
input[type="number"],
input[type="email"],
textarea,
select {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input[type="checkbox"],
input[type="radio"] {
  margin: 0 2rem 0 0;
}

#my-form div {
  padding: 1rem 0;
  /* border: 0.2px blue solid; */
}
</style>

<!-- INFO & CONTEXT -->

<!-- ¿Qué es la directiva v-model de Vue?

La directiva v-model es una característica de Vue.js que le permite vincular un valor desde su componente a un elemento de formulario o entrada. Crea una conexión bidireccional entre los datos del componente y el elemento de formulario, de modo que los cambios en ambos se reflejarán en el otro.

¿Por qué se utiliza la directiva v-model de Vue?

La directiva v-model se utiliza para simplificar la conexión de datos entre los datos del componente y los elementos de formulario, lo que facilita mantener los datos del componente y los elementos de formulario sincronizados. Esto puede reducir la cantidad de código que debe escribir, así como hacer que su componente sea más legible y mantenible.

¿Cómo se utiliza la directiva v-model en la API de composición?

En la API de composición, la directiva v-model se puede utilizar con un ref reactivo para vincular un valor desde los datos del componente a un elemento de formulario. El ref reactivo se utiliza para crear una propiedad reactiva que se puede actualizar y utilizar para almacenar el valor del elemento de formulario. Luego, puede usar la directiva v-model para vincular el ref reactivo al elemento de formulario, creando una conexión bidireccional entre los datos del componente y el elemento de formulario. -->
