<script setup lang="ts">
const emit = defineEmits(['click'])

type ButtonType = 'button' | 'submit' | 'reset'
type ButtonVariant = 'primary' | 'secondary'
export type ButtonProps = {
  type?: ButtonType
  variant?: ButtonVariant
}

withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
  variant: 'primary'
})

const emitClick = () => {
  emit('click')
}
</script>

<template>
  <button @click="emitClick()" :type="type" :class="['dh-button', `dh-button--${variant}`]">
    <slot />
  </button>
</template>

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
