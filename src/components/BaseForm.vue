<template>
    <form
        data-netlify="true"
        data-netlify-honeypot="pwned"
        @submit.prevent="emitSubmissionEvent"
    >
        <input
            type="hidden"
            name="pwned"
        >
        <slot />
    </form>
</template>

<script>
export default {
  name: 'BaseForm',
  methods: {
    emitSubmissionEvent () {
      this.$emit('form-submission', this.$el);
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
</style>
