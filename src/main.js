import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);

app.use(router);
app.mount("#app");

// Init AOS
AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
  offset: 120,
});
