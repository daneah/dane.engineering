<template>
    <a
        :class="['link', {'link--clean': clean}]"
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
    rel () {
      return this.external ? 'noopener noindex nofollow' : false
    },
  },
}
</script>
