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
    import wordsToNumbers from "words-to-numbers";
    import {
        evaluate
    } from 'mathjs'
    const numWords = require('num-words');


    export default {
        components: {
            Display,
            Keypad
        },

        data: function () {
            return {
                message: 'Welcome',
                stack: [],
                operators: [
                    '+',
                    '-',
                    'x',
                    '/',
                    '=',
                    'C'
                ]
            }
        },

        methods: {
            newNumber: function ($event) {
                if (this.message === 'Welcome') {
                    this.message = '';
                }
                this.message += $event + '';
                this.stack.push(this.parseNumber($event));
            },
            newOperator: function ($event) {
                // Clear
                if ($event === 'C') {
                    this.message = '';
                    this.stack = [];
                }
                // Equate
                else if ($event === '=') {
                    // Handle equation
                    let answer = this.parseMessage();
                    this.stack = [answer];
                    this.message += '\n' + $event + '\n';
                    this.message += this.parseWord(answer);
                }
                // Add symbol to message stack
                else {
                    this.message += '\n' + $event + '\n';
                    this.stack.push($event.trim());
                }
            },
            parseMessage: function () {
                let expression = this.stack.join('');
                console.log(expression);

                return evaluate(expression);
            },
            parseNumber: function (numberString) {
                return wordsToNumbers(numberString.trim());
            },
            parseWord: function (integer) {
                return numWords(integer);
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