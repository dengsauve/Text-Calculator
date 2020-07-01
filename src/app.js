import Vue from 'vue';
import Calculator from './components/Calculator';
import Button from './components/Button';
import Display from "./components/Display";

new Vue({
    el: "#app",

    components: {
        Calculator,
        Display,
        'my-button': Button,
    }
});

