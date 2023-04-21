<script setup lang="ts">
import { ref } from 'vue'
import '@google/model-viewer'
</script>

<template>
    <model-viewer src="src/assets/bizep_curls.glb"
        camera-controls 
        auto-rotate 
        touch-action="pan-y" 
        autoplay="true" 
        shadow-intensity="1"
        camera-orbit="0deg 75deg"
    ></model-viewer>
    <h1 class="title">Bizep Curl</h1>
  <p class="timer">15 Seconds</p>
</template>

<style lang="scss">
model-viewer {
    /* centered */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    width: 100vw;
    height: 100vh;
    z-index: 2;
    background-color: transparent;
}

.title {
position: absolute;
top: 30%;
left: 50%;
transform: translate(-50%, -50%);

// dynamic font size
font-size: 16vw;

z-index: 1;
font-family: 'Roboto', sans-serif;
white-space: nowrap;
}

.timer {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);

    // dynamic font size
    font-size: 16vw;
    
    z-index: 2;
    font-family: 'Roboto', sans-serif;
    white-space: nowrap;
}

</style>