<template>
    <div class="button">{{ title }}</div>
</template>

<script>
    export default {
        name: "OperatorButton",

        props: [
            'title'
        ]
    }
</script>

<style scoped>
    div.button {
        border: 2px solid steelblue;
        border-radius: 15px;

        width: 25px;

        display: inline-block;
        padding: 10px;

        font-family: "Andale Mono", monospace;
        font-size: 18px;
        text-align: center;

        margin-right: 10px;

        cursor: pointer;
    }

    div.button:hover {
        background-color: aliceblue;
    }

    div.button:active {
        background-color: azure;
    }

    div.button:last-of-type {
        margin-right: 0;
    }
</style>