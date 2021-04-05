<template>
   <div>
      <div class="card" v-for="(item, index) of perList" :key="index">
         <div class="card__pic">
            <img :src="item.src" alt="" />
            <div class="icon icon-people">
               <a href=""><i class="fab fa-facebook-f"></i></a>
               <a href=""><i class="fab fa-twitter"></i></a>
               <a href=""><i class="fab fa-instagram"></i></a>
               <a href=""><i class="fab fa-youtube"></i></a>
            </div>
         </div>

         <h5 class="card__title">{{ item.title }}</h5>
      </div>
   </div>
</template>
<script>
export default {
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
