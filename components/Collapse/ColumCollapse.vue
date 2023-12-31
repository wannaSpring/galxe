<template>
  <div class="s-collapse-items">
    <transition-group name="list" tag="ul">
      <div v-for="(item, index) in items" :key="index"
        :class="{ 'collapse-item': true, 'collapse-item-open': !item.isCollapsed }">
        <div class="collapse-item-context">
          <div class="item-header" @click="toggleCollapse(index)">
            {{ item.title }}
            <span :style="{ display: 'inline-block', transform: item.isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)' }">
              <Arrow />
            </span>
          </div>
          <transition name="list">
            <div class="item-content" v-if="!item.isCollapsed">
              {{ item.content }}
            </div>
          </transition>
        </div>
        <div class="collapse-item-image">
          <img :src="item.imageUrl" alt="Image" />
        </div>

      </div>
    </transition-group>
  </div>
</template>

<script>
import Arrow from '../svg/Arrow.vue'
import png1 from '@/assets/Frame119_1.png'
import png2 from '@/assets/Frame119_2.png'
import png3 from '@/assets/Frame119_3.png'
import png4 from '@/assets/Frame119_4.png'
import png5 from '@/assets/Frame119_5.png'
import png6 from '@/assets/Frame119_6.png'

export default {
  components: { Arrow },
  name: 'ColumCollapse',

  data() {
    return {
      imageUrl: '',
      items: [
        {
          title: 'Precise user acquisition', content: 'From on-chain metrics to off-chain engagements, put your product marketing and user growth in auto-pilot mode.', isCollapsed: true,
          imageUrl: png1
        },
        {
          title: 'Streamlined user onboarding', content: 'Educational Learn-to-Experience-to-Earn campaign through quizzes, readings, and on-chain quests to help you improve user onboarding.', isCollapsed: true,
          imageUrl: png2
        },
        {
          title: 'More humans, less bots', content: 'Make sure everyone in your community has a protected Web3 growth, with our sybil-resistant credentials.', isCollapsed: true,
          imageUrl: png3
        },
        {
          title: 'Increase brand awareness', content: 'Blast your brand presence alongside Galxe through native social media integrations.', isCollapsed: true,
          imageUrl: png4
        },
        {
          title: 'Identify loyal users', content: 'Find and reach the most dedicated users with selected credentials within and outside your community.', isCollapsed: true,
          imageUrl: png5
        },
        {
          title: 'Improve user retention', content: 'Launch a long-term loyalty program through continuous & recurring campaigns and incentives.', isCollapsed: true,
          imageUrl: png6
        },
        // Add more items as needed
      ],
    };
  },
  mounted() {
    this.toggleCollapse(0);
  },
  methods: {
    toggleCollapse(index) {
      const findItemIdx = this.items.findIndex(item => !item.isCollapsed);
      if (findItemIdx !== index) {
        this.items.forEach(item => {
          item.isCollapsed = true;
        })
      }
      this.items[index].isCollapsed = !this.items[index].isCollapsed;
    },
  },
  watch: {
    'items': {
      deep: true,
      handler(newItems) {
        // 遍历所有折叠项，如果isCollapsed变为false，执行操作
        newItems.forEach((item, index) => {
          if (!item.isCollapsed) {
            // 当isCollapsed为false时，更新imageUrl为对应的item.imageUrl
            this.imageUrl = item.imageUrl;
            console.log(this.imageUrl)
          }
        });
      },
    },
  },
};
</script>

<style lang="less" scoped>
.list-move,
/* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease !important;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
  position: absolute;
}

.image-collapse {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  margin-top: 52px;
}


.s-collapse-items {
  flex: 1;
  width: 100%;
  ul {
    padding-inline-start: 0;
  }
}

.collapse-item-context {
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.1); */
  color: rgba(255, 255, 255, 1);
  /* height: 76.4px; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* 固定折叠项的宽度 */
  overflow: hidden;
  /* transition: all 0.3s; */
  padding: 32px;
  position: relative;

}

.collapse-item-image {
  display: none;
}

.collapse-item-context::before {
  display: none;
  left: 26px;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  pointer-events: none;
}


.collapse-item-open {
  .collapse-item-context {
    min-height: 96px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 20px;
    border: 1px;
    background: linear-gradient(100.03deg, rgba(38, 96, 254, 0.08) 7.98%, rgba(212, 144, 189, 0.38) 39.39%, rgba(233, 129, 75, 0.06) 73.51%),
      linear-gradient(98.21deg, rgba(42, 38, 254, 0.2) -17.89%, rgba(205, 150, 229, 0.2) 40.78%, rgba(233, 130, 78, 0.04) 94.84%);
    border: 1px solid;
    border-image-source: linear-gradient(100.03deg, rgba(38, 96, 254, 0.08) 7.98%, rgba(212, 144, 189, 0.38) 39.39%, rgba(233, 129, 75, 0.06) 73.51%);
    /* 固定折叠项的宽度 */
    border-radius: 20px;
    overflow: hidden;

  }

  .collapse-item-image {
    margin-top: 48px;
    display: inline-block;
    width: 100%;

    img {
      width: 100%;
      border-radius: 12px;
    }
  }
}


.item-header {
  cursor: pointer;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 24px;
  font-family: Mona-Sans;
  font-weight: 800;
  line-height: 32px;
  word-wrap: break-word;
}

.item-header span {
  transition: all 0.3s
}

.item-content {
  margin-top: 16px;
  overflow: hidden;
  transition: all 3s;
  color: #CED3DB;
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word
}

/* 可以自定义样式以适应你的项目需求 */</style>
