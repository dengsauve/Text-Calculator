import Vue from 'vue';
import Calculator from './components/Calculator';
import Button from './components/Button';
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import NumberPad from "./components/NumberPad";

new Vue({
    el: "#app",

    components: {
        Calculator,
        Display,
        Keypad,
        NumberPad,
        'my-button': Button,
    }
});

