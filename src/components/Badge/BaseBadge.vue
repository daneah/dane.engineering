<script setup lang="ts">
interface BaseBadgeProps {
  color?: string
}

withDefaults(defineProps<BaseBadgeProps>(), {
  color: 'var(--blue)'
})
</script>

<template>
  <span class="badge" :style="{ background: color }">
    <!-- @slot The badge text content -->
    <slot />
  </span>
</template>

<style scoped>
.badge {
  padding: 0.35rem;
  border-radius: 2px;
}
</style>
