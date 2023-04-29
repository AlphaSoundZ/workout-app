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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa necessitatibus accusamus perferendis consectetur in consequatur adipisci beatae at provident asperiores nostrum aliquid illo ipsa, voluptates architecto, voluptatem quidem. Quo, magni.</p>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import '@google/model-viewer'

export default {
    data () {
        return {
        }
    },
    setup() {
    },
    mounted() {
    },
    methods: {
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
