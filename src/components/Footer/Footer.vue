<template>
   <nav class="footer">
      <ul class="footer__list">
         <li class="footer__item" v-for="(item, index) of footerList" :key="index">
            <h4 class="footer__title">{{ item.title }}</h4>
            <p v-if="item.title === 'ABOUT'" class="footer__txt">{{ item.txt }}</p>
            <Layer :name="item.name" />
         </li>
      </ul>
   </nav>
</template>

<script>
import Layer from '@/components/Footer/Layer'
export default {
  data () {
    return {
      footerList: [
        {
          name: '',
          title: 'ABOUT',
          txt: 'All of our tattoo and piercing masters here are masters indeed... Their artistic precision and perception are nothing short of perfect!'
        },
        {
          name: 'NAVIGATIONS',
          title: 'NAVIGATIONS'
        },
        {
          name: 'RECENTCOMMENTS',
          title: 'RECENT COMMENTS'
        },
        {
          name: 'CONTACTS',
          title: 'CONTACTS'
        }
      ]
    }
  },
  components: {
    Layer
  }
}
</script>
<style lang="scss" >
.footer {
   padding: 150px 15px;
   max-width: 1600px;
   margin: auto;
   @include breakpoints-down(lg){
     padding: 75px 15px;
   }
   &__list {
      display: flex;
      flex-wrap: wrap;
      @include breakpoints-down(md){
        flex-direction: column;
      }
   }
   &__item {
      color: $gray-700;
      font-weight: lighter;
      font-size: 14px;
      width: 25%;
      padding: $spacer*1.5 $spacer*1.25;
      @include breakpoints-down(lg){
        width: 50%;
        padding-left: $spacer*4;
      }
      @include breakpoints-down(md){
        max-width: 360px;
        width: 100%;
        margin: auto;
        padding: $spacer*1.5 0;
      }
   }
   &__item:nth-child(3) {
      .layer {
        font-weight: bolder;
         &__link {
            color: $primary;
            &:hover{
              color: $white;
            }
         }
         &__span {
            color: $white;
         }
      }
   }

   &__title {
      color: $white;
      margin-bottom: 1rem;
   }
   &__txt {
      max-width: 300px;
   }
}
</style>
