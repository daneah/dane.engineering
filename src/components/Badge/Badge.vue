<template>
    <span
        class="badge"
        :style="{'background': color}"
    >
        <!-- @slot The badge text content -->
        <slot />
    </span>
</template>

<script>
export default {
  name: "Badge",
  props: {
    /**
     * The background color of the badge
     */
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
