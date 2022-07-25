import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import ForgotView from "../views/ForgotView.vue";
import SignUp from "../views/SignUp.vue";
import NotFound from "../views/NotFound.vue";
import EnterPassword from "../views/EnterPassword.vue";
import OtherInfo from "../views/OtherInfo.vue";
import OtpVerify from "../views/OtpVerify.vue";
import OnboardOne from "../views/OnboardOne.vue";
import OnboardTwo from "../views/OnboardTwo.vue";
import OnboardThree from "../views/OnboardThree.vue";
import OnboardFour from "../views/OnboardFour.vue";
import SuccessPage from "../views/SuccessPage.vue";
import DashboardView from "../views/DashboardView.vue";
import ChartView from "../components/ChartView.vue";

const routes = [
  {
    path: "/",
    name: "Onboard One",
    component: OnboardOne,
  },
  {
    path: "/onboardtwo",
    name: "Onboard Two",
    component: OnboardTwo,
  },
  {
    path: "/onboardthree",
    name: "Onboard Three",
    component: OnboardThree,
  },
  {
    path: "/onboardfour",
    name: "Onboard Four",
    component: OnboardFour,
  },
  {
    path: "/login",
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
  {
    path: "/otpverify",
    name: "Otp Verification",
    component: OtpVerify,
  },
  {
    path: "/enterpassword",
    name: "Enter Password",
    component: EnterPassword,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardView,
  },
  {
    path: "/chart",
    name: "Dashboard chart",
    component: ChartView,
  },
  {
    path: "/success",
    name: "Success Page",
    component: SuccessPage,
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
