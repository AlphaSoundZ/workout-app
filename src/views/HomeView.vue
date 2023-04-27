<template class="view">
  <div class="container">
    <div class="title-container">
      <h1>core-workout</h1>
      <h3 class="subtitle">von Emil, Maxim und Jan Jacob</h3>
      <h3 class="subtitle">Time: {{ clock }} </h3>
    </div>
    <div class="link-container">
      <RouterLink to="/1">
          <button class='glowing-btn'><span class='glowing-txt'>S<span class='faulty-letter'>T</span>ART</span></button>
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts">

import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  data () {
    return {
      clock: ref(0),
      clockInterval: null,
    }
  },
  setup () {
    const clock = ref(0)
    const clockInterval: any = null
    return {
      clock,
      clockInterval
    }
  },
  async mounted() {
    var date: Date = await this.srvTime();
    const router = useRouter()
    
    console.log("date: ", date)
    
    // start time interval
    this.clock = (date.valueOf()/1000) % 45

    this.clockInterval = setInterval(() => {
      this.clock++

      this.checkInterval();
    }, 1000);
  },
  methods: {
    async srvTime() {
      try {
          //FF, Opera, Safari, Chrome
          const xmlHttp = new XMLHttpRequest();
          xmlHttp.open('HEAD',window.location.href.toString(),false);
          xmlHttp.setRequestHeader("Content-Type", "text/html");
          xmlHttp.send('');
          return new Date(xmlHttp.getResponseHeader("Date") as string);
      }
      catch (err1) {
        console.log("AJAX not supported, use CPU time");
        return new Date();
      }
    },
    checkInterval() {
      if (this.clock >= 45) {
        clearInterval(this.clockInterval)

        // go to break page
        this.$router.push('1')
      }
    }
  },
}
</script>

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

.title-container {
  top: 15%;
}

</style>
<style src="@/assets/glowingBtn.scss"></style>
