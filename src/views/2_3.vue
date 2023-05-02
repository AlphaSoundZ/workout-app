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
      title: 'Seitlicher Armstütz mit Leg Lift',
      description: 'Bei der Hälfte die Seite wechseln! \n \n Muskelgruppe: \n Seitliche Bauchmuskelatur, Rumpfmuskelatur \n \n Zu beachten: \n Körper gerade halten, Hüfte anspannen, Knie auf Hüfthöhe \n \n Variationen: \n Lift weglassen \n \n Wiederholungszahl: \n 20-25',
      modelFile: 'plank-right.glb',


      clock: ref(0),
      timer: ref(0),
      roundLength: 60,
      clockInterval: null,
      state: null
    }
  },
  setup () {
    console.log(import.meta.env.BASE_URL)
    const clock = ref(0)
    const clockInterval: any = null
    return {
      clock,
      clockInterval
    }
  },
  async mounted() {
    var date: number = await this.syncTimeDiff();
    
    console.log("date: ", date)

    const breakState = document.getElementById('break') as HTMLElement
    const exerciceState = document.getElementById('exercice') as HTMLElement
    
    // start time interval
    this.clock = Math.ceil(((new Date().valueOf() + date.valueOf())/1000) % this.roundLength)

    await new Promise(resolve => setTimeout(resolve, (this.clock - (((new Date().valueOf() + date.valueOf())/1000) % this.roundLength)) * 1000));

    this.clockInterval = setInterval(() => {
      this.clock = Math.ceil(((new Date().valueOf() + date.valueOf())/1000) % this.roundLength)

      // check if exercice or break
      this.timer = parseInt((this.clock).toFixed(0)) * -1 + this.roundLength + 1

      if (this.timer > 15) {
        // exercice
        this.timer -= 15

        breakState.style.opacity = '0'
        exerciceState.style.opacity = '1'
      } else {
        // break
        breakState.style.opacity = '1'
        exerciceState.style.opacity = '0'
      }

      if (this.clock >= this.roundLength) {
        this.clock = 0
        console.log("round finished", ((new Date().valueOf() + date.valueOf())/1000) % this.roundLength)
      }
    }, 100);
  },
  methods: {
    async syncTimeDiff() {

      try {
          const startDate = new Date();
          const xmlHttp = new XMLHttpRequest();
          xmlHttp.open('HEAD',window.location.href.toString(),false);
          xmlHttp.setRequestHeader("Content-Type", "text/html");
          xmlHttp.send('');
          const result = xmlHttp.getResponseHeader("Date") as string;
          const endDate = new Date();
          const diff = endDate.valueOf() - startDate.valueOf();
          const date = new Date(result).valueOf() + diff/2; // add the difference to get the correct time

          console.log("diff:",diff)
          
          return (date.valueOf() - endDate.valueOf());
      }
      catch (err1) {
        console.log("AJAX not supported, use CPU time");
        return 0;
      }
    },
  },
  components: {
    BreakCompoent,
    Exercice1Component
  }
}
</script>

<template class="view">
  <h3 class="credits">von Emil, Maxim & Jan Jacob</h3>
  <div class="container" id="exercice" style="opacity: 0;">
    <Exercice1Component 
      :modelFile=modelFile 
      :title=title
      :description=description />
  </div>
  <div class="container" id="break" style="opacity: 0;">
    <BreakCompoent/>
  </div>

  <div class="timer-container">
    <button class="button" >
      {{ timer + ' Seconds'}}
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

<style lang="scss">

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
