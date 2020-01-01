<template>
    <button
        @click="$emit('click')"
        :type="type"
        class="dh-button"
    >
        <slot />
    </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    /**
     * The HTML5 `type` attribute to use for the underlying `<button>` element
    */
    type: {
      type: String,
      required: false,
      default: 'button',
    },
  },
  data () {
    return {}
  },
}
</script>

<style scoped lang="scss">
.dh-button {
  display: inline-block;
  font-weight: bold;
  font-size: var(--text-md);
  padding: var(--space-sm) var(--space-md);
  background: var(--very-light-gray);
  border: none;
  transition: background ease-in-out 0.1s;

  &:hover {
    cursor: pointer;
    background: var(--gray);
  }

  @at-root #{&}--primary {
    color: var(--white);
    background: var(--blue);

    &:hover {
        background: var(--dark-blue);
    }
  }

  @at-root #{&}--secondary {
    background: var(--gray);

    &:hover {
        background: var(--medium-gray);
    }
  }
}
</style>
