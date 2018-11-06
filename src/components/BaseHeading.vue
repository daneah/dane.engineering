<template>
    <component :is="`h${level}`">
        <slot />
    </component>
</template>

<script>
export default {
  name: 'BaseHeading',
  props: {
    level: {
      required: false,
      default: 1,
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/main.scss';

@for $heading-level from 1 through 6 {
    h#{$heading-level} {
        line-height: var(--heading-line-height);
        margin-bottom: var(--space-xxs);
    }
}

h1 {
    font-family: var(--font-title);
    font-weight: var(--font-title-weight);
    font-size: var(--text-xxxl);
}

h2 {
    font-size: var(--text-xxl);
}

h3 {
    font-size: var(--text-xl);
}

h4 {
    font-size: var(--text-lg);
}
</style>
