import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "@/assets/styles/styles.scss";
// import '../node_modules/font-awesome/scss/_variables.scss';



createApp(App).use(store).use(router).mount("#app");
