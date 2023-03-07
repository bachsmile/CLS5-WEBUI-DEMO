<script setup lang="ts">
import { ErrorMessage, Field, Form } from 'vee-validate'

const schema = {
  // drink: value => {
  //   if (value)
  //     return true

  //   return 'You must choose a drink'
  // },
}

const validateEmail = value => {
  // if the field is empty
  if (!value)
    return 'This field is required'

  // if the field is not a valid email
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (!regex.test(value))
    return 'This field must be a valid email'

  // All is good
  return true
}

function onSubmit(values) {
}
</script>

<template>
  <div id="app">
    <Form
      v-slot="{ values }"
      :validation-schema="schema"
      @submit="onSubmit"
    >
      <Field
        name="email"
        type="email"
        :rules="validateEmail"
      />

      <ErrorMessage name="email" />

      <button>Submit</button>

      <p>Values</p>
      <pre>{{ values }}</pre>
    </Form>
  </div>
</template>
