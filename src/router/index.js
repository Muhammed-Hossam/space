/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Destination from "../views/Destination.vue";
import Crew from "../views/Crew.vue";
import Tech from "../views/Technology.vue";


const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/destination",
    name: "Destination",
    component: Destination,
  },
  {
    path: "/crew",
    name: "Crew",
    component: Crew,
  },
  {
    path: "/tech",
    name: "Technology",
    component: Tech,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
