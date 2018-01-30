import Vue from "vue";
import Component from "vue-class-component";

@Component({
    name: "Greeting",
})
export default class Greeting extends Vue {
    userName: string = "";
}