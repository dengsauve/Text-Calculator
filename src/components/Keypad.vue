<template>
    <div class="keypad">
        <number-pad/>
        <operators-pad/>
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

        name: "Keypad"
    }
</script>

<style scoped>
    div.keypad {
        margin-top: 15px;
    }
</style>