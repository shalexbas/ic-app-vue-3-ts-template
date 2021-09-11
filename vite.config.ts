import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { resolve } from "path";

let localCanisters, prodCanisters, canisters;

function initCanisterIds() {
  try {
    localCanisters = require(path.resolve(
      ".dfx",
      "local",
      "canister_ids.json",
    ));
  } catch (error) {
    console.log("No local canister_ids.json found. Continuing production");
  }
  try {
    prodCanisters = require(path.resolve("canister_ids.json"));
  } catch (error) {
    console.log("No production canister_ids.json found. Continuing with local");
  }

  const network = process.env.DFX_NETWORK || "local";

  canisters = network === "local" ? localCanisters : prodCanisters;

  for (const canister in canisters) {
    process.env["VITE_APP_" + canister.toUpperCase() + "_CANISTER_ID"] =
      canisters[canister][network];
  }
}
initCanisterIds();

//https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
        additionalData: `@import "./src/assets/scss/variable";
                         @import "./src/assets/scss/global";`,
      },
    },
  },
  base: "./",
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  plugins: [vue()],
  define: {
    "process.env": process.env,
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api"),
      },
    },
  },
});
