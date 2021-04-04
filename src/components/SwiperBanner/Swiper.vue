<template>
  <swiper
    class="swiper"
    :options="swiperOption"
    @slideChangeTransitionStart="textShow('')"
    @slideChangeTransitionEnd="textShow('slider__text--show')"
    ref="mySwiper"
  >
    <swiper-slide v-for="(banner, index) of banners"  :key="index">
      <Slider :banner="banner" :dataClass="text"></Slider>
    </swiper-slide>
    <div class="swiper-button-prev"  slot="button-prev"></div>
    <div class="swiper-button-next"  slot="button-next"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import Slider from '@/components/SwiperBanner/Slider'
export default {
  name: 'swiper-banner',
  props: {
    banners: Array
  },
  data () {
    return {
      text: 'slider__text slider__text--show',
      swiperOption: {
        effect: 'fade',
        autoplay: {
          disableOnInteraction: false
        },
        parallax: true,
        speed: 1500,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    Slider
  },
  methods: {
    textShow (val) {
      this.text = 'slider__text ' + val
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper {
  height: 100vh;
  position: relative;
  &-button-next,
  &-button-prev{
    color: $white;
    padding:35px 33px;
    transform: scale(.5);
    border-radius: 50%;
    transition: .3s;
    border: 2px solid $white;
    &:hover{
      color: $primary;
      transform: scale(.7);
      border-color: $primary;
    }
  }
}
</style>
