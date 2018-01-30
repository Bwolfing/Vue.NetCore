import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class HelloWorld extends Vue {
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}