<template>
   <ul class="layer">
      <li v-for="(item, index) of list[name]" :key="index" class="layer__item">
         <span v-if="!item.link && !item.span" class="layer__span">{{ item.title }}</span>
         <a v-else-if="!item.span" href="item.link" class="layer__link">{{ item.title }}</a>
         <div v-else class="information">
            <span class="information__span">{{ item.title }}</span>
            <span v-if="!item.link" class="information__span">{{ item.span }}</span>
            <a v-else-if="item.link" :href="item.link" class="information__link">{{ item.span }}</a>
         </div>
      </li>
   </ul>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      list: {
        NAVIGATIONS: [
          {
            title: 'About & Artists',
            link: '#'
          },
          {
            title: 'Blog',
            link: '#'
          },
          {
            title: 'Gallery',
            link: '#'
          },
          {
            title: 'Contacts',
            link: '#'
          }
        ],
        RECENTCOMMENTS: [
          {
            title: 'admin on',
            link: ''
          },
          {
            title: 'WEDDING TATTOOS INSTEAD OF RINGS',
            link: '#'
          },
          {
            title: 'admin on',
            link: ''
          },
          {
            title: 'WEDDING TATTOOS INSTEAD OF RINGS',
            link: '#'
          }
        ],
        CONTACTS: [
          {
            title: 'Address:',
            span: '578 Marmora Road, Glasgow, D04 89GR',
            link: ''
          },
          {
            title: 'Phone:',
            span: '(800) 123-0045',
            link: 'tel:+886-2-3278918'
          },
          {
            title: 'E-mail:',
            span: 'q1113111@gmail.com',
            link: 'mailto:q1113111@gmail.com'
          },
          {
            title: 'We are open::',
            span: 'Mn-Fr: 10 am - 8 pm',
            link: ''
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss">
.layer {
   &__item {
      margin-bottom: $spacer * 0.75;
   }
   &__link{
     color: $gray-700 ;
   }
}
.information{
  &__span{
    margin-right: $spacer * .5;
  }
}
</style>
