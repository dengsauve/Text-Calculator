<template>
    <div class="number-pad">

        <div class="row">
            <number-button title="one"/>
            <number-button title="two"/>
            <number-button title="three"/>
        </div>
        <div class="row">
            <number-button title="four"/>
            <number-button title="five"/>
            <number-button title="six"/>
        </div>
        <div class="row">
            <number-button title="seven"/>
            <number-button title="eight"/>
            <number-button title="nine"/>
        </div>
        <div class="row">
            <number-button title="ten"/>
            <number-button title="eleven"/>
            <number-button title="twelve"/>
        </div>
        <div class="row">
            <number-button title="thirteen"/>
            <number-button title="fourteen"/>
            <number-button title="fifteen"/>
        </div>
        <div class="row">
            <number-button title="sixteen"/>
            <number-button title="seventeen"/>
            <number-button title="eighteen"/>
        </div>
        <div class="row">
            <number-button title="nineteen"/>
            <number-button title="twenty"/>
            <number-button title="thirty"/>
        </div>
        <div class="row">
            <number-button title="forty"/>
            <number-button title="fifty"/>
            <number-button title="sixty"/>
        </div>
        <div class="row">
            <number-button title="seventy"/>
            <number-button title="eighty"/>
            <number-button title="ninety"/>
        </div>
        <div class="row">
            <number-button title="hundred"/>
            <number-button title="thousand"/>
            <number-button title="million"/>
        </div>


    </div>
</template>

<script>
    import NumberButton from "./NumberButton";

    export default {
        components: {
            'number-button': NumberButton
        },

        name: "number-pad"
    }
</script>

<style scoped>
    div.row {
        margin-bottom: 10px;
    }

    div.row:last-of-type {
        margin-bottom: 0;
    }

    div.number-pad {
        display: inline-block;
    }
</style>