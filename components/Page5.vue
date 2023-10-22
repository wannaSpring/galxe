<template>
  <div class="decoration Page5">
    <div class="containerWrap">
      <div class="text">
        <div class="title">And That’s Not It</div>
        <div class="desc">We offer a whole lot more.</div>
      </div>
      <div class="cardListWrap">
        <div class="cardList">
          <div v-for="(item) in list" :key="item.title" class="cardItem">
            <div class="imgWrap"> <img :src="item.imgUrl" alt="Image" /></div>
            <div class="text">
              <div class="title">
                {{ item.title }}
              </div>
              <div class="desc" :style="{ height: !item.isCollapsed ? 'auto' : 0, }">
                {{ item.desc }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Integrated from '@/assets/Integrated.png'
import Build from '@/assets/Build.png'
import Discord from '@/assets/Discord.png'
export default {
  name: 'Page5',
  data() {
    return {
      list: [
        { title: 'Integrated with the best tools', desc: 'Native integrations with Twitter, Telegram, Snapshot, and other existing apps you use.', imgUrl: Integrated },
        { title: 'Build with 25 Blockchains', desc: 'All major layer 1s and layer 2s are available, from EVMs to Cosmos ecosystems.', imgUrl: Build },
        { title: '24/7 Support', desc: 'A team of specialists are ready to help and advise across the global timezones.', imgUrl: Discord },
        { title: 'Co-marketing Programs', desc: 'Galxe has the largest community of web3 explorers, and we always share great projects with them.', imgUrl: Discord },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.Page5 {
  margin-bottom: 320px;

  @media screen and (max-width: 900px) {
    height: auto;
    margin-bottom: 150px;
  }

  @media screen and (max-width: 414px) {
    margin-bottom: 72px;
  }
}


.decoration {
  display: flex;
  flex-direction: row;
}

.containerWrap {
  padding: 0 320px;

  @media screen and (max-width: 900px) {
    padding: 0 48px;
  }
}

.text {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* 左对齐 */
  flex-direction: column;
  width: 100%;
}

.text .title {
  color: rgba(255, 255, 255, 1);
  font-size: 48px;
  text-align: left;
  width: 100%;

  @media screen and (max-width: 414px) {
    font-size: 32px;

  }
}

.text .desc {
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 159.72%);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 24px;
  text-align: left;
  /* 左对齐 */
  width: 100%;
  margin-top: 20px;

  @media screen and (max-width: 414px) {
    font-size: 16px;

  }

  /* 自动适应父元素宽度 */
}

.cardListWrap {
  overflow-x: auto;
  width: 1500px;

  @media screen and (max-width: 414px) {
    width: 500px;

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

  .cardList {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    width: 1679px;

    @media screen and (max-width: 414px) {
      width: 1263px;

    }

  }
}



.cardItem {
  width: 400px;
  height: 548px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-right: 20px;

  @media screen and (max-width: 414px) {
    width: 280px;
    height: auto;

  }
}

.cardItem .imgWrap {
  width: 400px;
  height: 400px;

  @media screen and (max-width: 414px) {
    width: 280px;
    height: 280px;

    img {
      width: 280px;
      height: 280px;
    }
  }
}

.cardItem .text {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* 左对齐 */
  flex-direction: column;
  width: 100%;
}

.cardItem .title {
  font-family: Mona-Sans;
  font-size: 24px;
  font-weight: 800;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(255, 255, 255, 1);
  @media screen and (max-width: 414px) {
    margin-top: 24px;
    font-size: 18px;

  }
}

.cardItem .desc {
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

  color: rgba(255, 255, 255, 0.7);

  @media screen and (max-width: 414px) {
    font-size: 14px;
  }
}
</style>



