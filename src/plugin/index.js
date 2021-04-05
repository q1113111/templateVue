import Vue from 'vue'
import webFont from 'webfontloader'
import 'swiper/swiper-bundle.css'
import swiper, { Navigation, Pagination, Autoplay, EffectFade, Parallax } from 'swiper'
import { LayoutPlugin } from 'bootstrap-vue'

swiper.use([Navigation, Pagination, Autoplay, EffectFade, Parallax])
Vue.use(LayoutPlugin)

webFont.load({
  google: {
    families: ['Noto Sans TC:100,400,700,900', 'sans-serif', 'Dancing Script', 'cursive']
  }
})
Vue.use(webFont)
