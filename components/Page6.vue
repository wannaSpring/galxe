<!-- Please remove this file from your project -->
<template>
  <div class="decoration Page6">
    <div class="containerWrap">
      <div class="textWrap">
        <div class="text">
          <div class="title">Stellar Stories from Top Brands</div>
          <div class="desc">Don’t just take our word for it. Hear it from the industry’s leading projects and their
            community success stories on Galxe.</div>
        </div>
        <el-button class="caseBtn" round><span>All Case Studies <Jump/></span></el-button>
      </div>
      <div class="imgWrap"><img src="@/assets/Cases.png" alt="Image" /></div>
    </div>
  </div>
</template>

<script>
import Jump from './svg/Jump.vue'
export default {
  name: 'Page6',
  components: {Jump},
}
</script>

<style lang="css" scoped>
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
  background: linear-gradient(90.27deg, #1E5DFF 27.32%, #CB96EB 38.39%, #EC7F3C 46.12%),
    linear-gradient(0deg, #FFFFFF, #FFFFFF);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 48px;
}

.text .desc {
  margin-top: 20px;
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 159.72%);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 14px;
  text-align: center;
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


}
.caseBtn span {
  display: flex;
  align-items: center;
  justify-content: center;
}
.caseBtn span svg{
  margin-left: 8px;
  display: inline-block;
}
</style>



