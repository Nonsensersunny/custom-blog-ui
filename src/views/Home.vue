<template>
  <div class="home container">
      <div class="left-panel">
        <zinfo />
      </div>
      <div class="middle-panel">
        <zcontent />
      </div>
      <div class="right-penal">
        <zhitech />
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import zinfo from '@/components/z-info/zinfo'
import zcontent from '@/components/z-content/zcontent'
import zhitech from '@/components/z-hitech/zhitech'
import zgotop from '@/components/z-gotop/zgotop'
export default {
  name: 'home',
  components: {
    zinfo,
    zcontent,
    zhitech,
  }
}
</script>
<style lang="stylus" scoped>
.home 
  @media screen and (min-width: 600px) 
    display flex
    .left-panel 
      flex 0.2
    .middle-panel 
      flex 0.8
    .right-panel 
      flex 0.2
  @media screen and (max-width: 600px) 
    display block
</style>
