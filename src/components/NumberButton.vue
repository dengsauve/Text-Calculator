<template>
    <div class="button">{{ title }}</div>
</template>

<script>
    export default {
        name: "NumberButton",

        props: [
            'title'
        ]
    }
</script>

<style scoped>
    div.button {
        border: 2px solid steelblue;
        border-radius: 15px;

        width: 100px;

        display: inline-block;
        padding: 10px;

        font-family: "Andale Mono", monospace;
        font-size: 18px;

        margin-right: 10px;
    }

    div.button:last-of-type {
        margin-right: 0;
    }
</style>