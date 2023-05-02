<script lang="ts">

import { ref } from 'vue'
import { useRouter } from 'vue-router'

// compoments
import BreakCompoent from '@/components/BreakComponent.vue'
import Exercice1Component from '@/components/Exercice1Component.vue'

export default {
  data () {
    return {
      // change this to edit the exercice
    }
  }}
</script>

<template>
  <div class="mano">
    <router-link to="/1_1"><button>1_1</button></router-link>
    <router-link to="/1_2"><button>1_2</button></router-link>
    <router-link to="/1_3"><button>1_3</button></router-link>
    <router-link to="/1_4"><button>1_4</button></router-link>
    <router-link to="/1_5"><button>1_5</button></router-link>
    <router-link to="/1_6"><button>1_6</button></router-link>
    <router-link to="/1_7"><button>1_7</button></router-link>
    <br>
    <router-link to="/2_1"><button>2_1</button></router-link>
    <router-link to="/2_2"><button>2_2</button></router-link>
    <router-link to="/2_3"><button>2_3</button></router-link>
    <router-link to="/2_4"><button>2_4</button></router-link>
    <router-link to="/2_5"><button>2_5</button></router-link>
    <router-link to="/2_6"><button>2_6</button></router-link>
    <router-link to="/2_7"><button>2_7</button></router-link>
</div>
</template>

<style lang="scss">

.mano {
  z-index: 100;
}

.credits {
  position: absolute;
  top: 0;
  right: 0;
  margin: 15px;
  color: --var(text-color);
  font-size: 1.5rem;
  z-index: 1;
}

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

.title-container {
  top: 15%;
}

.timer-container {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, 0%);

    z-index: 3;
} 

</style>
<style src="@/assets/glowingBtn.scss"></style>
