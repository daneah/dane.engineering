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
            :decoding="decoding"
            :src="src"
            :alt="alt"
            :height="height"
            :width="width"
            :loading="loading"
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
    height: {
      type: Number,
      required: false,
    },
    width: {
      type: Number,
      required: false,
    },
    decoding: {
      type: String,
      required: false,
      default: 'async',
    },
    loading: {
      type: String,
      required: false,
      default: 'lazy',
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
  height: auto;
  margin-top: 0;

  @at-root #{&}--limited {
    max-width: 100%;
  }
}
</style>
