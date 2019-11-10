<template>
    <picture class="responsive-image">
        <source
            v-if="webp"
            :srcset="webp"
            type="image/webp"
            media="(min-width: 0px)"
        >
        <img
            :class="['responsive-image__image', {'responsive-image__image--limited': !grow}]"
            :src="src"
            :alt="alt"
        >
    </picture>
</template>

<script>
export default {
  name: 'ResponsiveImage',
  props: {
    src: {
      type: String,
      required: true,
    },
    webp: {
      type: String,
      required: false,
    },
    alt: {
      type: String,
      required: true,
    },
    grow: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data () {
    return {}
  },
}
</script>

<style scoped lang="scss">
.responsive-image__image {
  width: 100%;
  margin-top: 0;

  @at-root #{&}--limited {
    max-width: 100%;
  }
}
</style>
