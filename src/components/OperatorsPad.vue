<template>
    <div class="operators-pad">
        <div class="row">
            <operator-button title="+"/>
        </div>
        <div class="row">
            <operator-button title="-"/>
        </div>
        <div class="row">
            <operator-button title="x"/>
        </div>
        <div class="row">
            <operator-button title="/"/>
        </div>
        <div class="row">
            <operator-button title="="/>
        </div>
        <div class="row">
            <operator-button title="C"/>
        </div>
    </div>
</template>

<script>
    import OperatorButton from "./OperatorButton";

    export default {
        components: {
            'operator-button': OperatorButton
        },

        name: "OperatorsPad",

        methods: {
            operatorPressed: function ($event) {
                this.$emit('operator-stack', $event);
            }
        }
    }
</script>

<style scoped>
    div.operators-pad {
        display: inline-block;
        vertical-align: top;
        float: right;
    }

    div.row {
        margin-bottom: 10px;
    }

    div.row:last-of-type {
        margin-bottom: 0;
    }
</style>