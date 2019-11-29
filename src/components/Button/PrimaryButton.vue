<template>
    <BaseButton
        @click="$emit('click')"
        :type="type"
        class="dh-button--primary"
    >
        <slot />
    </BaseButton>
</template>

<script>
import BaseButton from '@/components/Button/BaseButton'

export default {
  name: 'PrimaryButton',
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
