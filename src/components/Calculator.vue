<template>
    <div class="calculator-body">
        <display/>
    </div>
</template>

<script>
import Display from "./Display";
export default {
    components: {Display},
    data: function () {
        return {}
    }
}
</script>

<style scoped>
    div.calculator-body {
        width: 500px;
        height: 1000px;

        border: 3px solid steelblue;
        border-radius: 15px;

        padding: 15px;
    }
</style>