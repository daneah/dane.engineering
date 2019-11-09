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
            <BaseFormField
                label="First name"
                inputName="fname"
            />

            <BaseFormField
                label="Last name"
                inputName="lname"
            />

            <BaseFormField
                label="Email"
                inputName="email"
                type="email"
            />

            <BaseFormField
                label="Subject"
                inputName="subject"
            />

            <BaseTextarea
                label="Message"
                inputName="message"
            />
        </NetlifyForm>
    </main>
</template>

<script>
import BaseFormField from '@/components/BaseFormField'
import BaseTextarea from '@/components/BaseTextarea'
import NetlifyForm from '@/components/NetlifyForm'

const PAGE_TITLE = 'Contact',
    PAGE_DESCRIPTION = 'Get in touch with Dane to contribute to his rampant serial hobbyism'

export default {
  name: 'Contact',
  components: {
    BaseFormField,
    BaseTextarea,
    NetlifyForm,
  },
  metaInfo: {
    title: PAGE_TITLE,
    meta: [
      {
        property: 'og:title',
        content: `${PAGE_TITLE} | Dane Hillard`,
        vmid: 'og:title'
      },
      {
        name: 'description',
        content: PAGE_DESCRIPTION,
        vmid: 'description'
      },
      {
        property: 'og:description',
        content: PAGE_DESCRIPTION,
        vmid: 'og:description'
      }
    ]
  }
}
</script>

<style scoped lang="scss">
.form {
  display: grid;
  grid-template-columns: minmax(20rem, 30%);
}
</style>
