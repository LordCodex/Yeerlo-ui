import { createApp } from "vue";
import LoadScript from "vue-plugin-load-script";
import moshaToast from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
const app = createApp(App);
app.use(LoadScript);

import App from "./App.vue";
import router from "./router";
import store from "./store";
createApp(App)
  .use(store)
  .use(moshaToast)
  .use(VueLoading, {
    color: "#f06723",
    backgroundColor: "#000000",
    loader: "dots",
  })
  .use(router)
  .mount("#app");
