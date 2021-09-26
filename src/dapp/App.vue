<template>
  <img alt="Vue logo" src="@/assets/logo.svg" />
  <HelloWorld msg="Hello Internet Computer + Vue 3 + TypeScript + Vite" />
  <router-link to="/">HomePage</router-link> |
  <router-link to="/about">AboutPage</router-link> |
  <router-link to="/example">ExamplePage</router-link>
  <router-view />
  <button @click="increase">InMyStore</button>
  <div>MyStoreVal: {{ counter1234 }}, {{ doubleCount }}</div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import { useMyDemoStore } from "@/store/DemoStore";

export default defineComponent({
  components: {
    HelloWorld,
  },
  setup() {
    const myDemoStore = useMyDemoStore();
    const counter1234 = computed(() => myDemoStore.counter1234);
    const doubleCount = computed(() => myDemoStore.doubleCount);

    //const increase = () => myDemoStore.increment();

    return {
      myDemoStore,
      counter1234,
      doubleCount,
      increase: myDemoStore.increment,
    };
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
