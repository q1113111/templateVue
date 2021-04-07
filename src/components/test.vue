<template>
<Form v-slot="{ errors }">
  <Field name="field" :rules="isRequired" />

  <span>{{ errors.field }}</span>
</Form>
</template>

<script>
import { Field, Form } from 'vee-validate'

export default {
  components: {
    Field,
    Form
  },
  methods: {
    isRequired (value) {
      return value ? true : 'This field is required'
    }
  }
}
</script>
