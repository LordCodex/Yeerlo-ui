import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import ForgotView from "../views/ForgotView.vue";
import SignUp from "../views/SignUp.vue";
import NotFound from "../views/NotFound.vue";
import EnterPassword from "../views/EnterPassword.vue";
import OtherInfo from "../views/OtherInfo.vue";
// import OtpVerify from "../views/OtpVerify.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/forgot",
    name: "Forgot Password",
    component: ForgotView,
  },
  {
    path: "/signup",
    name: "Sign Up",
    component: SignUp,
  },
  {
    path: "/otherinfo",
    name: "Other Information",
    component: OtherInfo,
  },
  // {
  //   path: "/otpverify",
  //   name: "Otp Verification",
  //   component: OtpVerify,
  // },
  {
    path: "/enterpassword",
    name: "Enter Password",
    component: EnterPassword,
  },
  {
    path: "/:catchAll(.*)",
    name: "Not Found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to) => {
  console.log(to);
  document.title = `${process.env.VUE_APP_TITLE} - ${to.name}`;
});
export default router;
