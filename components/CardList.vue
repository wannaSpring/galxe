<template>
  <div class="cardList">
    <div v-for="item in list" :key="`IconTab${item.id}`" class="cardItem">
      <div>
        <component :is="`IconTab${item.id}`" />
      </div>
      <div class="textWrap">
        <div class="title">{{ item.title }}</div>
        <div class="desc">{{ item.desc }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// 使用 require.context 来导入一系列的组件
const requireComponent = require.context('./svg', false, /IconTab\d\.vue$/);

export default {
  name: 'CardList',
  components: {},
  data() {
    return {
      list: [
        {
          title: 'Bring Your Own Data',
          desc: 'Incorporate your own CSV files, Google Sheets, and API integrations to BYOD (Bring Your Own Data).',
          id: '1',
        },
        {
          title: 'On-chain Footprint',
          desc: 'Connect a subgraph or API to track on-chain footprint automatically.',
          id: '2',
        },
        {
          title: 'Twitter Engagement',
          desc: 'Track engagements such as follow, like, retweet, Twitter Space attendance.',
          id: '3',
        },
        {
          title: 'Discord Activities',
          desc: 'Keep track of Discord roles, AMA attendees, and active members via the Galxe Discord Bot.',
          id: '4',
        },
        {
          title: 'GitHub Contributions',
          desc: 'Identify star developers that contributed to your product.',
          id: '5',
        },
        {
          title: 'Event Participation',
          desc: 'Easily trace attendees across online and offline events through geo-fenced QR codes.',
          id: '6',
        },
        {
          title: 'DAO Voting Status',
          desc: 'Import all voters from your Snapshot.org proposal with a few clicks.',
          id: '7',
        },
        {
          title: 'Verified Individuals',
          desc: 'Sybil prevention credentials protect your community from sybil attacks and annoying bots.',
          id: '8',
        },
      ],
    }
  },
  created() {
    // 使用循环遍历导入的组件并添加到 components 对象中
    requireComponent.keys().forEach(fileName => {
      const componentName = fileName.match(/IconTab(\d)\.vue$/)[1];
      const componentConfig = requireComponent(fileName);
      const componentNameCamelCase = `IconTab${componentName}`;
      // 使用字符串模板将组件添加到 components 对象中
      this.$set(this.$options.components, componentNameCamelCase, componentConfig.default || componentConfig);
    });
  },
};
</script>

<style scoped>
.cardList {
  margin-top: 80px;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  border-radius: 8px;
  width: 1352px;
  height: 760px;
  overflow: hidden;
}

.cardItem {
  width: 338px;
  height: 380px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-width: 0px 1px 1px 0px;
  padding: 0 16px;
  border-style: solid;
  transition: background-color 3s ease;
  background: transparent;
}

.cardItem:hover {

  background: radial-gradient(58.21% 58.21% at 57.97% -27.61%, rgba(142, 147, 255, 0.2) 0%, rgba(142, 147, 255, 0) 100%),
    linear-gradient(319.1deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 38.13%),
    linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05));
  border-width: 0px 1px 1px 0px;
  border-style: solid;
  border-image-source: linear-gradient(319.1deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 38.13%);
}

.title {
  font-family: Mona-Sans;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0em;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  line-height: 68px;
}

.desc {
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: rgba(255, 255, 255, 0.7)
}

/* 样式保持不变 */
</style>
