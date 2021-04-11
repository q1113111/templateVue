<template>
   <div class="row px-3">
      <div class="card" v-for="(item, index) of perList" :key="index">
         <div class="card__pic">
            <img :src="item.src" alt="" />
            <div class="icon icon-people">
               <a class="icon__link" href="#" v-scroll-to="'#app'"><i class="fab fa-facebook-f"></i></a>
               <a class="icon__link" href=""><i class="fab fa-twitter"></i></a>
               <a class="icon__link" href=""><i class="fab fa-instagram"></i></a>
               <a class="icon__link" href=""><i class="fab fa-youtube"></i></a>
            </div>
         </div>

         <h4 class="card__title">{{ item.title }}</h4>
      </div>
   </div>
</template>
<script>
export default {
  name: 'Card',
  data () {
    return {
      perList: [
        {
          src: require('@/assets/img/people/people1.jpg'),
          title: 'DAVE "CRAZY INK" JOHNS'
        },
        {
          src: require('@/assets/img/people/people2.jpg'),
          title: 'STACY "WITCH" GABRIELLE'
        },
        {
          src: require('@/assets/img/people/people3.jpg'),
          title: 'VINCE "MADHEAD" VEEN'
        },
        {
          src: require('@/assets/img/people/people4.jpg'),
          title: 'JOHN "RAM" HARSHAM'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.card {
   width: calc(100% / 4);
   padding: 15px;
   @include breakpoints-down(lg) {
      width: 50%;
   }
   @include breakpoints-down(sm) {
      width: 100%;
   }
   &__pic {
      position: relative;
      &::before {
         content: "";
         transition: 0.5s;
         @include absoluteBg();
      }
      &:hover {
         &::before {
            background-color: rgba($black, $alpha: 0.8);
         }
         .icon-people {
            opacity: 1;
            visibility: inherit;
            transition-delay: 0.3s;
         }
      }
   }
   &__title {
      text-align: center;
      color: darken($primary, 20%);
      padding-top: 1rem;
      @include breakpoints-down(xl) {
         font-size: 1.2rem;
      }
      @include breakpoints-down(lg) {
         font-size: 1.5rem;
      }
   }
}

.icon-people {
   font-size: 1.8rem;
   @include setPosition();
   width: 100%;
   text-align: center;
   opacity: 0;
   visibility: hidden;
   transition: 0.5s;
   @include breakpoints-down(xl) {
      font-size: 1.4rem;
   }
   @include breakpoints-down(lg) {
      font-size: 1.7rem;
   }
}
</style>
