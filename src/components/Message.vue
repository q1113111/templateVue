<template>
   <div class="message">
      <div class="message__txt">
         <h1 class="message__title">GET IN TOUCH</h1>
         <h6 class="message__tag">
            Whatever types of questions you’ll have, feel free to get in touch with us and address them!
         </h6>
      </div>
      <ValidationObserver ref="message" tag="div" class="from-md" v-slot="{ handleSubmit, invalid }">
         <form @submit.prevent="handleSubmit(submitHandle)">
            <ValidationProvider
               v-for="(item, index) of formList"
               :key="index"
               tag="div"
               :rules="item.rules"
               class="mb-5"
               v-slot="validation"
            >
               <b-form-group>
                  <b-form-input
                     :type="item.type"
                     v-model="input[item.value]"
                     class="form-control-lg"
                     :placeholder="item.placeholder"
                     :state="getValidationState(validation)"
                     aria-describedby="feedback"
                  ></b-form-input>
                  <b-form-invalid-feedback id="feedback">{{ validation.errors[0] }}</b-form-invalid-feedback>
               </b-form-group>
            </ValidationProvider>
            <ValidationProvider tag="div" class="mb-5" rules="required" v-slot="validation">
               <b-form-group>
                  <b-form-textarea
                     cols="30"
                     v-model="input.message"
                     rows="10"
                     class="form-control"
                     :state="getValidationState(validation)"
                     placeholder="Message"
                  ></b-form-textarea>
                  <b-form-invalid-feedback id="feedback">{{ validation.errors[0] }}</b-form-invalid-feedback>
               </b-form-group>
            </ValidationProvider>
            <button type="submit" :disabled="invalid" class="btn btn-secondary">SEND MESSAGE</button>
         </form>
      </ValidationObserver>
   </div>
</template>

<script>
import { extend, ValidationProvider, ValidationObserver, localize } from 'vee-validate'
import TW from 'vee-validate/dist/locale/zh_TW.json'
import { email, required } from 'vee-validate/dist/rules'
localize('zh_TW', TW)
extend('email', {
  ...email,
  message: '郵件地址錯誤'
})
extend('required', {
  ...required,
  message: '尚未填入資料'
})
extend('required', required)

export default {
  name: 'message',
  data () {
    return {
      value: '',

      formList: [
        {
          type: 'text',
          placeholder: 'First name',
          value: 'firstName',
          rules: 'required'
        },
        {
          type: 'text',
          placeholder: 'Last name',
          value: 'lastName',
          rules: 'required'
        },
        {
          type: 'email',
          placeholder: 'Email',
          value: 'email',
          rules: 'email'
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
  components: {
    ValidationProvider,
    ValidationObserver
  },
  methods: {
    submitHandle () {
      this.$store.dispatch('message/ADD_MESSAGE', this.input)
      alert('已送出資料')
      this.input = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      }
      this.$nextTick(() => {
        this.$refs.message.reset()
      })
    },
    getValidationState ({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
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
