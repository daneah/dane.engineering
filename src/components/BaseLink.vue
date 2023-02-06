<template>
    <a
        :class="['link', {'link--clean': clean}]"
        :href="href"
        :target="external ? '_blank' : false"
        :rel="finalRel"
    >
        <slot />
    </a>
</template>

<script>
export default {
  name: 'BaseLink',
  props: {
    rel: {
      type: String,
      required: false,
      default: undefined,
    },
    href: {
      type: String,
      required: true,
    },
    external: {
      type: Boolean,
      required: false,
      default: true,
    },
    clean: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  data () {
    return {}
  },
  computed: {
    finalRel () {
      return this.rel || (this.external ? 'noopener noindex nofollow' : false)
    },
  },
}
</script>
