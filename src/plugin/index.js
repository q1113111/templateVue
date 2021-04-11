import Vue from 'vue'
import webFont from 'webfontloader'
import 'swiper/swiper-bundle.css'
import swiper, { Navigation, Pagination, Autoplay, EffectFade, Parallax } from 'swiper'
import { firestorePlugin } from 'vuefire'
import { LayoutPlugin, FormInputPlugin, FormPlugin, FormGroupPlugin, FormTextareaPlugin } from 'bootstrap-vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo)
Vue.use(LayoutPlugin)
Vue.use(FormTextareaPlugin)
Vue.use(FormInputPlugin)
Vue.use(FormPlugin)
Vue.use(FormGroupPlugin)

swiper.use([Navigation, Pagination, Autoplay, EffectFade, Parallax])
Vue.use(firestorePlugin)

webFont.load({
  google: {
    families: ['Noto Sans TC:100,400,700,900', 'sans-serif', 'Dancing Script', 'cursive']
  }
})
Vue.use(webFont)
