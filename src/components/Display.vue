<template>
    <div class="calculator-display">
        <span class="display-text">Welcome</span>
    </div>
</template>

<script>
    export default {
        name: "Display",
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
        display: block;
        font-family: "Andale Mono", monospace;
        font-size: 20px;
    }
</style>