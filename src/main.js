import { createApp } from "vue";
import LoadScript from "vue-plugin-load-script";

const app = createApp(App);
app.use(LoadScript);

import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
