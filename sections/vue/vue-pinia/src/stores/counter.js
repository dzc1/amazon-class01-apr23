import { ref, reactive, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);

  let favoriteBand = ref("Red Hot Chilli Peppers");

  const doubleCount = computed(() => count.value * 2);

  const increment = () => count.value++;

  return { count, doubleCount, increment, favoriteBand };
});

//defineStore('primero-pasamos-el-nombre-que-estar-usando-como-referencia-esta-variable', () => {
//aca dentro es donde definimos nuestra data
//})
