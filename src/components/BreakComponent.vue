<template>
    <h1 class="break">Break</h1>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    data () {
        return {
        }
    },
    methods: {
    }
}
</script>

<style src="@/assets/timer.scss"></style>
<style lang="scss">

.break {
    // dynamic font size using window size
    font-size: 16vw;

    z-index: 1;
    font-family: 'Roboto', sans-serif;
    white-space: nowrap;
    line-height: 1.5;

    // center
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>