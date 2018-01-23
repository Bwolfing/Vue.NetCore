import Vue from "vue";

new Vue({
    el: "#app",
    template: "<h1 v-on:click='alertHello'>Hello, world!</h1>",
    methods: {
        alertHello: () => alert("Hello from the alert!")
    }
});