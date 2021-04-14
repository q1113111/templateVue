<template>
   <ul class="dropDown" :class="toggle ? 'is-show' : ''">
      <li class="dropDown__list" v-for="(nav, index) of navList" :key="index">
         <router-link :to="nav.link" class="dropDown__link">{{ nav.txt }}</router-link>
      </li>
   </ul>
</template>
<script>
export default {
  props: {
    navList: {
      type: Array,
      require: true
    },
    toggle: {
      type: Boolean,
      require: true
    }
  }
}
</script>
<style lang="scss" scoped>
.dropDown {
   opacity: 0;
   transition: opacity 0.3s 0.5s;
   margin: -$spacer 0 $spacer * 2 $spacer * 3.5;
   padding-left: $spacer;
   border-left: 2px solid $gray-800;
   &__list {
      padding: 5px 0;
   }
   &__link {
      color: $gray-800;
   }
   &.is-show {
      opacity: 1;
      transition-delay: 0s;
   }
}
</style>
