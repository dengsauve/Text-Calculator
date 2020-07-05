<template>
    <div class="calculator-display">
        <span class="display-text">{{ message }}</span>
    </div>
</template>

<script>
    export default {
        name: "Display",

        props: [
            'message'
        ]
    }
</script>

<style scoped>
    div.calculator-display {
        height: 300px;
        width: 100%;
        background-color: cadetblue;
        border-radius: 15px;
        box-shadow: 3px 3px 8px 0px #666 inset;
    }

    span.display-text {
        padding: 10px;
        height: 275px;
        display: block;
        font-family: "Andale Mono", monospace;
        font-size: 20px;
        overflow-y: scroll;
    }
</style>