<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <div class="background-container">
    <div class="gradient"></div>
    <div class="static-background"></div>
  </div>
</template>

<style lang="scss">
RouterView {
  color: #42b983;
  font-weight: bold;
  text-decoration: none;
}

.gradient {
  --size: calc(min(var(--vh, 1vh) * 100, var(--vw, 1vw) * 100) * 1);
  --speed: 5s;
  --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);

  // center the center of the gradient
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: var(--size);
  height: var(--size);
  filter: blur(calc(var(--size) / 5));
  background-image: linear-gradient(hsl(158, 82%, 57%, 85%), hsl(252, 82%, 57%));
  animation: rotate var(--speed) var(--easing) alternate infinite;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;

  z-index: -10;
}

.background-container {
  position: absolute;
  overflow: hidden;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}

.static-background {
  background: rgb(63, 161, 251);
  background-image: linear-gradient(
    142deg,
    rgba(63, 161, 251, 1) 0%,
    rgba(252, 70, 168, 1) 100%
  );
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -11;
}

</style>