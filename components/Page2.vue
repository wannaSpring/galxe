<template>
  <div class="decoration page2">
    <div class="text">
      <div class="title">Build Your Dream Community with Galxe</div>
      <div class="desc">The only platform with all your need for building a better community</div>
    </div>
    <Collapse />
  </div>
</template>

<script>
import Collapse from './Collapse.vue'

export default {
  name: 'Page2',
  components: {Collapse},
}
</script>

<style lang="css" scoped>
.page2 {
  height: 1092px;
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
  background: linear-gradient(90.11deg, #1E5DFF 34.39%, #CB96EB 47.78%, #EC7F3C 57.15%),
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

.page2 .text .title {
  font-size: 32px;
}

</style>



