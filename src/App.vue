<template>
  <div id="app" class="container">
    <div id="nav">
      <nav class="navbar navbar-expand-sm navbar-light">
        <a class="navbar-brand" href="/">
          <img src="http://zyven.oss-cn-beijing.aliyuncs.com/svg/favicon.ico" alt="Zyven" class="header-link rounded-circle">
          Nonsenser
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarToggler">
          <ul class="navbar-nav mr-auto mt-2 mt-sm-0">
            <li class="nav-item active">
              <a class="nav-link" href="/#/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#/about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-sm-0">
            <div class="header-link-wrapper">

            <a href="https://github.com/Nonsensersunny">
              <img src="http://zyven.oss-cn-beijing.aliyuncs.com/svg/github.svg" alt="GitHub" class="header-link">
            </a>
            <a href="https://twitter.com/ZyvenZhao">
              <img src="https://zyven.oss-cn-beijing.aliyuncs.com/svg/twitter.svg" alt="Twitter" class="header-link">
            </a>
            <a href="http://music.163.com/#/user/home?id=266504423">
              <img src="http://zyven.oss-cn-beijing.aliyuncs.com/svg/netease-music.png" alt="Netease" class="header-link">
            </a> </div>
          </form>
        </div>
      </nav>
      <hr>
    </div>
    <router-view/>
    
  </div>
</template>
<script>
export default {
  components: {
    
  }
}
</script>

<style lang="stylus">
#app
  height 100%
  scroll-behavior none
  text-align center
  nav
    border-bottom-left-radius 10px
    border-bottom-right-radius 10px
  nav:hover 
    background-color #222
    opacity 0.5
  nav:hover a 
    color #999
  nav:hover a:hover  
      color #fff
  a     
    color #555
    .header-link 
      width 25px
      margin-left 20px
      border-radius 5px
    &:hover 
      color black
    @media screen and (max-width: 600px) 
      .header-link
        margin-left 50px
</style>
