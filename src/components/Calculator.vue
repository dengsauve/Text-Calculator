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
                /**
                 * Text that's displayed on the calculator "screen"
                 */
                message: 'Welcome',
                /**
                 * All the numbers and operators given through input
                 */
                stack: [],
                /**
                 * All supported operators
                 */
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
            /**
             * Adds a new number to the display message AND to the stack
             *
             * @param $event
             */
            newNumber: function ($event) {
                if (this.message === 'Welcome') {
                    this.message = '';
                }
                this.message += $event + '';
                this.stack.push(this.parseNumber($event));
            },
            /**
             * Handles any operator buttons that are pushed
             *
             * @param $event
             */
            newOperator: function ($event) {
                // Clear
                if ($event === 'C') {
                    this.message = '';
                    this.stack = [];
                }
                // Equate
                else if ($event === '=') {
                    // Handle equation
                    let answer = this.parseStack();
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
            /**
             * Turns the stack into an expression string and attempts evaluation
             *
             * @returns {*}
             */
            parseStack: function () {
                let expression = this.stack.join('');
                console.log(expression);

                return evaluate(expression);
            },
            /**
             * Takes a name of a number, and returns the number value.
             *
             * @param numberString
             * @returns {string | number}
             */
            parseNumber: function (numberString) {
                if (numberString.includes('point')) {
                    return '.'
                }
                return wordsToNumbers(numberString.trim());
            },
            /**
             * Takes a number, and returns the text name of it.
             *
             * @param integer
             */
            parseWord: function (integer) {
                let integerString = integer.toString();
                if (integerString.includes('.')) {
                    let integerArray = integerString.split('.');
                    return numWords(integerArray[0]) + ' point ' + numWords([integerArray[1]]);
                }
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