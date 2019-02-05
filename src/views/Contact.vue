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
            <input
                type="hidden"
                name="form-name"
                value="contact"
            >

            <label for="fname">First name</label>
            <input
                id="fname"
                type="text"
                name="fname"
                required="required"
            >

            <label for="lname">Last name</label>
            <input
                id="lname"
                type="text"
                name="lname"
                required="required"
            >

            <label for="email">Email</label>
            <input
                id="email"
                type="email"
                name="email"
                required="required"
            >

            <label for="subject">Subject</label>
            <input
                id="subject"
                type="text"
                name="subject"
                required="required"
            >

            <label for="message">Message</label>
            <textarea
                id="message"
                name="message"
            />
        </NetlifyForm>
    </main>
</template>

<script>
import NetlifyForm from '@/components/NetlifyForm'

const PAGE_TITLE = 'Contact',
    PAGE_DESCRIPTION = 'Get in touch with Dane to contribute to his rampant serial hobbyism'

export default {
  name: 'Contact',
  components: {
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
