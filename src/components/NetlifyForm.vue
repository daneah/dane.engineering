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

        <div class="button-group">
            <PrimaryButton class="button-group__button" type="submit">
                {{ submitButtonText }}
            </PrimaryButton>

            <SecondaryButton class="button-group__button" type="reset">
                Clear
            </SecondaryButton>
        </div>
    </form>
</template>

<script>
import PrimaryButton from '@/components/Button/PrimaryButton'
import SecondaryButton from '@/components/Button/SecondaryButton'
import BaseFormField from '@/components/BaseFormField'

export default {
  name: 'NetlifyForm',
  components: {
    PrimaryButton,
    BaseFormField,
    SecondaryButton,
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

<style scoped lang="scss">
.button-group {
  @at-root #{&}__button {
    &:not(:first-child) {
      margin-left: var(--space-md);
    }
  }
}
</style>
