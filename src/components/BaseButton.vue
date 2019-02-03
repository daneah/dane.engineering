<template>
    <button>
        {{ text }}
    </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      required: false,
      default: 'Submit',
    },
  },
  data () {
    return {}
  },
}
</script>

<style scoped lang="scss">
button {
  display: inline-block;
  font-weight: bold;
  font-size: var(--text-md);
  padding: var(--space-sm) var(--space-md);
  color: var(--white);
  background: var(--blue);
  border: none;
  transition: background ease-in-out 0.1s;

  &:hover {
    cursor: pointer;
    background: var(--dark-blue);
  }
}
</style>
