<!-- html aca -->
<template>
  <div id="ejemplo-sencillo">
    <p>Mi edad es de: {{ edad }} Años//</p>
    <p>Mi edad meses es: {{ edadEnMeses }} Meses</p>
  </div>
  <div id="brakdown-computed-vs-nocompued">
    <p>Logica sin dependencia de propiedad comp</p>
    <p>
      {{
        author.books.length > 2
          ? "J.R Tolkien si tiene mas de 2 libros"
          : "J.R Tolkien solo ha escrito 1 libro"
      }}
    </p>
    <hr />
    <p>Logica con dependencia de propiedad comp</p>
    <p>{{ authorHasBooks }}</p>
  </div>
  <div id="comp-properties-con-getters-setters">
    <p>Uno de mis musicos preferidos se llama: {{ nombre }} {{ apellido }}</p>
    <hr />
    <p>
      Usando un computed prop + get() y un set() <br />
      Uno de mis musicos preferidos se llama: {{ nombreUnificado }}
    </p>
  </div>
  <div id="shopping-list">
    <p>Pasamos un computed prop para ver el {{ precioTotal }}</p>
    <div>
      <button @click="addArticulo">Añadir Iphone 88</button>
      <ul v-for="(item, index) in items" :key="index">
        <li>
          {{ item.id }} - {{ item.title }} -
          {{ item.price }}
        </li>
      </ul>
    </div>
    <div class="tes">
      <p v-for="item in filtro">test - {{ item }}</p>
      <!-- <p v-for="articulo in filtro" :key="articulo">
        <p> {{ articulo.title }}</p>
      </p> -->
    </div>
  </div>
</template>

<!-- Pongan su JS aca -->
<script setup>
import { ref, reactive, computed } from "vue";

// Ejemplo Sencillo
let edad = ref(44);
let edadEnMeses = computed(() => edad.value * 12);

// Breakdon de Computed Props
let author = reactive({
  name: "J.R Tolkien",
  books: ["LTR - One", "2do libro", "3libro"],
});

// Usar una prop computada para ejecutar logica de una manera mas sencilla + optima
let authorHasBooks = computed(() =>
  author.books.length > 2
    ? "J.R Tolkien si tiene mas de 2 libros"
    : "J.R Tolkien solo ha escrito 1 libro"
);

// Function sin computed props
let authorHasBooksSinComp = () => {
  console.log(
    author.books.length > 2
      ? "J.R Tolkien si tiene mas de 2 libros"
      : "J.R Tolkien solo ha escrito 1 libro"
  );
};
authorHasBooksSinComp();

// -----
// -----
// -----
// -----
// -----
// PROPIEDADES COMPUTADAS EXPANSIVAS/EXPANDIDAS!
// Las propiedades computadas son, por defecto, de tipo getter. Si intenta asignar un nuevo valor a una propiedad computada, recibirá una advertencia en tiempo de ejecución. En los raros casos en los que necesites una propiedad computada "escribible", puedes crear una proporcionando tanto un getter como un setter:

// get()
// set()

let nombre = ref("Gustavo");
let apellido = ref("Cerati");

let nombreUnificado = computed({
  //syntax
  get() {
    return `${nombre.value} ${apellido.value}`;
  },
  set(nombreUnificadoProp) {
    [nombre.value, apellido.value] = nombreUnificadoProp;
  },
});

// Ejemplo 2
// Shopping List

const items = reactive([
  { id: 1, title: "iphone", price: 600 },
  { id: 2, title: "iphone X", price: 1000 },
  { id: 3, title: "iphone 5", price: 200 },
  { id: 4, title: "ipad Pro", price: 2500 },
  { id: 5, title: "ipad Pro", price: 8500 },
  { id: 6, title: "ipad Pro", price: 10000 },
]);

let precioTotal = computed(() =>
  items.reduce((total, actual) => (total = total + actual.price), 0)
);

let addArticulo = () =>
  items.push({ id: 7, title: "iphone 88", price: 500000 });

// let filtro = computed(() => {
//   items.filter((articuloMenorACincoMil) => articuloMenorACincoMil.price > 1000);
// });
</script>

<!-- CSS con atributo scoped aca -->
<style scoped>
div {
  border: 1px solid red;
  margin: 2em;
  padding: 1em;
}
</style>

<!-- Computed Properties - what are they ? -->
<!-- ¿Qué es?
En Vue, una propiedad computada es como una función especial que calcula y devuelve un valor basado en otras propiedades de datos en tu aplicación. Es una forma de definir un valor que se actualiza automáticamente cada vez que sus dependencias cambian.

¿Por qué lo usamos?
Las propiedades computadas son útiles porque nos permiten realizar cálculos o transformaciones en los datos de una manera limpia y eficiente. En lugar de actualizar manualmente un valor cada vez que sus dependencias cambian, podemos dejar que Vue se encargue de ello. Las propiedades computadas nos ayudan a mantener nuestro código organizado y facilitan la gestión de la lógica de datos compleja. -->

<!-- Las propiedades computadas se utilizan en Vue.js con diversos fines, incluyendo:

Reactividad automática: Las propiedades computadas en Vue se actualizan automáticamente cuando cambian sus dependencias. Esto significa que no tenemos que preocuparnos por actualizar manualmente los valores, Vue se encarga de ello.

Código más limpio: Las propiedades computadas nos permiten realizar cálculos o transformaciones en nuestros datos sin ensuciar nuestro código con lógica adicional. Esto ayuda a mantener nuestro código más limpio y legible.

Eficiencia: Vue optimiza las propiedades computadas para que solo se recalculen cuando sea necesario. Si las dependencias no cambian, Vue almacenará en caché el resultado anterior y evitará cálculos innecesarios.

Reutilización: Las propiedades computadas se pueden utilizar en múltiples lugares de nuestra aplicación. Esto nos permite reutilizar la lógica de cálculo en diferentes componentes sin duplicar código.

Depuración más sencilla: Al utilizar propiedades computadas, podemos dividir nuestra lógica en pequeñas partes más manejables. Esto facilita la depuración y el seguimiento de posibles errores en nuestro código.

Mayor legibilidad: Al separar la lógica de cálculo en propiedades computadas, nuestro código se vuelve más legible y comprensible. Es más fácil entender qué está ocurriendo en cada parte de nuestra aplicación.

Optimización de rendimiento: Al utilizar propiedades computadas, podemos realizar cálculos o filtrar datos de forma eficiente. Esto puede ayudar a optimizar el rendimiento de nuestra aplicación al reducir la carga de trabajo innecesaria.

Facilidad de mantenimiento: Las propiedades computadas facilitan el mantenimiento de nuestro código. Al tener la lógica de cálculo encapsulada en una propiedad específica, podemos realizar cambios o mejoras sin afectar otras partes de nuestra aplicación.

Flexibilidad: Las propiedades computadas nos brindan flexibilidad para realizar cálculos complejos o personalizados según nuestras necesidades. Podemos combinar múltiples propiedades o utilizar lógica condicional para obtener el resultado deseado.

Facilidad de uso: Utilizar propiedades computadas en Vue es relativamente sencillo y se integra de manera natural con el flujo de desarrollo de la biblioteca. Con solo unos pocos pasos, podemos aprovechar sus beneficios y mejorar la eficiencia de nuestra aplicación.


Al utilizar propiedades computadas, puedes escribir código más conciso, mantenible y eficiente, mientras sigues disfrutando de la reactividad y la simplicidad que brinda Vue.js.

ANALOGIA:
Las propiedades computadas en Vue.js se pueden comparar con un cálculo que realiza una calculadora. Al igual que una calculadora, las propiedades computadas toman valores existentes (los números que ingresas) y realizan un cálculo con ellos (por ejemplo, la suma o el producto) para producir un nuevo valor (el resultado). En el caso de Vue.js, los valores existentes son los datos reactivos en tu componente, y la propiedad computada es el cálculo que se realiza con ellos.

Además, al igual que una calculadora, las propiedades computadas en Vue.js solo se recalculan cuando sus dependencias cambian. De esta manera, pueden mejorar el rendimiento al evitar recalculaciones innecesarias. 

EJEMPLO: 
Imagina que estás mostrando una lista de precios pero que el usuario puede meter un código de descuento. Puedes hacer una propiedad computada que sea el descuento y otra que sea el precio.
Cuando el descuento cambie, cambiarán el resto de precios y el usuario lo verá en pantalla inmediatamente. 


IMPORTANTE
Cuando no usar propiedades computadas
Si su propiedad computada no contiene ninguna dependencia reactiva (una forma elegante de decir, si algún dato depende de esta propiedad computada para reflejarse en la UI), no tiene sentido que se compute.
-->
