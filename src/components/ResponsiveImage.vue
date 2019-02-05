<template>
    <img
        :class="{'limited': !grow}"
        :src="src"
        :alt="alt"
    >
</template>

<script>
export default {
  name: 'ResponsiveImage',
  props: {
    src: {
      type: String,
      required: true,
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
}

img.limited {
  max-width: 100%;
}
</style>
