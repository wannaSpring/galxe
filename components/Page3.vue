<template>
  <div class="decoration page3">
    <div class="text">
      <div class="title"><span>No Code</span> <span>Plug and Play</span> </div>
      <div class="desc">Choose from a variety of campaign templates and customize with just a few clicks.</div>
    </div>
    <div class="imgWrap"><img src="@/assets/Content.png" alt="Image" /></div>
    <CardList />
  </div>
</template>

<script>
import CardList from './CardList.vue'

export default {
  name: 'Page3',
  components: { CardList },
}
</script>

<style lang="less" scoped>
.page3 {
  margin-bottom: 320px;
  @media screen and (max-width: 900px) {
    margin-bottom: 150px;
  }
  @media screen and (max-width: 414px) {
    margin-bottom: 72px;
  }
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
  // width: 800px;
  display: flex;
  align-items: center;
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
  @media screen and (max-width: 414px) {
    font-size: 32px;
  }
  span:nth-child(1) {
    color: #1E5DFF;
    background: linear-gradient(90.11deg, #1E5DFF 34.39%, #CB96EB 47.78%, #EC7F3C 57.15%),
      linear-gradient(0deg, #FFFFFF, #FFFFFF);
    -webkit-background-clip: text;
    color: transparent;
  }

  span:nth-child(2) {
    color: white;

  }
}

.text .desc {
  margin-top: 20px;
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 159.72%);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 24px;
  text-align: center;
  @media screen and (max-width: 414px) {
    font-size: 16px;
  }
}


.imgWrap {
  margin-top: 40px;
  width: 100%;

  img {
    width: 100%;

  }
}
</style>



