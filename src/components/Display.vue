<template>
    <div class="calculator-display">
        <span class="display-text">{{ message }}<span class="blinking-cursor">&marker;</span></span>
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
        white-space: pre;
    }

    span.blinking-cursor {
        font-size: 30px;
        color: #2E3D48;
        animation: 1s blink step-end infinite;
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