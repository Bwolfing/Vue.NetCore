namespace Templates {
    export const App = `<div class="col-sm-12">
    <h2>Hello, world!</h2>
    <p>
        I am a template from a .ts file
    </p>
    <p>
        This template was written by {{ name }}!
    </p>
    <div class="btn btn-primary" v-on:click="changeName">
        Change name
    </div>
</div>`;
}