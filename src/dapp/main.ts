import { dummy } from "./before_all";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/scss/global.css";

//Workaround for setting Buffer at a single and predictable place
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dummy0 = dummy;

const app = createApp(App);

app.use(router);
app.mount("#app");
