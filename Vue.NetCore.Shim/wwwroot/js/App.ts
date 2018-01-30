const vm = new Vue({
    el: "#app",
    template: Templates.App,
    data: {
        name: "Billy"
    },
    methods: {
        changeName: function() {
            this.name = "John";
        }
    }
});
