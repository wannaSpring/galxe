<template>
  <div class="decoration page4">
    <div class="containerWrap">
      <div class="left">
        <div class="text">
          <div class="title"><span>All the</span> <span>Rewards</span> <span>that Your Community Deserves</span> </div>
          <div class="desc">Community is what makes web3. You can reward your community and contributors with a variety of
            rewards, from tokens to loyalty points, from achievements to reputation.</div>
        </div>
        <div class="imageWrap">
          <RadioList />
        </div>
      </div>
      <div class="right">
        <Reward />
      </div>
    </div>
  </div>
</template>

<script>
import RadioList from './svg/RadioList.vue'
import Reward from './svg/Reward.vue'

export default {
  name: 'Page4',
  components: {
    RadioList,
    Reward
  },
}
</script>

<style lang="less" scoped>
.page4 {
  height: 980px;
}


.decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

}

.containerWrap {
  width: 1280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}

.left {
  width: 589px;
}

.right {
  width: 640px;
}

.text {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* 左对齐 */
  flex-direction: column;
}

.text .title {
  font-size: 64px;
  font-family: Mona-Sans;
  font-weight: 800;
  line-height: 56px;
  text-align: left;
  font-size: 48px;
  span {
    color: white;

  }
  span:nth-child(2) {
    color: #1E5DFF;
    background: linear-gradient(90.11deg, #1E5DFF 34.39%, #CB96EB 47.78%, #EC7F3C 57.15%),
      linear-gradient(0deg, #FFFFFF, #FFFFFF);
    -webkit-background-clip: text;
    color: transparent;
  }


}

.text .desc {
  margin-top: 20px;
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 159.72%);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 24px;
  text-align: left;
  /* 左对齐 */
  width: 100%;
  /* 自动适应父元素宽度 */
}

.imageWrap {
  margin-top: 48px;
}
</style>



