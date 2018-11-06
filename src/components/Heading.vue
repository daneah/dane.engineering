<template>
  <component :is="`h${level}`">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Heading',
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
h1 {
  font-family: 'Fredericka the Great', serif;
  font-weight: normal;
}
</style>
