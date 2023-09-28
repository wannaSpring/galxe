<!-- Please remove this file from your project -->
<template>
   <div class="decoration Page7">
    <div class="text">
      <div class="title">Your Web3 Community is Waiting</div>
    </div>
    <el-button class="start" round>Get Started</el-button>
  </div>
</template>

<script>
export default {
  name: 'Page7',
}
</script>

<style lang="css" scoped>
.Page7 {
  height: 621px;
}

.decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.text {
  width: 758px;
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

}

.start {
  margin-top: 40px;
  /* width: 202px; */
  font-size: 20px;
  background: linear-gradient(0deg, #000000, #000000),
    linear-gradient(90deg, #1E5DFF 0%, #CB96EB 58.85%, #EC7F3C 100%),
    linear-gradient(97.12deg, rgba(255, 255, 255, 0.7) -8.02%, rgba(255, 255, 255, 0) 29.37%);
  color: rgba(255, 255, 255, 1);

  border: 2px solid;
  /* Set the initial border to be transparent */
  border-style: solid;
  border-image-source:
    linear-gradient(97.12deg, rgba(255, 255, 255, 0.7) -8.02%, rgba(255, 255, 255, 0) 29.37%),
    linear-gradient(90deg, #1E5DFF 0%, #CB96EB 58.85%, #EC7F3C 100%);
  border-image-slice: 1;
  /* Slices the entire image */
  border-image-width: 2px;
  /* Width of the border */
  border-image-outset: 0;
  /* No outset */
}
</style>



