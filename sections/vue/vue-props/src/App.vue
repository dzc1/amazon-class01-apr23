<script setup>
import { reactive } from "vue";
import CartaDeBanda from "./components/CartaDeBanda.vue";

let bandas = reactive([
  {
    infoDeBanda: {
      nombre: "The Doors",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/The_Doors_1968.JPG/800px-The_Doors_1968.JPG",
      textoAlternativoImagen: "Una imagen super cool de The Doors",
      genero: "Rock n Roll",
    },
    cancion: "Light My Fire",
    infoCancion:
      "Light My Fire es una canción icónica lanzada por la banda estadounidense The Doors en 1967. Fue escrita por los miembros de la banda, Jim Morrison y Robby Krieger. La canción se destaca por su distintivo sonido de órgano, las letras poéticas de Morrison y su estilo musical psicodélico y rock.",
  },
  {
    infoDeBanda: {
      nombre: "The Red Hot Chilli Peppers",
      imagen:
        "https://api.worldwidetune.com//uploads/posts/273ea4e5-d7c0-4cf7-ad23-18747a1a29db/red-chili-peppers-band-members.webp",
      textoAlternativoImagen:
        "Una imagen super cool de los fucking Red Hot Chilli Peppers",
      genero: "Rock n Roll",
    },
    cancion: "Light My Fire",
    infoCancion:
      "Dani California es una canción lanzada por la banda de rock estadounidense Red Hot Chili Peppers en el año 2006. Es el primer sencillo de su álbum titulado - 'Stadium Arcadium'. La canción fue escrita por los miembros de la banda, Anthony Kiedis, Flea, John Frusciante y Chad Smith.",
  },
]);
let bandasDos = reactive([
  {
    infoDeBanda: {
      nombre: "Hombres G",
      imagen:
        "https://thisis-images.scdn.co/37i9dQZF1DZ06evO3xExRS-default.jpg",
      textoAlternativoImagen: "Una imagen super cool de los Hombres G",
      genero: "Rock n Roll",
    },
    cancion: "Devuelveme a mi chica!",
    infoCancion:
      "Devuélveme a Mi Chica es una canción emblemática de la banda de rock española Hombres G, lanzada en 1985. Fue escrita por los miembros de la banda, David Summers y Rafa Gutiérrez. La canción cuenta la historia de un chico que extraña a su chica y le ruega que regrese a él. Expresa su arrepentimiento por haberla perdido y su deseo de recuperarla. La melodía pegadiza y el ritmo animado de la canción la convirtieron en uno de los mayores éxitos de Hombres G.",
  },
  {
    infoDeBanda: {
      nombre: "Soda Stereo",
      imagen:
        "https://indiehoy.com/wp-content/uploads/2020/12/soda-stereo-1.jpg",
      textoAlternativoImagen: "Una imagen super cool de Soda Stereo",
      genero: "Rock n Roll",
    },
    cancion: "Light My Fire",
    infoCancion:
      "Cuando Pase el Temblor es una canción icónica de la banda argentina Soda Stereo, lanzada en 1985 como parte de su álbum - Nada Personal. Fue escrita por el líder de la banda, Gustavo Cerati. La canción habla sobre la superación de los obstáculos y la esperanza de un futuro mejor. El título, Cuando Pase el Temblor, es una metáfora de los momentos difíciles y la necesidad de mantenerse fuerte hasta que las dificultades pasen.",
  },
]);
</script>

<template>
  <CartaDeBanda
    v-for="(banda, index) in bandas"
    :key="index"
    :nombreBandaPropPadre="banda.infoDeBanda.nombre"
    v-bind:generoPropPadre="banda.infoDeBanda.genero"
    v-bind:imagenBandaPropPadre="banda.infoDeBanda.imagen"
    v-bind:textoImagenPropPadre="banda.infoDeBanda.textoAlternativoImagen"
    :cancionPropPadre="banda.cancion"
    :infoCancionPropPadre="banda.infoCancion"
  />
  <CartaDeBanda
    v-for="(banda, index) in bandasDos"
    :key="index"
    :nombreBandaPropPadre="banda.infoDeBanda.nombre"
    v-bind:generoPropPadre="banda.infoDeBanda.genero"
    v-bind:imagenBandaPropPadre="banda.infoDeBanda.imagen"
    v-bind:textoImagenPropPadre="banda.infoDeBanda.textoAlternativoImagen"
    :cancionPropPadre="banda.cancion"
    :infoCancionPropPadre="banda.infoCancion"
  />
</template>

<style scoped></style>
