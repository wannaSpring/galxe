<!-- Please remove this file from your project -->
<template>
  <div>
    <Nav />
    <div id="player-container"></div>
    <div @click="changeAnimation">111</div>
  </div>
</template>

<script>

import Nav from './Nav.vue'
import * as spine from "@esotericsoftware/spine-player";
import "@esotericsoftware/spine-player/dist/spine-player.css";
// import json from '@/assets/solution_page_1.json'
// import atlas from '@/assets/solution_page_1.atlas'


export default {
  name: 'Home',
  components: { Nav, },
  data() {
    return {
      spinePlayer: Object.freeze({}),
    }
  },
  mounted() {
    this.initSpine();
  },
  methods: {
    changeAnimation() {
      console.log(test)

      this.spinePlayer.pause();
    },
    initSpine() {
      var test = new spine.SpinePlayer("player-container", {
        jsonUrl: '/mySpine/solution_page_1.json',
        atlasUrl: '/mySpine/solution_page_1.atlas',
        showControls: false,
        backgroundColor: "#00000000",
        alpha: true,
        animations: ['1'],
        viewport: {
          x: -971.22, y: -563.7, width: 1920.24, height: 1079.68,
          padLeft: 0,
          padRight: 0,
          padTop: 0,
          padBottom: 0,
        },
        fullScreenBackgroundColor: '#000'
      });
    }
  }
}
</script>

<style lang="css" scoped>
#player-container {
  /* width: 100%;
  height: 1068px; */
  /* width: 100%;
  height: 100vh; */
}
</style>



