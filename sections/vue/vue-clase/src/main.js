import "./assets/main.css";

// Esto que vemos aca abajo se llama destructuracion, en esencia, estamos referenciando una soloa cosa en particular de esa carpeta.
import { createApp } from "vue";
import App from "./App.vue";

// El CLI de Vue te parametriza esta concatenacion cuando te creas el proyecto que te habilita usar vue mediante el metodo createApp, y dentro del metodo estamos referenciando el documento con nombre App que se importa en la linea numero 5.
// En la cadena tenemos el metodo nativo de JS que se llama mount que nos habilita la conexion al div del archivo index mediante el ID #app
createApp(App).mount("#app");

// SPA === Single Page Application
