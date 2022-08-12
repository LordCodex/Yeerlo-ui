import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/auth/LoginView.vue";
import ForgotView from "../views/auth/ForgotView.vue";
import SignUp from "../views/auth/SignUp.vue";
import NotFound from "../views/NotFound.vue";
import OtherInfo from "../views/auth/OtherInfo.vue";
import OtpVerify from "../views/auth/OtpVerify.vue";
import OnboardOne from "../views/onboard/OnboardOne.vue";
import OnboardTwo from "../views/onboard/OnboardTwo.vue";
import OnboardThree from "../views/onboard/OnboardThree.vue";
import OnboardFour from "../views/onboard/OnboardFour.vue";
import SuccessPage from "../views/auth/SuccessPage.vue";
import DashboardView from "../views/dashboard/DashboardView.vue";
import MenuView from "../views/dashboard/MenuView.vue";
import MyProfile from "../views/dashboard/MyProfile.vue";
import MyPage from "../views/dashboard/MyPage.vue";
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
    path: "/menu",
    name: "Menu",
    component: MenuView,
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
    path: "/profile",
    name: "My Profile",
    component: MyProfile,
  },
  {
    path: "/mypage",
    name: "My Page",
    component: MyPage,
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
