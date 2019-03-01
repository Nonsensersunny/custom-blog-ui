<template>
  <div class="z-gotop" 
    v-show="status"
    :style="style" 
    @click="gototop">
    <Icon v-if="!options.allowImg" :type="options.allowType" :size="options.size" :color="options.allowColor"></Icon>
  </div>
</template>
<script>
export default {
  props: {
    options: {
      type: Object,
      default: function () {
        return {
          size: 100, 
          allowType: "arrow-up-a",
          allowImg: "https://lizhigongchengyouxiangongsi.oss-cn-beijing.aliyuncs.com/lizhigongcheng/page_imgs/gotop.png",
          bgColor: "#000",
          speed: 40
        }
      }
    }
  },
  data () {
    return {
      style: {
        width: `${this.options.size / 50}rem`,
        height: `${this.options.size / 50}rem`,
        background: this.options.allowImg ? `url(${this.options.allowImg}) 0% 0% / 100% 100%` : this.options.bgColor
      },
      status: false,
      scrollTop: 0,
      timer: null
    }
  },
  mounted () {
    let _t = this;
    window.onscroll = function () {
      _t.scrollTop = document.body.scrollTop ? document.body.scrollTop : document.documentElement && document.documentElement.scrollTop ? document.documentElement.scrollTop : null
      _t.status = _t.scrollTop && _t.scrollTop > 0;
    }
  },
  methods: {
    gototop () {
      let _t = this;
      _t.timer = setInterval(function(){
        _t.scrollTop -= 100
        if (_t.scrollTop < 100) {
          _t.scrollTop = 0;
          _t.status = false;
          clearInterval(_t.timer);
        }
        scrollTo(0, _t.scrollTop)
      }, this.options.speed)
    }
  },
  destroyed () {
    clearInterval(this.timer)
  }
}
</script>