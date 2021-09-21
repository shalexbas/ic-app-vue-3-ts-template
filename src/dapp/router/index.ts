import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/Index.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/example",
    name: "Example",
    component: () => import("../views/Example.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
// 	next()
// })

export default router;
