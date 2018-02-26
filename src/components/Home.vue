<template>
  <div class="home" style="padding-top:40px">
    <div class="top">
      <div class="head clearfix wrapper">
        <a href="/landz-portal" title="logo" class="logo">
          <img src="../assets/images/logo.png" />
        </a>
        <ul class="nav">
          <li><a href="/landz-portal">首页</a></li>
          <li v-if="rootAuths.se_proj == '1'"><a href="/landz-project">一手项目</a></li>
          <li v-if="rootAuths.se_house == '1'"><a href="/landz-house">房源</a></li>
          <li v-if="rootAuths.se_oversea_house == '1'"><a href="/landz-oversea-house" title="" >海外房产</a></li>
          <li v-if="rootAuths.se_customer == '1'"><a href="/landz-customer">客源</a></li>
          <li v-if="rootAuths.se_cust == '1'"><a href="javascript:void(0)" @click="toOldSE">SE</a></li>
          <li v-if="rootAuths.se_sign == '1'"><a href="javascript:void(0)" @click="toOldContract">签约</a></li>
          <li v-if="rootAuths.se_one_contract == '1'">
            <router-link :to="{name:'BookSignList'}" :class="actives==1?'active':''">一手签约</router-link>
          </li>
          <li v-if="rootAuths.se_finance == '1'">
            <router-link :to="{name:'CollecManList'}" :class="actives==2?'active':''">财务</router-link>
          </li>
          <li><a href="/landz-portal/feekback">问题反馈</a></li>
        </ul>
        <ul class="one">
          <li>{{result.employeeName|def}}</li>
          <li><a class="letter" href="/landz-msg" title=""></a>
            <b v-if="isMsg" style="position:absolute;top:6px;right:-6px;width:13px;height:13px;border-radius:100%;background:red;cursor:pointer;"></b>
          </li>
          <li><a href="/landz-one-contract/account/logout" title="">退出</a></li>
        </ul>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        actives: 1
      }
    },
    watch: {
      '$route' (to, from) {
//        if (to.matched[1].path === '/exhibit' || to.matched[1].path === '/sign' || to.matched[1].path === '/contractDetail') {
//          this.actives = 1
//        } else {
//          this.actives = 2
//        }
      }
    },
    mounted: function () {
      let _sceneStyle = document.getElementById('app-scene-style')
      _sceneStyle.parentNode.removeChild(_sceneStyle)
      let _sceneNav = document.getElementById('app-scene-nav')
      _sceneNav.parentNode.removeChild(_sceneNav)
      let _sceneLoading = document.getElementById('app-scene-loading')
      _sceneLoading.parentNode.removeChild(_sceneLoading)
      if (this.$route.matched.length < 2) return true
      if (this.$route.matched[1].path === '/exhibit' || this.$route.matched[1].path === '/sign' || this.$route.matched[1].path === '/contractDetail') {
        this.actives = 1
      } else {
        this.actives = 2
      }
    },
    methods: {
      toOldSE() {
        let that = this
        that.$axios.post('/landz-one-contract/account/getOldSeflag', {}, {fullscreen: true}).then(function (response) {
          if (response.data.code === '200') {
            console.log(response)
            window.open('http://se.landzestate.com/index.php?r=public/dologin&username=' + response.data.result.userCode + '&password=' + response.data.result.userPWD + '&type=1')
          } else {
            that.$alert(response.data.msg, '提示')
          }
        })
      },
      toOldContract() {
        let that = this
        that.$axios.post('/landz-one-contract/account/getOldSeflag', {}, {fullscreen: true}).then(function (response) {
          if (response.data.code === '200') {
            console.log(response)
            window.open('http://se.landzestate.com/index.php?r=public/dologin&username=' + response.data.result.userCode + '&password=' + response.data.result.userPWD + '&type=2')
          } else {
            that.$alert(response.data.msg, '提示')
          }
        })
      }
    },
    computed: {
      result () {
        return this.$store.getters.getUserInfo
      },
      rootAuths () {
        return this.$store.getters.getRootAuths
      },
      isMsg () {
        return this.$store.getters.getMsgNum
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    margin: 0;
    padding: 0;
  }
</style>
