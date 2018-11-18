<template>
    <a
        :class="clean ? 'clean' : false"
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
    relOverride: {
      type: String,
      required: false,
      default: 'noopener,noindex,nofollow'
    },
    clean: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    rel () {
      return this.external ? 'noopener,noindex,nofollow' : false;
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/_typography.scss';

a {
  color: var(--text-color);

  &:hover {
    color: var(--link-hover-color);
  }

  &.clean {
    text-decoration: none;
  }
}
</style>
