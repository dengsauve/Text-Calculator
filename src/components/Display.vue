<template>
    <div class="calculator-display">
        <span class="display-text" id="screen">{{ message }} &marker;</span>
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
        display: flex;
        flex-direction: column-reverse;
        font-family: "Andale Mono", monospace;
        font-size: 20px;
        overflow-y: scroll;
        white-space: pre;
    }

    @keyframes blink {
        from, to {
            color: transparent;
        }
        50% {
            color: black;
        }
    }
</style>