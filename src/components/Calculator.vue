<template>
    <div class="calculator-body">
        <display :message="message"/>
        <keypad v-on:number-stack="newNumber($event)"/>
    </div>
</template>

<script>
import Display from "./Display";
import Keypad from "./Keypad";

export default {
    components: {
        Display,
        Keypad
    },
    data: function () {
        return {
            message: 'Welcome'
        }
    },

    methods: {
        newNumber: function ($event) {
            if (this.message === 'Welcome') {
                this.message = '';
            }
            this.message += $event + ' ';
        }
    }
}
</script>

<style scoped>
    div.calculator-body {
        width: 500px;
        height: 1000px;

        border: 3px solid steelblue;
        border-radius: 15px;

        padding: 15px;
    }
</style>