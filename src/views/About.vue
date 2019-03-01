<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <span id="qqLoginBtn"></span> -->
    <zclock />
  </div>
</template>
<script>
  // QC.Login({
  //      btnId:"qqLoginBtn"	//插入按钮的节点id
  // });
import zclock from '@/components/z-clock/zclock'
export default {
  components: {
    zclock
  }
}
</script>
