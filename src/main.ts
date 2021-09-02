import { dummy } from "./before_all";
import { createApp } from "vue";
import App from "./App.vue";

//Workaround for setting Buffer at a single and predictable place
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dummy0 = dummy;

createApp(App).mount("#app");
