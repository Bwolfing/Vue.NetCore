<template>
  <div>
      <h2 v-on:click="alertHello">
        Hello from App.vue!
      </h2>
      <Greeting />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import Greeting from "./Components/Greeting.vue";

@Component({
  components: {
    Greeting
  }
})
export default class App extends Vue {
  alertHello() {
    alert("Hello from App.vue");
  }
}
</script>

