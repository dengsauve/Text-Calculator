<template>
    <div class="operators-pad">
        <div class="row" v-for="(button, idx) in buttons" :key="idx">
            <operator-button :title="button"
                             v-on:operator-stack="operatorPressed($event)"/>
        </div>
    </div>
</template>

<script>
    import OperatorButton from "./OperatorButton";

    export default {
        components: {
            'operator-button': OperatorButton
        },

        name: "OperatorsPad",

        data: function () {
            return {
                buttons: [
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
            operatorPressed: function ($event) {
                this.$emit('operator-stack', $event);
            }
        }
    }
</script>

<style scoped>
    div.operators-pad {
        display: inline-block;
        vertical-align: top;
        float: right;
    }

    div.row {
        margin-bottom: 10px;
    }

    div.row:last-of-type {
        margin-bottom: 0;
    }
</style>