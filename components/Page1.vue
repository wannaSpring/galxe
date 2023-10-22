<template>
  <div class="page1Wrap">
    <div id="player-container" ref="playerContainer" />
    <div class="decoration page1">
      <div class="text">
        <div class="title"><span>Your</span> <span>Web3 Community</span> <span>is Waiting</span></div>
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
      <div class="start">
        <div
          style="padding-left: 36px; padding-right: 36px; padding-top: 18px; padding-bottom: 18px; left: 0px; top: 13px; position: absolute; background: linear-gradient(86deg, #3C73F4 0%, #CB96EB 50%, #E27D3F 100%); box-shadow: 40px 40px 40px; border-radius: 8px; filter: blur(40px); justify-content: center; align-items: center; gap: 10px; display: inline-flex">
          <div
            style="text-align: center; color: white; font-size: 20px; font-family: Mona-Sans; font-weight: 800; line-height: 28px; word-wrap: break-word">
            Get Started</div>
        </div>
        <div
          style="padding-left: 36px; padding-right: 36px; padding-top: 18px; padding-bottom: 18px; left: 0px; top: 0px; position: absolute; background: black; border-radius: 32px; border: 2px rgba(255, 255, 255, 0.70) solid; justify-content: center; align-items: center; gap: 10px; display: inline-flex">
          <div
            style="text-align: center; color: white; font-size: 20px; font-family: Mona-Sans; font-weight: 800; line-height: 28px; word-wrap: break-word">
            Get Started</div>
        </div>
      </div>
      <div class="logolist">
        <LogoList />
      </div>
    </div>
  </div>
</template>

<script>
import LogoList from './LogoList.vue'

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

<style lang="less" scoped>
.page1Wrap {
  /* width: 1920px; */
  padding-top: 20%;
  position: relative;
  margin-bottom: 320px;

  @media screen and (max-width: 414px) {

    height: 1400px;
  }

  &::before {
    content: '';
    /* 伪元素需要一个内容属性 */
    background-image: url("@/assets/bg1.svg");
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
    width: 100%;
    height: 50%;
    transform: rotate(180deg);
    position: absolute;
    top: 0;
    /* 旋转伪元素，而不影响原始元素 */
  }
}

.decoration {
  display: flex;
  flex-direction: column;
}

.page1 {
  position: absolute;
  left: 0;
  padding-top: 320px;
  top: 0;

}

.text {
  // width: 1280px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 320px;

  @media screen and (max-width: 900px) {
    padding: 0 48px;
  }

  @media screen and (max-width: 414px) {
    padding: 0 16px;
    width: 382px;
  }
}

.text .title {
  font-size: 64px;
  font-family: Mona-Sans;
  font-weight: 800;
  line-height: 56px;
  text-align: center;

  @media screen and (max-width: 414px) {
    font-size: 32px;
  }

  span:nth-child(1) {
    color: white;

  }

  span:nth-child(2) {
    color: #1E5DFF;
    background: linear-gradient(90.11deg, #1E5DFF 34.39%, #CB96EB 47.78%, #EC7F3C 57.15%),
      linear-gradient(0deg, #FFFFFF, #FFFFFF);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 48px;

    @media screen and (max-width: 414px) {
      font-size: 32px;
    }
  }

  span:nth-child(3) {
    color: white;

  }
}

.text .desc {
  margin-top: 40px;
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 159.72%);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 24px;
  text-align: center;
}

.dataCaseWrap {
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 414px) {
    flex-direction: column;
    padding: 0 16px;
  }

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
  backdrop-filter: blur(20px);
  /* 10px是模糊半径，可以根据需要调整 */
  transition: 'all 0.3s';

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 900px) {
    width: 189px;
  }

  @media screen and (max-width: 414px) {
    width: 100% !important;
    margin-right: 0;
    margin-bottom: 8px;
  }
}

.dataCaseWrap .dataCase:hover {
  // background: linear-gradient(99.12deg, rgba(38, 86, 254, 0.3) -7.07%, rgba(255, 148, 95, 0.06) 45.38%, rgba(227, 163, 255, 0.3) 95.01%),
  //   linear-gradient(100.03deg, rgba(38, 96, 254, 0.08) 7.98%, rgba(212, 144, 189, 0.38) 39.39%, rgba(233, 129, 75, 0.06) 73.51%);
  // border: 1px solid;
  border-image-source: linear-gradient(100.03deg, rgba(38, 96, 254, 0.08) 7.98%, rgba(212, 144, 189, 0.38) 39.39%, rgba(233, 129, 75, 0.06) 73.51%);
  background: linear-gradient(99deg, rgba(38, 85.52, 254, 0.30) 1%, rgba(255, 148.39, 94.56, 0.06) 52%, rgba(226.92, 162.56, 255, 0.30) 100%);
  border-radius: 8px;
  border: 1px rgba(38, 96, 254, 0.08), rgba(212, 144, 189, 0.38), rgba(233, 129, 75, 0.06) solid;
  backdrop-filter: blur(20px);
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.dataCase .title {
  color: rgba(255, 255, 255, 1); // 2.6K+
  font-size: 36px;
  font-family: Mona-Sans;
  font-weight: 800;
  line-height: 36px;
  word-wrap: break-word;
  margin-bottom: 8px;
}

.dataCase .desc {
  // Galxe users
  color: rgba(255, 255, 255, 0.70);
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word
}


.start {
  margin-top: 64px;
  width: 100%;
  height: 100%;
  position: relative;
  left: 44%;
  
  cursor: pointer;
  @media screen and (max-width: 414px) {
    left: 30%;
  }
}

.logolist {
  margin-top: 420px;
  width: 100vw;
  overflow-y: auto;
  @media screen and (max-width: 414px) {
    margin-top: 244px;
  }
  &::-webkit-scrollbar {
    width: 12px;
    /* 设置滚动条宽度 */
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    /* 设置滚动条滑块颜色 */
    border-radius: 6px;
    /* 设置滚动条滑块圆角 */
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    /* 设置滚动条轨道颜色 */
  }

}

.logolist svg {
  width: 100%;
}</style>



