<!-- html aca -->
<template>
  <div class="events-buttons">
    <!-- Aca estamos usando el directivo completo "v-on" + el evento tipo "click" para que el usuario pueda sumarle +1 a la variable -->
    <!-- EN LINEA -->
    <button v-on:click="count++">
      Sumar +1 - usando el directivo completo + dependiendo de uin evento tipo
      en linea
    </button>
    <p>La cuenta actual es de : {{ count }}</p>
  </div>
  <!-- Aca estamos usando el directivo completo "v-on" + el evento tipo "click" para que el usuario pueda sumarle +1 a la variable -->
  <!-- DEPENDER DE UNA FUNCION -->
  <div class="events-buttons">
    <button v-on:click="restarMenosUno">
      Restar -1 - usando el directivo completo + dependiendo de una funcion
    </button>
    <p>La cuenta actual es de : {{ count }}</p>
  </div>
  <!-- Aca estamos usando el directivo "v-on" mediante el shorthand + el evento tipo "click" para que el usuario pueda restarle -1 a la variable -->
  <!-- DEPENDER DE UNA FUNCION -->
  <div class="events-buttons">
    <button @click="restarMenosUno">
      Restar -1 - usando el directivo shorthand + dependiendo de una funcion
    </button>
    <p>La cuenta actual es de : {{ count }}</p>
  </div>
  <!-- Aca estamos usando el directivo "v-on" mediante el shorthand + el evento tipo "dblclick" para que el usuario pueda multiplar x2 a la variable -->
  <!-- DEPENDER DE UNA FUNCION -->
  <div class="events-buttons">
    <button @dblclick="dblSuma">
      Multiplicar x2 - usando el directivo shorthand + dependiendo de una
      funcion - dblclick
    </button>
    <p>La cuenta actual es de : {{ count }}</p>
  </div>
  <!-- Aca estamos usando el directivo "v-on" mediante el shorthand + el evento tipo "mouseEnter" para que el usuario pueda sumar +1 a la variable -->
  <!-- DEPENDER DE UNA FUNCION -->
  <div class="events-buttons">
    <button @mouseenter="mouseEnterSuma">
      Sumar +1 - usando el directivo shorthand + dependiendo de una funcion -
      mouseenter
    </button>
    <p>La cuenta actual es de : {{ count }}</p>
  </div>
  <!-- Aca estamos usando el directivo "v-on" mediante el shorthand + el evento tipo "mouseEnter" para que el usuario pueda sumar +1 a la variable -->
  <!-- DEPENDER DE UNA FUNCION -->
  <div class="events-buttons">
    <button @mouseleave="mouseLeaveSuma">
      Sumar +1 - usando el directivo shorthand + dependiendo de una funcion -
      mousLeave
    </button>
    <p>La cuenta actual es de : {{ count }}</p>
  </div>
  <div class="events-inputs">
    <label for="inputOne">@click evento dentro del input</label
    ><input
      @click="clickInputSuma"
      type="text"
      name="inputOne"
      id="inputOne"
      :value="count"
    />
  </div>
  <div class="events-inputs">
    <label for="inputOne">@click evento dentro del input</label
    ><input
      @input="clickInputSuma"
      type="text"
      name="inputOne"
      id="inputOne"
      :value="count"
    />
  </div>
  <div class="events-inputs">
    <label for="inputOne">@click evento dentro del input</label
    ><input
      @keydown="clickInputSuma"
      type="text"
      name="inputOne"
      id="inputOne"
      :value="count"
    />
  </div>
  <div class="events-inputs">
    <label for="inputOne">@click evento dentro del input</label
    ><input
      @keyup="clickInputSuma"
      type="text"
      name="inputOne"
      id="inputOne"
      :value="count"
    />
  </div>
  <div class="event-inputs">
    <label for="inputFive">Using @keypress event on an input</label>
    <input
      type="text"
      id="inputFive"
      @keypress.space="clickInputSuma"
      :value="count"
    />
  </div>
  <div class="functions-with-events">
    <!-- Ejemplo de un evento que asociamos una funcion chicos que acepte un paramtero que nos diga hola dentro de una alerta, aca refrescamos un poco de js :) -->
    <button
      @click="holaClase('Hola clase, espero que se esten disfrutando de JS')"
    >
      Dile Hola a la clase!
    </button>
    <button @click="holaClaseDos">Dale click y responde</button>
  </div>
  <!-- Formulario con @submit dentro opening del form element -->
  <div class="forms">
    <form @submit.prevent="enviarFormulario">
      <div class="form-labels">
        <label for="name">Name</label
        ><input type="text" name="name" id="name" />
      </div>
      <div class="form-labels">
        <label for="last-name">Last-Name</label
        ><input type="text" name="last-name" id="last-name" />
      </div>
      <input type="submit" value="Enviar Formulario" />
    </form>
  </div>
  <!-- Formulario con @submit dentro opening del form element -->
  <div class="forms">
    <form>
      <div class="form-labels">
        <label for="name">Name</label
        ><input type="text" name="name" id="name" />
      </div>
      <div class="form-labels">
        <label for="last-name">Last-Name</label
        ><input type="text" name="last-name" id="last-name" />
      </div>
      <input
        type="submit"
        @click.prevent="enviarFormulario"
        value="Enviar Formulario"
      />
    </form>
  </div>

  <div class="forms">
    <label for="nacionalidad-m">Tienes otra nacionalidad?</label>
    <input
      type="checkbox"
      name="nacionalidad-m"
      id="nacionalidad-m"
      @click="showExtraNacionalidadFuncion"
    />
    <template v-if="showExtraNacionalidad">
      <label for="nacionalidades-extras">Que nacionalidades extra tienes?</label
      ><input
        type="text"
        name="nacionalidades-extras"
        id="nacionalidades-extras"
      />
    </template>
  </div>

  <!-- -- -->
  <!-- -- -->
  <!-- -- -->
  <!-- -- -->
  <!-- -- -->
  <!-- -- -->
  <!-- -- -->
  <!-- -- -->
  <!-- -- -->
  <!-- -- -->
  <!-- -- -->
  <!-- -- -->
  <!-- -- -->
  <!-- -- -->
  <!-- CUSTOM EVENTS -->
  <!-- Aunque es muy útil tener eventos nativos de Vue.js incorporados para hacer frente a los sucesos del día a día, a menudo se da el caso de que tenemos que hacer frente a cosas personalizadas que suceden fuera del ámbito de estos. Cuando esto sucede, podemos utilizar los custom events (eventos personalizados) como una forma de que nuestros componentes se comuniquen entre sí. Los eventos personalizados permiten que un componente hijo envíe un evento a un componente padre y que éste actúe sobre el evento. -->

  <EventoCustom
    @clickFueraComp="holaEstudiantes"
    @emitDentroDeFuncion="holaEstudiantes"
    @emitDentroDeFuncionQuePasaInformacion="verCuentaDelCompHijo"
  />
  <p>
    Valor de variable "valorNuevoDelPadre" que recibe un valor inicial por parte
    de comp hijo y lo manipulamos dentro del padre - {{ valorNuevoDelPadre }}
  </p>
</template>

<!-- Pongan su JS aca -->
<script setup>
import { ref, reactive } from "vue";
import EventoCustom from "./13-EventoCustom.vue";

// Trabajando con Eventos EMIT
let holaEstudiantes = () =>
  alert("holaaaa chicos soy logica accediad mediante jun emit!");

// Trabajando con Eventos EMIT y que reciben informacion por parte del hijo
let valorNuevoDelPadre = ref(0);
//
let verCuentaDelCompHijo = (informacionDelEmit) => {
  let b = informacionDelEmit;
  let valorTotal = 8 * b;
  valorNuevoDelPadre.value += valorTotal;
};

let chaoEstudiantes = () => alert("CHAOOOOOO!");

// Trabajando con Eventos
let count = ref(0);
let restarMenosUno = () => {
  console.log("doblc");
  count.value--;
};
let dblSuma = () => count.value++;
let mouseEnterSuma = () => count.value++;
let mouseLeaveSuma = () => count.value++;
let clickInputSuma = () => count.value++;

// Funcion que se encargue de recibir un param dentro de los parentesis para poder decirle hola a la clase :)
let holaClase = (parametroRecibido) => alert(parametroRecibido);
let holaClaseDos = (parametroRecibido) => {
  console.log(parametroRecibido);
  let usuario = prompt("Escribe tu nombre!");
  alert(`Hola, ${usuario}`);
  setTimeout(() => {
    alert(`espero que te estes disfrutando de VUE JS querid@: ${usuario}`);
  }, 2000);
};

// funcion para trabaar con forms!
let enviarFormulario = () => {
  alert("Formulario Enviado");
};

// funcion para trabajar con forms + unos condicionales
let showExtraNacionalidad = ref(false);
let showExtraNacionalidadFuncion = () => {
  showExtraNacionalidad.value = !showExtraNacionalidad.value;
};

// ---
// ---
// ---
// COMO REFERENCIAR REF o Reactive
let countReff = ref(0);
let countObject = reactive({
  count: 0,
});

// Funcion que haga la resa dentro del scrip tag
let diferenciasDeComoReferenciarRefOReactive = () => {
  console.log(`El valor de countObject.count es de ${countObject.count}`);
  console.log(`El valor de count es de ${countReff.value}`);
  //   Cuando quieran usar/referenciar una variable tipo REF que contenga solo un valor fuera del alcanze del alcanze de esavariable,. usamos la palabra reservada, .value
};
diferenciasDeComoReferenciarRefOReactive();

// FINAL DE COMO REFERENCIAR REF o Reactive
// ---
// ---
// ---
</script>

<!-- CSS con atributo scoped aca -->
<style scoped>
.forms {
  padding: 1rem 0;
}
p {
  font-size: 2em;
}
button {
  margin: 1 2rem;
  height: 64px;
  background: rgb(69, 69, 241, 0.8);
  border: none;
  color: white;
  font-size: 1.5em;
}

.event-inputs,
.event-buttons,
.event-mouse,
.form-labels,
.script-dependant-logic,
.function-with-events {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem 0;
}
.event-inputs label {
  margin: 0 0 1rem 0;
}

label,
input {
  font-size: 2em;
}

.form-labels button {
  width: 100%;
}
</style>

<!-- ¿Qué son los events?
Son, literalmente, eventos. Algo que sucede y provoca una reacción. 

¿Para qué sirven?
Para que tú, como programador, reacciones a algo que ha sucedido. 

Un ejemplo. 
Que el usuario haga click en un elemento del HTML y como consecuencia le aparezca un mensaje.  -->

<!-- HTML HERE -->

<!-- Una situación muy común cuando se monta una aplicación es que querremos ser capaces de ejecutar JavaScript después de un evento en el DOM (click, submit, etc.). -->
<!-- Hay dos tipos de manejadores de eventos (handlers), los inline y pasarlos como funcines :) . -->

<!-- SYNTAX  -->

<!-- directivo
v-on

shorthand directivo 
@ -->

<!-- V-ON === trabajar con eventos en VUE  -->
