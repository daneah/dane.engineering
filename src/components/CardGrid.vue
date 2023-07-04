<template>
  <div class="cards">
    <slot name="cards" />
  </div>
</template>

<style lang="scss" scoped>
.cards :deep(.card) {
  height: 100%;
}
</style>
