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

<script lang="ts" src="./Greeting.ts"></script>
