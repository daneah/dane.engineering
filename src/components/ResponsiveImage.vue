<template>
    <img
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
  },
  data () {
    return {}
  },
}
</script>

<style scoped lang="scss">
img {
  max-width: 100%;
  height: auto;
}
</style>
