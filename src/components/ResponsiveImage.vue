<template>
    <picture>
        <source
            v-if="webp"
            :srcset="webp"
            type="image/webp"
            media="(min-width: 0px)"
        >
        <img
            :class="{'limited': !grow}"
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
img {
  width: 100%;
  margin-top: 0;
}

img.limited {
  max-width: 100%;
}
</style>
