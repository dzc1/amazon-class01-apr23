<!-- html aca -->
<template>
  <div class="tarjeta-banda">
    <NombreDeBanda v-bind:nombreDeBandaPropNieto="nombreBandaPropPadre" />
    <Genero v-bind:generoPropNieto="generoPropPadre" />
    <ImagenBanda
      :imagenDeBandaPropNieto="imagenBandaPropPadre"
      :textoAlternativoImagenPropNieto="textoImagenPropPadre"
    />
    <div>
      <h4>Mi cancion preferida es:</h4>
      <Cancion :cancionPropNieto="cancionPropPadre" />
      <InfoCancion v-bind:infoCancionPropNieto="infoCancionPropPadre" />
    </div>
  </div>
</template>

<!-- Pongan su JS aca -->
<script setup>
import NombreDeBanda from "./NombreDeBanda.vue";
import ImagenBanda from "./Imagen.vue";
import Cancion from "./Cancion.vue";
import InfoCancion from "./InfoCancion.vue";
import Genero from "./Genero.vue";

defineProps({
  nombreBandaPropPadre: {
    type: String,
  },
  imagenBandaPropPadre: {
    type: String,
  },
  textoImagenPropPadre: {
    type: String,
  },
  cancionPropPadre: {
    type: String,
  },
  infoCancionPropPadre: {
    type: String,
  },
  generoPropPadre: {
    type: String,
  },
});
</script>

<!-- CSS con atributo scoped aca -->
<style scoped>
.tarjeta-banda {
  border: 1px solid blue;
  margin: 2rem 0;
  padding: 1rem;
}
</style>
