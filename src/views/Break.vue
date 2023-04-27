<template>
    <h1 class="break">Break</h1>
    <div class="timer-container">
        <button class="button" >
            {{ timer + ' ' + unit}}
        <svg width="79" height="46" viewBox="0 0 79 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_618_1123)">
            <path d="M42.9 2H76.5L34.5 44H2L42.9 2Z" fill="url(#paint0_linear_618_1123)"/>
        </g>
        <defs>
            <filter id="filter0_f_618_1123" x="0" y="0" width="78.5" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_618_1123"/>
            </filter>
            <linearGradient id="paint0_linear_618_1123" x1="76.5" y1="2.00002" x2="34.5" y2="44" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.6"/>
            <stop offset="1" stop-color="white" stop-opacity="0.05"/>
            </linearGradient>
        </defs>
        </svg>
        </button>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    data () {
        return {
            timer: ref(0),
            unit: 'Seconds'
        }
    },
    setup() {
        const timer = ref(15)
        const router = useRouter()
        const timerInterval = setInterval(() => {
            timer.value--
    
            if (timer.value === 0) {
                clearInterval(timerInterval)
    
                // go to next exercice
                router.push({ path: '1' })
            }
        }, 1000)

        return {
            timer
        }
    },
    mounted() {
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

.timer-container {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, 0%);

    z-index: 3;
}
</style>