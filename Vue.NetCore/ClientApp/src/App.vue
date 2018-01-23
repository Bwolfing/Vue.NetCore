<template>
  <h2 v-on:click="alertHello">
      Hello from App.vue!
  </h2>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";


@Component
export default class App extends Vue{
    alertHello() {
      alert("Hello from the App.vue!");
    }
}
</script>

