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
                message: 'Welcome',
                numbers: {
                    'one': 1,
                    'two': 2,
                    'three': 3,
                    'four': 4,
                    'five': 5,
                    'six': 6,
                    'seven': 7,
                    'eight': 8,
                    'nine': 9,
                    'ten': 10,
                    'eleven': 11,
                    'twelve': 12,
                    'thirteen': 13,
                    'fourteen': 14,
                    'fifteen': 15,
                    'sixteen': 16,
                    'seventeen': 17,
                    'eighteen': 18,
                    'nineteen': 19,
                    'twenty': 20,
                    'thirty': 30,
                    'forty': 40,
                    'fifty': 50,
                    'sixty': 60,
                    'seventy': 70,
                    'eighty': 80,
                    'ninety': 90,
                    'hundred': 100,
                    'thousand': 1000,
                    'million': 1000000,
                },
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
                return this.numbers[numberString.trim()];
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