<template>
   <div class="message">
      <div class="message__txt">
         <h1 class="message__title">GET IN TOUCH</h1>
         <h6 class="message__tag">
            Whatever types of questions you’ll have, feel free to get in touch with us and address them!
         </h6>
      </div>
      <form class="from-md"  @submit.prevent="submitHandle()">
         <input
            v-for="(item, index) of formList"
            :key="index"
            :type="item.type"
            v-model="input[item.value]"
            class="form-control form-control-lg mb-5"
            :placeholder="item.placeholder"
            required
         />
         <textarea cols="30" v-model="input.message" rows="10" class="form-control" placeholder="Message"></textarea>
         <button type="submit" class="btn btn-secondary mt-5">SEND MESSAGE</button>
      </form>
   </div>
</template>

<script>
export default {
  name: 'message',
  data () {
    return {
      formList: [
        {
          type: 'text',
          placeholder: 'First name',
          value: 'firstName'
        },
        {
          type: 'text',
          placeholder: 'Last name',
          value: 'lastName'
        },
        {
          type: 'email',
          placeholder: 'Email',
          value: 'email'
        }
      ],
      input: {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitHandle () {
      this.$store.dispatch('message/ADD_MESSAGE', this.input)
      alert('已送出資料')
    }
  }
}
</script>

<style lang="scss" >
.message {
   margin-left: 10%;
   &__title {
      letter-spacing: 10px;
      color: $gray-500;
      margin-bottom: 2rem;
   }
   &__tag {
      color: $gray-600;
      font-family: "Dancing Script", cursive;
      font-weight: 900;
      max-width: 500px;
      line-height: 2rem;
      letter-spacing: 5px;
      margin-bottom: 2rem;
   }
   @include breakpoints-down(md) {
      margin: auto;
      max-width: 550px;
      padding: 0 30px;
   }
}
.from-md {
   max-width: 550px;
}
</style>
