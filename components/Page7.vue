<!-- Please remove this file from your project -->
<template>
  <div class="decoration Page7">
    <div class="text">
      <div class="title">Your Web3 Community is Waiting</div>
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
  </div>
</template>

<script>
export default {
  name: 'Page7',
}
</script>

<style lang="less" scoped>
.Page7 {
  height: 621px;
  background-image: url('@/assets/bg.png');
  /* 指定背景图片的路径 */
  background-size: cover;
  /* 背景图片铺满整个容器 */
  background-position-y: 40px;
  background-repeat: no-repeat;
}


.decoration {
  display: flex;
  flex-direction: column;
  padding: 0 320px;

  @media screen and (max-width: 900px) {
    padding: 0 48px;
  }
}

.text {
  // width: 758px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.text .title {
  color: rgba(255, 255, 255, 1);

  font-family: Mona-Sans;
  font-size: 56px;
  font-weight: 800;
  line-height: 72px;
  letter-spacing: 0em;
  text-align: center;

  @media screen and (max-width: 414px) {
    color: white;
    font-size: 32px;
    font-family: Mona-Sans;
    font-weight: 800;
    line-height: 40px;
    word-wrap: break-word
  }

}

.start {
  margin-top: 64px;
  width: 100%;
  height: 100%;
  position: relative;
  left: 44%;
  @media screen and (max-width: 414px) {
    left: 20%;

  }
}
</style>



