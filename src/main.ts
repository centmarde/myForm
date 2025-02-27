/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App
 */

// Vue & Core Dependencies
import { createApp } from "vue";
import App from "./App.vue";

// Router
import router from "./router";

// Plugins
import { registerPlugins } from "@/plugins";
//@ts-ignore
import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";


// Perfect Scrollbar
//@ts-ignore
import { PerfectScrollbarPlugin } from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/style.css";


// Toast Configuration
const toastOptions = {
  toastClassName: "custom-toast", // Custom styling
  position: "top-right",
  timeout: 3000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  hideProgressBar: false,
  transition: "Vue-Toastification__fade",
};

// Create and Mount App
const app = createApp(App)
  .use(router)
  .use(Toast, toastOptions)
  .use(PerfectScrollbarPlugin)
  .use(VueSidebarMenu);

app.config.warnHandler = () => {}; 

registerPlugins(app);
app.mount("#app");
