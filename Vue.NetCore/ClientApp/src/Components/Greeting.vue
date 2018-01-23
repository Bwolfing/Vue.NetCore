<template>
  <div>
        <div>
            <label for="userName">Name: </label>
            <input type="text" placeholder="Enter name..." v-model="userName">
        </div>
        <p v-if="userName">
            Hello, {{ userName }}!
        </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
    name: "Greeting",
})
export default class Greeting extends Vue {
    userName: string = "";
}
</script>
