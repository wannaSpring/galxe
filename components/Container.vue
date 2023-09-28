<!-- Please remove this file from your project -->
<template>
  <div class="wrap">
    <Page1 />
    <Page2 />
    <Page3 />
    <Page4 />
    <Page5 />
    <Page6 />
    <Page7 />
  </div>
</template>

<script>
import Page1 from './Page1.vue'
import Page2 from './Page2.vue'
import Page3 from './Page3.vue'
import Page4 from './Page4.vue'
import Page5 from './Page5.vue'
import Page6 from './Page6.vue'
import Page7 from './Page7.vue'

export default {
  name: 'Container',
  components: { Page1, Page2, Page3, Page4, Page5, Page6, Page7 },
}
</script>

<style lang="css" scoped>
.wrap {
  position: relative;
  background-color: #000000;
  overflow: hidden
  /* width: 100vw; */
}

</style>



