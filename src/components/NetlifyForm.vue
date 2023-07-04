<script setup lang="ts">
import BaseButton from '@/components/Button/BaseButton.vue'
import BaseFormField from '@/components/BaseFormField.vue'

interface NetlifyFormProps {
  formName: string
  submitButtonText?: string
}

withDefaults(defineProps<NetlifyFormProps>(), {
  submitButtonText: 'Submit'
})
</script>

<template>
  <form netlify netlify-honeypot="pwned">
    <BaseFormField
      label="Don't fill this field out, humans!"
      type="hidden"
      inputName="form-name"
      :value="formName"
    />
    <BaseFormField label="Don't fill this field out, humans!" type="hidden" inputName="pwned" />

    <slot />

    <div class="button-group">
      <BaseButton class="button-group__button" type="submit">
        {{ submitButtonText }}
      </BaseButton>

      <BaseButton variant="secondary" class="button-group__button" type="reset"> Clear </BaseButton>
    </div>
  </form>
</template>

<style scoped lang="scss">
.button-group {
  @at-root #{&}__button {
    &:not(:first-child) {
      margin-left: var(--space-md);
    }
  }
}
</style>
