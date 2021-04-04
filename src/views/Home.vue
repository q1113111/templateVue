<template>
   <div>
      <b-container fluid class="px-0">
         <swiper :banners="banners"> </swiper>
      </b-container>
      <b-container class="About" fluid>
         <div class="About__wrap">
            <h1 class="About__title">About our Parlor</h1>
            <h3 class="About__tag">WELCOME TO OUR STUDIO</h3>
            <div class="About__txt">
               <p>
                  But the time told that we’ve made a right choice all along and we’ve just hit the apple with that
                  decision!
               </p>
               <p>
                  Shockingly, the tattoos and piercing markets have been wildly unexplored in both South and North
                  Dakotas evenby
               </p>
               <p>
                  1997. That made us the number one location among all the locals, who wanted to make a strong
                  self-expression statement!
               </p>
               <p>
                  So we were very glad as our salon became *the* place for such distinct art forms as tattoos and
                  piercings!
               </p>
            </div>
         </div>
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
          title: 'InkRed',
          date: 'SINCE1998',
          src: './img/banner/banner1.jfif'
        },
        {
          title: 'InkBlue',
          date: 'SINCE1997',
          src: './img/banner/banner2.jfif'
        },
        {
          title: 'InkGreen',
          date: 'SINCE1996',
          src: './img/banner/banner3.jfif'
        },
        {
          title: 'InkWhite',
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

<style lang="scss">
.About {
   text-align: center;
   padding: 50px 20px 100px;
   background: url("../assets/img/bgc/black.jpg") no-repeat center center / cover;
   &__title {
      font-size: 4.5rem;
      color: $white;
      font-weight: 300;
      letter-spacing: 10px;
      margin-bottom: 3rem;
      @include breakpoints-down(lg){
          font-size: 3.5rem;
      }
      @include breakpoints-down(md){
        font-size: 2.5rem;
      }
      @include breakpoints-down(sm){
        font-size: 1.8rem;
      }
   }
   &__tag {
      color: $black;
      font-size: 2.2rem;
      letter-spacing: 5px;
      margin-bottom: 3rem;
      font-weight: 400;
      @include breakpoints-down(lg){
        font-size: 2rem;
      }
            @include breakpoints-down(md){
        font-size: 1.8rem;
      }
      @include breakpoints-down(sm){
        font-size: 1.5rem;
      }
   }
   &__txt {
      font-family: "Dancing Script", cursive;
      font-weight: 900;
      font-size: 1.2rem;
      color: $gray-500;
      letter-spacing: 3px;
      @include breakpoints-down(sm){
        font-size: 1rem;
      }
   }
}
</style>
