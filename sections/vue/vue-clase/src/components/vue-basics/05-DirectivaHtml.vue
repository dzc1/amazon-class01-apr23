<!-- html aca -->
<template>
  <!-- HTML puesto a pelo -->
  <div>
    <h2>Red Hot Chilli Peppers</h2>
    <p>
      Red Hot Chili Peppers, también conocidos como RHCP, es una influyente
      banda de rock estadounidense formada en Los Ángeles en 1983. La banda es
      conocida por su distintivo estilo musical que fusiona el rock alternativo
      con el funk, el punk y el rap. Han ganado popularidad mundial gracias a su
      energética presencia escénica, letras a menudo introspectivas y enérgicas
      melodías. A lo largo de su carrera, los Red Hot Chili Peppers han vendido
      millones de álbumes, han recibido múltiples premios y han dejado una
      huella duradera en la historia del rock con canciones icónicas como "Under
      the Bridge", "Californication" y "Scar Tissue".
    </p>
    <img
      src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/CBDTFDX2RNHGBBTZMQLFITU25E.jpg"
      alt="Image of the Red Hot Chillin Peppers"
    />
  </div>
  <hr />
  <!-- HTML puesto mediante directiva v-html -->
  <div v-html="redHotHtmlDiv"></div>
</template>

<!-- Pongan su JS aca -->
<script setup>
import { ref, reactive } from "vue";
//La directiva "v-html" en Vue se utiliza para insertar contenido HTML dinámico en un elemento. Permite renderizar y mostrar código HTML en lugar de tratarlo como texto plano.

let redHotHtmlDiv = ref(`
<div>
    <h2>Red Hot Chilli Peppers</h2>
    <p>
      Red Hot Chili Peppers, también conocidos como RHCP, es una influyente
      banda de rock estadounidense formada en Los Ángeles en 1983. La banda es
      conocida por su distintivo estilo musical que fusiona el rock alternativo
      con el funk, el punk y el rap. Han ganado popularidad mundial gracias a su
      energética presencia escénica, letras a menudo introspectivas y enérgicas
      melodías. A lo largo de su carrera, los Red Hot Chili Peppers han vendido
      millones de álbumes, han recibido múltiples premios y han dejado una
      huella duradera en la historia del rock con canciones icónicas como "Under
      the Bridge", "Californication" y "Scar Tissue".
    </p>
    <img
      src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/CBDTFDX2RNHGBBTZMQLFITU25E.jpg"
      alt="Image of the Red Hot Chillin Peppers"
    />
  </div>
`);
</script>

<!-- CSS con atributo scoped aca -->
<style scoped></style>
