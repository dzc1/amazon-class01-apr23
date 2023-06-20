<template>
  <!-- Inline Emits :) -->

  <div class="cool-btns">
    <button @click="clickMeDentroComp">
      Click Me - Usando logica dentro del comp
    </button>
    <!-- Un Emit con la logica dentro o in inline -->
    <button @click="$emit('clickFueraComp')">
      Click Me - Usando logica fuera del comp
    </button>
    <!-- Un Emit con la logica en una funcion dentro del script! -->
    <button @click="funcionQueEmiteLogica">
      Click Me - Usando logica fuera del comp + funcion que se encarga de enviar
      emit hacia padre
    </button>
    <div>
      <button @click="funcionQueEmiteLogicaYEnviaINfo">
        Click me - Usando logica fuera del comp + funcion que se encarga de
        enviar emit + INFORMACION DE UNA VARIABLE hacia padre
      </button>
      <p>
        Valor de variable "cuenta" dentro del componente -
        <strong>{{ cuenta }}</strong>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

let clickMeDentroComp = () => alert("me has clickado");

// defineEmits()
let emits = defineEmits([
  "emitDentroDeFuncion",
  "emitDentroDeFuncionQuePasaInformacion",
]);

let funcionQueEmiteLogica = () => {
  // primero - nos guardamos nuestros defineEmits() dentro de una variable para poder referenciarla dentro de nuestra funcion.
  // segundo - debido a que la variable que guarda el metodo defineEmits() tiene acceso a un metodo nativo de vue, dentro de lo parentesis refeenciamos ese emit que definimos y asi lo podemos usar correctamente dentro de una funcion :)
  emits("emitDentroDeFuncion");
};

let cuenta = ref(2);
let funcionQueEmiteLogicaYEnviaINfo = () => {
  cuenta.value++;
  emits("emitDentroDeFuncionQuePasaInformacion", cuenta.value);
};
</script>

<style scoped>
.cool-btns {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.cool-btns button {
  margin: 1rem 0;
}
</style>

<!-- Que son los emits en vue? 
"Emits" en Vue.js se utilizan para enviar eventos personalizados desde un componente hijo al componente padre. El componente padre puede luego escuchar estos eventos y responder a ellos según sea necesario.

Como se usan los emits en vue?
Para usar un "emit" en Vue.js con la API de composición, puedes definir un evento personalizado en el componente hijo y usar la función/metodo "emit" para activar el evento y pasar datos junto con él -->

<!-- SYNTAX  -->

<!-- Como se usa el emit keyword dentro del template?  -->
<!-- $emit() -->

<!-- Como se usa el emit keyword dentro del script?  -->
<!-- emits() -->
