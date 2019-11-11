<template>
  <div class="cards">
    <slot name="cards" />
  </div>
</template>

<script>
export default {
  name: 'CardGrid',
}
</script>

<style lang="scss" scoped>
.cards ::v-deep .card {
  height: 100%;
}
</style>
