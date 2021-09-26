import { defineStore } from "pinia";

export const useMyDemoStore = defineStore("myDemoStore", {
  state: () => {
    return {
      counter1234: 109,
    };
  },
  getters: {
    doubleCount: (state) => state.counter1234 + 100,
  },
  actions: {
    increment() {
      this.increment2();
    },
    increment2() {
      this.$state.counter1234++;
    },
  },
});
