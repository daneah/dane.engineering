<template>
    <form
        netlify
        netlify-honeypot="pwned"
    >
        <BaseFormField
            label="Don't fill this field out, humans!"
            type="hidden"
            inputName="form-name"
            :value="formName"
        />
        <BaseFormField
            label="Don't fill this field out, humans!"
            type="hidden"
            inputName="pwned"
        />

        <slot />

        <div>
            <BaseButton type="submit">
                {{ submitButtonText }}
            </BaseButton>
        </div>
    </form>
</template>

<script>
import BaseButton from '@/components/BaseButton'
import BaseFormField from '@/components/BaseFormField'

export default {
  name: 'NetlifyForm',
  components: {
    BaseButton,
    BaseFormField,
  },
  props: {
    formName: {
      type: String,
      required: true,
    },
    submitButtonText: {
      type: String,
      required: false,
      default: 'Submit',
    }
  },
  data () {
    return {}
  },
}
</script>
