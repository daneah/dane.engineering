<template>
    <main>
        <BaseHeading>Get in Touch</BaseHeading>

        <BaseForm
            name="contact"
            class="form"
            method="POST"
            @form-submission="handleSubmission"
        >
            <label for="email">email</label>
            <input
                id="email"
                type="email"
                name="email"
                required="required"
            >

            <label for="message">message</label>
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

export default {
  name: 'Contact',
  components: {
    BaseHeading,
    BaseForm,
    BaseButton
  },
  data () {
    return {
      submitted: false,
      errored: false,
    }
  },
  methods: {
    handleSubmission (form) {
      fetch('/', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: new FormData(form)
      })
      .then(() => {
        console.log('success!');
      })
      .catch(() => {
        console.log('fail!');
      });
    }
  },
  metaInfo: {
    title: 'Contact',
    meta: [
      {
        property: 'og:title',
        content: 'Contact | Dane Hillard',
        vmid: 'og:title'
      },
      {
        property: 'og:url',
        content: '//dane.engineering/contact',
        vmid: 'og:url'
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
