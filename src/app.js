import Vue from 'vue';
import Calculator from './components/Calculator';
import Button from './components/Button';

new Vue({
    el: "#app",

    components: {
        Calculator,
        'my-button': Button,
    }
});

