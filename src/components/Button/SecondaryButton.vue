<template>
    <BaseButton
        @click="$emit('click')"
        :type="type"
        class="dh-button--secondary"
    >
        <slot />
    </BaseButton>
</template>

<script>
import BaseButton from '@/components/Button/BaseButton'

export default {
  name: 'SecondaryButton',
  components: {
    BaseButton,
  },
  props: {
    type: {
      type: String,
      required: false,
      default: 'button',
    },
  },
}
</script>
