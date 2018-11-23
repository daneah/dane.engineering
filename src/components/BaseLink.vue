<template>
    <a
        :class="{'clean': clean}"
        :href="href"
        :target="external ? '_blank' : false"
        :rel="rel"
    >
        <slot />
    </a>
</template>

<script>
export default {
  name: 'BaseLink',
  props: {
    href: {
      type: String,
      required: true
    },
    external: {
      type: Boolean,
      required: false,
      default: true
    },
    clean: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    rel () {
      return this.external ? 'noopener noindex nofollow' : false;
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/_colors.scss';
@import '@/_typography.scss';

a {
  --link-color: var(--blue);
  --link-hover-color: var(--black);

  color: var(--link-color);
  transition: color ease-in-out 0.1s;

  &.clean {
    text-decoration: none;
    color: var(--text-color);
  }

  &:hover {
    color: var(--link-hover-color);
    transform: scale(1.2);
  }
}
</style>
