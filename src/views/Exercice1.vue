<template>
    <model-viewer src="/3dModels/bizep_curls.glb"
        camera-controls 
        touch-action="pan-y" 
        autoplay="true" 
        shadow-intensity="1"
        camera-orbit="0deg 75deg"
    ></model-viewer>
    <div class="infobox-container">
        <h1 class="title">Bizep Curl</h1>
        <p>- Test</p>
    </div>
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
import '@google/model-viewer'

export default {
    data () {
        return {
            timer: ref(30),
            unit: 'Seconds',
            timerInterval: null
        }
    },
    setup() {
        const timer = ref(30)
        const router = useRouter()
        const timerInterval: any = null

        return {
            timer,
            timerInterval
        }
    },
    mounted() {
        this.timerInterval = setInterval(() => {
            this.timer--
            this.check()
        }, 1000);
    },
    methods: {
        srvTime() {
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
        check() {
            if (this.timer === 0) {
                clearInterval(this.timerInterval)
                this.$router.push('break')
            }
        }
  },
}
</script>

<style src="@/assets/timer.scss"></style>
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
    // dynamic font size using window size
    font-size: 16vw;

    z-index: 1;
    font-family: 'Roboto', sans-serif;
    white-space: nowrap;
    line-height: 1.5;
}

.timer-container {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, 0%);

    z-index: 3;
}

.infobox-container {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: left;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);

    z-index: 0;
}

.infobox-container p {
    font-size: 2.5vw;
    font-family: 'Roboto', sans-serif;
    width: 80%;
}


// if landscape mode, infoxox is on the left side and model-viewer on the right side
@media (orientation: landscape) {
    model-viewer {
        width: 50vw;
        height: 100vh;

        top: 50%;
        right: 0%;
        transform: translate(0%, -50%);
    }

    .infobox-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 5vw;
        
        top: 35%;
        left: 0%;
        transform: translate(0%, -50%);

        width: 50vw;
    }

    .title {
        font-size: 8vw;
    }

    .infobox-container p {
        font-size: 1.5vw;
        width: 95%;
    }
}

@media (orientation: portrait) {
    .infobox-container {
        padding-left: 0;

        top: 5%;
        left: 50%;
        transform: translate(-50%, 0%);
    }

    .title {
        font-size: 16vw;
    }

    .infobox-container p {
        font-size: 1rem;
        width: 95%;
    }

    model-viewer {
        width: 100vw;
        height: 50vh;
        
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}

</style>
