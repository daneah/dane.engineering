<template>
    <span
        class="badge"
        :style="{'background': color}"
    >
        <slot />
    </span>
</template>

<script>
export default {
  name: "Badge",
  props: {
    color: {
      type: String,
      default: "var(--blue)",
    }
  }
}
</script>

<style scoped>
.badge {
  padding: 0.35rem;
  border-radius: 2px;
}
</style>
