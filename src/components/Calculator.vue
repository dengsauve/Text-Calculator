<template>
    <div class="calculator-body">
        <display :message="message"/>
        <keypad v-on:number-stack="newNumber($event)"
                v-on:operator-stack="newOperator($event)"
        />
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
        },
        newOperator: function ($event) {
            // Clear
            if ($event === 'C') {
                this.message = '';
            }
            // Equate
            else if ($event === '=') {
                // Handle equation
                this.message += '\n' + $event + '\n';
            }
            // Add symbol to message stack
            else {
                this.message += '\n' + $event + '\n';
            }
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