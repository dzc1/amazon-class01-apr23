<!-- html aca -->
<template>
  <div>
    <h3>Directivas Condicionales</h3>
    <hr />
    <!-- v-if -->
    <div id="v-if">
      <div v-if="number">
        <p>Condicionar si el numero equivale a 0</p>
      </div>
      <div v-if="number === 0">
        <p>
          Condicionar si el numero equivale a 0 usando un operadorDeChequeao ===
        </p>
      </div>
      <div v-if="number >= 4">
        <p>Condicionado algo mas especifico con un poco de js</p>
      </div>
    </div>
    <!-- v-if & v-else  -->
    <hr />
    <div id="if-else">
      <p v-if="numberElse === 0">La variable numberElse equivale a 0</p>
      <p v-else>La variable numberElse no equivale a {{ numberElse }}</p>
    </div>
    <!-- v-if & v-else-if & v-else  -->
    <hr />
    <div id="if-elseIf-else">
      <p v-if="numberElseIfElse === 0">
        La variablenumberElseIfElse equivale a 0
      </p>
      <p v-else-if="numberElseIfElse === 4">
        La variable numberElseIfElse no equivale a 0 equivale a
        {{ numberElseIfElse }}
      </p>
      <p v-else>La variablenumberElseIfElse NO equivale a 0 o 4</p>
    </div>
  </div>
</template>

<!-- Pongan su JS aca -->
<script setup>
import { ref, reactive } from "vue";

// Depender de un numero tipo ref()
let number = ref(4);

let numberElse = ref(5);

let numberElseIfElse = ref(6);
</script>

<!-- CSS con atributo scoped aca -->
<style scoped>
p {
  display: block;
}
</style>

<!-- -- -->
<!-- -- -->
<!-- -- -->
<!-- -- -->
<!-- EXPLICACION: -->

<!-- Las directivas "v-if", "v-else-if" y "v-else" en Vue se utilizan para controlar la renderización condicional de elementos en la interfaz de usuario en función de expresiones condicionales.

"v-if" se utiliza para mostrar o ocultar un elemento HTML basado en una expresión condicional. Si la expresión es verdadera, el elemento se mostrará en el DOM; de lo contrario, se ocultará.

"v-else-if" se utiliza para añadir una condición adicional en caso de que la expresión del "v-if" anterior sea falsa y se quiera evaluar otra expresión condicional. Solo se puede usar después de una directiva "v-if" o "v-else-if" y se evaluará si la condición anterior es falsa y su propia condición es verdadera.

"v-else" se utiliza como la última condición en una serie de directivas "v-if" o "v-else-if". Si todas las condiciones anteriores son falsas, "v-else" se ejecutará y el elemento asociado se mostrará.

Estas directivas son útiles cuando se desea mostrar u ocultar elementos de la interfaz de usuario en función de diferentes condiciones. Permiten crear lógica condicional dentro de los componentes Vue y generar contenido dinámico basado en el estado de la aplicación o las propiedades definidas. Al utilizar "v-if", "v-else-if" y "v-else", es posible crear flujos de renderización condicional complejos y adaptar la interfaz de usuario según las necesidades específicas. -->
