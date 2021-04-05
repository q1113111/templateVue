<template>
   <b-container fluid class="p-xl-5 p-3">
      <h1 class="title">TATTOO ART WE DO</h1>
      <div class="card"  v-images-loaded:on.progress="imageProgress">
         <div class="card__item" v-for="(list, index) of cardList" :key="index">
            <div class="card__pic">
               <img :src="list.src" alt="" />
            </div>
            <h3 class="card__title">{{ list.title }}</h3>
            <span class="card__tag">{{ list.tag }}</span>
         </div>
      </div>
   </b-container>
</template>

<script>
import Masonry from 'masonry-layout'
import imagesLoaded from 'vue-images-loaded'
export default {

  data () {
    return {
      loaded: '',
      cardList: [
        {
          src: require('@/assets/img/tatto/pic01.jpg'),
          title: 'REALISM',
          tag: '14 photos'
        },
        {
          src: require('@/assets/img/tatto/pic04.jpg'),
          title: 'REALISM',
          tag: '14 photos'
        },
        {
          src: require('@/assets/img/tatto/pic05.jpg'),
          title: 'REALISM',
          tag: '14 photos'
        },
        {
          src: require('@/assets/img/tatto/pic02.jpg'),
          title: 'REALISM',
          tag: '14 photos'
        },
        {
          src: require('@/assets/img/tatto/pic06.jpg'),
          title: 'REALISM',
          tag: '14 photos'
        },
        {
          src: require('@/assets/img/tatto/pic03.jpg'),
          title: 'REALISM',
          tag: '14 photos'
        },
        {
          src: require('@/assets/img/tatto/pic07.jpg'),
          title: 'REALISM',
          tag: '14 photos'
        },
        {
          src: require('@/assets/img/tatto/pic08.jpg'),
          title: 'REALISM',
          tag: '14 photos'
        }
      ]
    }
  },
  directives: {
    imagesLoaded
  },
  methods: {
    imageProgress () {
      // eslint-disable-next-line no-new
      new Masonry('.card', {
        itemSelector: '.card__item'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.title{
  font-size: 3rem;
  letter-spacing:10px;
  text-align: center;
  padding: 30px 0 50px;
  @include breakpoints-down(md){
    font-size: 2rem;
    padding: 20px 0 30px;
  }
}
.card {
   &__item {
      width: calc(100% / 3);
      padding: 20px 10px;
      @include breakpoints-down(md){
          width:50%;
          padding: 10px;
      }
      @include breakpoints-down(sm){
          width: 100%;
      }
      &:nth-child(2){
        padding-bottom: 23px;
      }
      &:nth-last-child(3){
        padding-top: 23px;
      }
   }
   &__pic{
     filter: grayscale(1);
     position: relative;
     transition:.6s;
     &:hover{
       filter: grayscale(0);
     }
     &::before{
       content: '+';
      @include absoluteBg(auto,auto,50%,50%);
      transform: translate(-50%,-50%);
      font-size: 4rem;
      font-weight: 100;
      color: $gray-400;
      opacity: 0;
      transition: .7s;
     }
     &:hover::before{
       opacity: 1;
       transform:translate(-50%,-50%)  rotate(180deg) ;
     }
   }
   &__title{
     padding-top: 10px;
     font-size: 1.3rem;
       margin-bottom: 5px;
     color: $primary;
   }
  &__tag{
    font-size: 14px;
    color: $gray-500;
  }
}
</style>
