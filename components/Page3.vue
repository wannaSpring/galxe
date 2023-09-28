<template>
  <div class="decoration page3">
    <div class="text">
      <div class="title">No Code Plug and Play</div>
      <div class="desc">Choose from a variety of campaign templates and customize with just a few clicks.</div>
    </div>
    <div class="imgWrap" ><img src="@/assets/Content.png" alt="Image" /></div>
    <CardList />
  </div>
</template>

<script>
import CardList from './CardList.vue'

export default {
  name: 'Page3',
  components: {CardList},
}
</script>

<style lang="css" scoped>
.page3 {
  height: 2080px;
}


.decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.text {
  width: 800px;
  display: flex;
  align-items: center;
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

.page3 .text .title {
  font-size: 32px;
}

.imgWrap {
  margin-top: 40px
}
</style>



