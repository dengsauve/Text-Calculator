<template>
    <div class="keypad">
        <number-pad v-on:number-stack="numberPressed($event)"/>
        <operators-pad v-on:operator-stack="operatorPressed($event)"/>
    </div>
</template>

<script>
    import NumberPad from "./NumberPad";
    import OperatorsPad from "./OperatorsPad";

    export default {
        components: {
            'number-pad': NumberPad,
            'operators-pad': OperatorsPad,
        },

        name: "Keypad",

        methods: {
            numberPressed: function ($event) {
                this.$emit('number-stack', $event);
            },
            operatorPressed: function ($event) {
                this.$emit('operator-stack', $event);
            }
        }
    }
</script>

<style scoped>
    div.keypad {
        margin-top: 15px;
    }
</style>