<template>
    <form
        netlify
        netlify-honeypot="pwned"
    >
        <input
            type="hidden"
            name="form-name"
            :value="formName"
        >

        <p class="hidden">
            <label for="pwned">
                Don't fill this field out, humans!
            </label>
            <input
                id="pwned"
                name="pwned"
            >
        </p>

        <slot />

        <div>
            <BaseButton
                type="submit"
                :text="submitButtonText"
            />
        </div>
    </form>
</template>

<script>
import BaseButton from '@/components/BaseButton'

export default {
  name: 'NetlifyForm',
  components: {
    BaseButton
  },
  props: {
    formName: {
      type: String,
      required: true
    },
    submitButtonText: {
      type: String,
      required: false,
      default: 'Submit'
    }
  }
}
</script>

<style scoped lang="scss">
label {
  display: block;
  font-size: var(--text-lg);
  font-weight: bold;
}

input,
textarea {
  padding: var(--space-xs);
  border: 1px solid var(--gray);
  width: 100%;
}

textarea {
  height: 5em;
}

.hidden {
  display: none;
}
</style>
