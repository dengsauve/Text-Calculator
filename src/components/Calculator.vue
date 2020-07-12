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

    export default {
        components: {
            Display,
            Keypad
        },
        data: function () {
            return {
                message: 'Welcome',
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
                    let answer = this.parseMessage();
                    this.message += '\n' + $event + '\n';
                    this.message += answer;
                }
                // Add symbol to message stack
                else {
                    this.message += '\n' + $event + '\n';
                }
            },
            parseMessage: function () {
                let lineArray = this.message.split('\n');
                console.log(lineArray);

                let numberOne = null;
                let numberTwo = null;
                let operate = false;
                let operator = null;

                // Parse the stack
                for (let line of lineArray) {

                    // Handle the operators
                    if (this.operators.includes(line)) {
                        console.log('operator');
                        operate = true;
                        operator = line;
                        continue;
                    }

                    // Handle the numbers
                    else {
                        console.log('number');
                        if (numberOne === null) {
                            numberOne = this.parseNumber(line);
                        } else {
                            numberTwo = this.parseNumber(line);
                        }
                        console.log('numberOne', numberOne, 'numberTwo', numberTwo);
                    }

                    // Perform the operation if appropriate
                    if (operate) {
                        let result = this.operate(numberOne, numberTwo, operator);
                        return Object.keys(this.numbers).find(key => this.numbers[key] === result);
                        // operator = null;
                        // operate = false;
                    }
                }
            },
            parseNumber: function (numberString) {
                return wordsToNumbers(numberString.trim());
            },
            operate: function (numberOne, numberTwo, operator) {
                switch (operator) {
                    case '+':
                        return numberOne + numberTwo;
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