<template>
   <div class="copyRight">
      <div class="copyRight__txt">{{ text }}</div>
      <div class="copyRight__icon">
         <a :href="item.link" class="copyRight__link" v-for="(item, index) of iconList" :key="index">
            <i :class="item.name"></i>
         </a>
      </div>
   </div>
</template>
<script>
const year = new Date().getFullYear()
export default {
  data () {
    return {
      text: `InkPink Theme © ${year}`,
      iconList: [
        {
          name: 'fab fa-facebook-f',
          link: '#'
        },
        {
          name: 'fab fa-twitter',
          link: '#'
        },
        {
          name: 'fab fa-instagram',
          link: '#'
        },
        {
          name: 'fab fa-youtube',
          link: '#'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.copyRight {
   display: flex;
   font-size: 0.875rem;
   justify-content: space-between;
   &__txt {
      color: $white;
   }
   &__link {
      margin: 0 $spacer;
      color: $gray-700;
   }
}
</style>
