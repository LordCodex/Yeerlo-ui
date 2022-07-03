import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import ForgotView from "../views/ForgotView.vue";
import SignUp from "../views/SignUp.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/forgot",
    name: "forgot",
    component: ForgotView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
