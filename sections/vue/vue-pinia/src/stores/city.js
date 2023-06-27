import { ref, reactive, computed } from "vue";
import { defineStore } from "pinia";

export const cityStore = defineStore("city", () => {
  let years = ref(30);
  let city = ref("Tucuman, Argentina");
  let date = ref("31 de Mayo, 1565");

  const increment = () => {
    years.value += 2;
  };
  const multiply = () => {
    years.value = years.value * 4;
  };

  return { years, date, increment, multiply, city };
});
