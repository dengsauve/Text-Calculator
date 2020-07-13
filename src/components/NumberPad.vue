<template>
    <div class="number-pad">

        <div class="row" v-for="(row, idx) in buttons.rows" :key="idx">
            <number-button v-for="button in row"
                           :title="button"
                           :key="button"
                           v-on:number-stack="numberPressed($event)"
            />
        </div>

    </div>
</template>

<script>
    import NumberButton from "./NumberButton";

    export default {
        components: {
            'number-button': NumberButton
        },

        name: "number-pad",

        data: function () {
            return {
                buttons: {
                    rows: [
                        ["one", "two", "three"],
                        ["four", "five", "six"],
                        ["seven", "eight", "nine"],
                        ["ten", "eleven", "twelve"],
                        ["thirteen", "fourteen", "fifteen"],
                        ["sixteen", "seventeen", "eighteen"],
                        ["nineteen", "twenty", "thirty"],
                        ["forty", "fifty", "sixty"],
                        ["seventy", "eighty", "ninety"],
                        ["hundred", "thousand", "million"],
                        ["point"]
                    ]
                }
            }
        },

        methods: {
            numberPressed: function ($event) {
                this.$emit('number-stack', $event);
            }
        }
    }
</script>

<style scoped>
    div.row {
        margin-bottom: 10px;
    }

    div.row:last-of-type {
        margin-bottom: 0;
    }

    div.number-pad {
        display: inline-block;
    }
</style>