<template>
    <main>
        <BaseHeading>Get in Touch</BaseHeading>

        <BaseForm
            action="/thanks"
            name="contact"
            class="form"
            method="post"
        >
            <input
                type="hidden"
                name="form-name"
                value="contact"
            >

            <label for="email">Email</label>
            <input
                id="email"
                type="email"
                name="email"
                required="required"
            >

            <label for="message">Message</label>
            <textarea
                id="message"
                name="message"
            />

            <div>
                <BaseButton
                    type="submit"
                    text="Send"
                />
            </div>
        </BaseForm>
    </main>
</template>

<script>
import BaseHeading from '@/components/BaseHeading'
import BaseForm from '@/components/BaseForm'
import BaseButton from '@/components/BaseButton'

const PAGE_TITLE = 'Contact',
    PAGE_DESCRIPTION = 'Get in touch with Dane to contribute to his rampant serial hobbyism'

export default {
  name: 'Contact',
  components: {
    BaseHeading,
    BaseForm,
    BaseButton
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
        property: 'og:url',
        content: '//dane.engineering/contact',
        vmid: 'og:url'
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
  grid-template-columns: 30%;
}
</style>
