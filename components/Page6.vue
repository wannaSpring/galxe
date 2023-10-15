<!-- Please remove this file from your project -->
<template>
  <div class="decoration Page6">
    <div class="containerWrap">
      <div class="textWrap">
        <div class="text">
          <div class="title"><span>Stellar Stories from Top</span> <span>Brands</span> </div>
          <div class="desc">Don’t just take our word for it. Hear it from the industry’s leading projects and their
            community success stories on Galxe.</div>
        </div>
        <el-button class="caseBtn" round><span>All Case Studies
            <Jump />
          </span></el-button>
      </div>
      <div class="imgWrap"><img src="@/assets/Cases.png" alt="Image" /></div>
    </div>
  </div>
</template>

<script>
import Jump from './svg/Jump.vue'
export default {
  name: 'Page6',
  components: { Jump },
}
</script>

<style lang="less" scoped>
.Page6 {
  height: 1260px;
}

.containerWrap {
  width: 1280px;
}


.decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.textWrap {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
}

.text {
  width: 800px;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
}

.text .title {
  font-size: 64px;
  font-family: Mona-Sans;
  font-weight: 800;
  line-height: 56px;
  text-align: center;
  font-size: 48px;

  span:nth-child(1) {
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
}

.Page6 .text .title {
  font-size: 32px;
}

.imgWrap {
  margin-top: 40px
}

.caseBtn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 1);
  border-radius: 24px;

}

.caseBtn span {
  display: flex;
  align-items: center;
  justify-content: center;
}

.caseBtn span svg {
  margin-left: 8px;
  display: inline-block;
}
</style>



