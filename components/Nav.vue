<!-- Please remove this file from your project -->
<template>
  <div class="nav">
    <el-menu :default-active="activeIndex2" class="el-menu-demo flex " mode="horizontal" @select="handleSelect"
      background-color="#060808" text-color="#fff" active-text-color="#ffd04b">
      <div class="logo"><img class="logo" src="@/assets/Galxe.svg" alt="" /></div>
      <el-submenu index="1">
        <template slot="title">Explore</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">Spaces</el-menu-item>
      <el-menu-item index="3">Solutions</el-menu-item>

      <el-submenu index="4">
        <template slot="title">Galxe ID</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">Protocol</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">More</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
    <div class="operations">
      <el-button class="lanuch" round>+ Launch Campaign</el-button>
      <el-button round class="eth">ETHEREUM</el-button>
      <el-avatar class="icon" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      <el-button circle class="icon">
        <span class="iconNote">
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.02729 15H12.9688C12.9688 16.6407 11.6387 18 9.99802 18C8.35733 18 7.02729 16.6407 7.02729 15Z"
              fill="url(#paint0_linear_3983_147)" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M11.4506 2.17221C14.1525 2.82519 16.1595 5.25897 16.1595 8.16152V9.30741C16.1595 9.49293 16.1948 9.67675 16.2636 9.84906L17.4315 12.7759C17.6655 13.3625 17.2335 14 16.602 14H3.39396C2.76245 14 2.33043 13.3625 2.56448 12.7759L3.73239 9.84906C3.80115 9.67675 3.83647 9.49293 3.83647 9.30741V8.16152C3.83647 5.25875 5.84377 2.82481 8.54602 2.17206C8.68986 1.50217 9.28543 1 9.99829 1C10.7112 1 11.3068 1.50225 11.4506 2.17221Z"
              fill="url(#paint1_linear_3983_147)" />
            <defs>
              <linearGradient id="paint0_linear_3983_147" x1="9.99802" y1="15" x2="9.99802" y2="18"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0.6" />
              </linearGradient>
              <linearGradient id="paint1_linear_3983_147" x1="9.99831" y1="0.0714285" x2="9.99831" y2="14"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="white" />
                <stop offset="1" stop-color="#C7C7C7" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </el-button>
      <el-button circle class="iconInh5 icon">
        <span class="iconNote">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Navigation/MwebMenu">
              <path id="Union" fill-rule="evenodd" clip-rule="evenodd"
                d="M3 5C3 4.72386 3.22386 4.5 3.5 4.5H20.5C20.7761 4.5 21 4.72386 21 5C21 5.27614 20.7761 5.5 20.5 5.5H3.5C3.22386 5.5 3 5.27614 3 5ZM3 12.0625C3 11.7518 3.25184 11.5 3.5625 11.5H20.4375C20.7482 11.5 21 11.7518 21 12.0625C21 12.3732 20.7482 12.625 20.4375 12.625H3.5625C3.25184 12.625 3 12.3732 3 12.0625ZM3.5625 18.5C3.25184 18.5 3 18.7518 3 19.0625C3 19.3732 3.25184 19.625 3.5625 19.625H20.4375C20.7482 19.625 21 19.3732 21 19.0625C21 18.7518 20.7482 18.5 20.4375 18.5H3.5625Z"
                fill="white" />
            </g>
          </svg>

        </span>
      </el-button>
    </div>
  </div>
</template>

<script>



export default {
  name: 'Nav',
}
</script>

<style lang="less" scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #060808;
  height: 80px;
  padding: 0 72px;

  @media screen and (max-width: 414px) {
    padding: 0 28px;
  }
}

.el-menu-demo {
  display: flex;
  align-items: center;
  height: 80px;

  /* justify-content: center; */
  @media screen and (max-width: 900px) {

    .el-submenu,
    .el-menu-item {
      display: none;
    }
  }


}

@media screen and (max-width: 414px) {

  .lanuch,
  .eth {
    display: none;
  }
}

@media screen and (min-width: 415px) {
  .iconInh5 {
    display: none;
  }
}

@media screen and (max-width: 414px) {
  .iconInh5 {
    display: inline-block;
    .iconNote{
      margin-top: -7px;
    }
  }
}

.logo {
  padding-right: 24px;
}

.operations {
  display: flex;
  align-items: center;
  justify-content: center;
}

.lanuch {
  border-color: rgba(0, 87, 255, 1);
  color: rgba(0, 87, 255, 1);
  background-color: transparent;
}

.eth {
  background-color: rgba(255, 255, 255, 0.1);
  color: rgba(206, 211, 219, 1);
  border-color: transparent;
}

.icon {
  width: 36px;
  height: 36px;
  border-color: transparent;
  display: flex-inline-block;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
  background-color: rgba(255, 255, 255, 0.1);
}

.iconNote {
  width: 20px;
  height: 20px;
  display: inline-flex;
  margin: -4px 0 0 -5px;
}</style>
