<template>
    <form
        netlify
        netlify-honeypot="pwned"
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
    </form>
</template>

<script>
export default {
  name: 'BaseForm'
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
