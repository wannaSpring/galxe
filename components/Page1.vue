<template>
  <div class="page1Wrap">
    <div id="player-container" ref="playerContainer" />
    <div class="decoration page1">
      <div class="text">
        <div class="title">Your Web3 Community is Waiting</div>
        <div class="desc">Build and grow your Web3 community the authentic way. Reach, reward, and engage with millions
          of
          Web3 users
          through Galxe’s no-code solution and loyalty programs.</div>
      </div>
      <div class="dataCaseWrap">
        <div class="dataCase">
          <div class="title">2.6K</div>
          <div class="desc">Trusted brands </div>
        </div>
        <div class="dataCase">
          <div class="title">2.6K</div>
          <div class="desc">Trusted brands </div>
        </div>
        <div class="dataCase">
          <div class="title">2.6K</div>
          <div class="desc">Trusted brands </div>
        </div>
        <div class="dataCase">
          <div class="title">2.6K</div>
          <div class="desc">Trusted brands </div>
        </div>
      </div>
      <el-button class="start" round>Get Started</el-button>
      <div class="logolist">
        <LogoList />
      </div>
    </div>
  </div>
</template>

<script>
import LogoList from './svg/LogoList.vue'

let player = null;
export default {
  name: 'Page1',
  components: { LogoList },
  data() {
    return {
      app: null,
      loader: null,
    }
  },

  methods: {
    changeAnimation() {
      console.log(player, 'player')
      // player.pause();
    },
    initSpine() {
      player = new spine.SpinePlayer("player-container", {
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

      setTimeout(() => {
        player.skeleton.scaleX = 1.25
      }, 400);


    },
    drawPixi() {
      let PIXI

      if (process.browser) {
        PIXI = require('pixi.js')
        // const {Spine} = require('pixi-spine')
        const playerContainer = this.$refs.playerContainer
        const width = window.innerWidth
        const height = window.innerHeight
        this.app = new PIXI.Application(width, height, { transparent: false })
        playerContainer.appendChild(this.app.view)
        this.loader = new PIXI.loaders.Loader();
        this.loader.add('/mySpine/solution_page_1.json')
      }
      // var canvas = document.getElementById('player-container')

      // const app = new PIXI.Application({
      //   width: window.innerWidth,
      //   height: window.innerHeight,
      //   antialias: true,
      //   transparent: true,
      //   view: canvas,
      // })

      // let graphics = new PIXI.Graphics()
      // graphics.lineStyle(8, 0x000000)

      // //start
      // graphics.moveTo(300, 250)
      // //end
      // graphics.lineTo(500, 250)

      // app.stage.addChild(graphics)
    },
  },
  mounted() {
    // this.drawPixi()
    this.initSpine()
  },
}
</script>

<style lang="css" scoped>
.page1Wrap {
  /* width: 1920px; */
  height: 1289px;
  padding-top: 20%;
}

.decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.page1 {
  position: absolute;
  left: 0;
  padding-top: 24%;
  top: 0;
}

.text {
  width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.text .title {
  background: linear-gradient(90.11deg, #1E5DFF 34.39%, #CB96EB 47.78%, #EC7F3C 57.15%),
    linear-gradient(0deg, #FFFFFF, #FFFFFF);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 48px;
}

.text .desc {
  margin-top: 40px;
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 159.72%);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 14px;
  text-align: center;
}

.dataCaseWrap {
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dataCaseWrap .dataCase {
  width: 248px;
  height: 120px;
  border-radius: 8px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.01)),
    linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05));
  transition: 'all 0.3s',

}

.dataCaseWrap .dataCase:hover {
  border: 1px solid;
  border-image-source: linear-gradient(100.03deg, rgba(38, 96, 254, 0.08) 7.98%, rgba(212, 144, 189, 0.38) 39.39%, rgba(233, 129, 75, 0.06) 73.51%);
  background: linear-gradient(99.12deg, rgba(38, 86, 254, 0.3) -7.07%, rgba(255, 148, 95, 0.06) 45.38%, rgba(227, 163, 255, 0.3) 95.01%),
    linear-gradient(100.03deg, rgba(38, 96, 254, 0.08) 7.98%, rgba(212, 144, 189, 0.38) 39.39%, rgba(233, 129, 75, 0.06) 73.51%);


}

.dataCase .title {
  color: rgba(255, 255, 255, 1)
}

.dataCase .desc {
  color: rgba(255, 255, 255, 0.7)
}

.start {
  margin-top: 40px;
  /* width: 202px; */
  font-size: 20px;
  background: linear-gradient(0deg, #000000, #000000),
    linear-gradient(90deg, #1E5DFF 0%, #CB96EB 58.85%, #EC7F3C 100%),
    linear-gradient(97.12deg, rgba(255, 255, 255, 0.7) -8.02%, rgba(255, 255, 255, 0) 29.37%);
  color: rgba(255, 255, 255, 1);

  border: 2px solid;
  /* Set the initial border to be transparent */
  border-style: solid;
  border-image-source:
    linear-gradient(97.12deg, rgba(255, 255, 255, 0.7) -8.02%, rgba(255, 255, 255, 0) 29.37%),
    linear-gradient(90deg, #1E5DFF 0%, #CB96EB 58.85%, #EC7F3C 100%);
  border-image-slice: 1;
  /* Slices the entire image */
  border-image-width: 2px;
  /* Width of the border */
  border-image-outset: 0;
  /* No outset */
}

.logolist {
  margin-top: 200px;
  width: 100%;
}

.logolist svg {
  width: 100%;
}
</style>



