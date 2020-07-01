<template>
    <div class="keypad">
        <number-pad/>
    </div>
</template>

<script>
    import NumberPad from "./NumberPad";

    export default {
        components: {
            'number-pad': NumberPad,
        },

        name: "Keypad"
    }
</script>

<style scoped>
    div.keypad {
        margin-top: 15px;
    }
</style>