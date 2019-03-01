<template>
  <div class="container">
    <form class="login-form" novalidate @submit.stop.prevent="login">
      <md-input-container md-has-password>
        <label>Github Personal Token(Press Enter)</label>
        <md-input type="password" v-model="token"></md-input>
      </md-input-container>
    </form>
    <md-button href="https://github.com/settings/tokens/new" target="_blank" class="md-raised md-primary">generate your token</md-button>
  </div>
</template>

<script>
  import * as types from '@/store/types'
  export default {
    name: '',
    data () {
      return {
        msg: '',
        token: ''
      }
    },
    mounted(){
      this.$store.commit(types.TITLE, 'Login');
    },
    methods: {
      login(){
        if (this.token) {
          this.$store.commit(types.LOGIN, this.token)
          let redirect = decodeURIComponent(this.$route.query.redirect || '/');
          this.$router.push({
            path: redirect
          })
        }
      }
    }
  }
</script>
<style lang="stylus" scoped>

</style>
