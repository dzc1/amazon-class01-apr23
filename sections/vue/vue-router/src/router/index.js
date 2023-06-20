import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Suecia from "../views/Sweden.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // buenas praticas dictan que la ruta del "home" siempre se define asi "/"
      path: "/",
      // esta llave es solo descriptiva, es mas que todo referencial.
      name: "home",
      // IMPORTANTE - component key - define el componente que va a mostrar como pagina!
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/suecia",
      name: "Suecia, componente sobre suecia",
      component: Suecia,
    },
  ],
});

export default router;
