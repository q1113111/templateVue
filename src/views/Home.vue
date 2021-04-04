<template>
  <div>
    <b-container fluid class="px-0" >
      <swiper :banners="banners">
      </swiper>
    </b-container>
  </div>
</template>

<script>
import swiper from '@/components/SwiperBanner/Swiper.vue'

export default {
  data () {
    return {
      banners: [
        {
          title: 'InkPink',
          date: 'SINCE1999',
          src: './img/banner/banner.jfif'
        },
        {
          title: 'InkPink',
          date: 'SINCE1998',
          src: './img/banner/banner1.jfif'
        },
        {
          title: 'InkPink',
          date: 'SINCE1997',
          src: './img/banner/banner2.jfif'
        },
        {
          title: 'InkPink',
          date: 'SINCE1996',
          src: './img/banner/banner3.jfif'
        },
        {
          title: 'InkPink',
          date: 'SINCE1995',
          src: './img/banner/banner4.jfif'
        }
      ]
    }
  },
  components: {
    swiper
  }
}
</script>

<style lang="scss" scoped>

</style>
