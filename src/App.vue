<template>
  <img alt="Vue logo" src="./assets/logo.svg" />
  <HelloWorld msg="Hello Internet Computer + Vue 3 + TypeScript + Vite" />
  <router-link to="/">HomePage</router-link> |
  <router-link to="/about">AboutPage</router-link> |
  <router-link to="/example">ExamplePage</router-link>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
