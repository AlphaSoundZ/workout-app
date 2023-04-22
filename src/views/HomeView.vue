<template class="view">
  <div class="container">
    <div class="title-container">
      <h1>Core-Workout</h1>
      <h3 class="subtitle">von Emil, Maxim und Jan Jacob</h3>
    </div>
    <RouterLink to="/1">
        <button class='glowing-btn'><span class='glowing-txt'>S<span class='faulty-letter'>T</span>ART</span></button>
    </RouterLink>
  </div>
</template>


<style lang="scss">

h1 {
  margin-bottom: 0;
  z-index: 1;
  line-height: 1;
}

h3 {
  margin-top: 5%;
  z-index: 1;
}

:root {
  --glow-color: hsl(186 100% 69%);
}

.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  // center div in body
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}

</style>
<style src="@/assets/glowingBtn.scss"></style>