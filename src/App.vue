<template>
   <div id="app">
      <div id="nav">
         <ToggleIcon @navClick="navBar = !navBar" />
         <Navbar :slide="navBar" />
      </div>
      <router-view />
   </div>
</template>

<script>
import Navbar from '@/components/Nav/Navbar'
import ToggleIcon from '@/components/Nav/ToogleIcon'
export default {
  data () {
    return {
      navBar: false
    }
  },
  components: {
    Navbar,
    ToggleIcon
  }
}
</script>
<style lang="scss">
@import url("./assets/css/font.css");
</style>
