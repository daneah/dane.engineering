<script setup lang="ts">
import {useHead} from "@unhead/vue";

import BaseFormField from '@/components/BaseFormField.vue'
import NetlifyForm from '@/components/NetlifyForm.vue'

useHead({
  title: 'Contact',
})
</script>

<template>
  <main>
    <h1>Get in Touch</h1>

    <NetlifyForm
      action="/thanks"
      name="contact"
      class="form"
      method="post"
      form-name="contact"
      submit-button-text="Send"
    >
      <BaseFormField label="First name" inputName="fname" />

      <BaseFormField label="Last name" inputName="lname" />

      <BaseFormField label="Email" inputName="email" type="email" />

      <BaseFormField label="Subject" inputName="subject" />

      <BaseFormField :editable="true" label="Message" inputName="message" />
    </NetlifyForm>
  </main>
</template>

<style scoped lang="scss">
.form {
  display: grid;
  grid-template-columns: minmax(20rem, 30%);
}
</style>
