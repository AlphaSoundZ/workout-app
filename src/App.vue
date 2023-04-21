<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <div class="gradient"></div>
</template>

<style lang="scss">
RouterLink {
  color: #42b983;
  font-weight: bold;
  text-decoration: none;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

  z-index: -1;
}

</style>