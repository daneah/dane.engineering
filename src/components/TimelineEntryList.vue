<script setup lang="ts">
import TimelineEntry from '@/components/TimelineEntry.vue'
import type { TimelineEntryProps } from '@/components/TimelineEntry.vue'

interface TimelineProps {
  entries: TimelineEntryProps[][]
  headingLevel?: number
}

withDefaults(defineProps<TimelineProps>(), {
  headingLevel: 2
})
</script>

<template>
  <ol class="timeline">
    <li v-for="(group, groupIndex) in entries" :key="`group-${groupIndex}`" class="timeline__group">
      <ol class="timeline__group__entry-list">
        <li v-for="(entry, entryIndex) in group" :key="`group-${groupIndex}-entry-${entryIndex}`">
          <TimelineEntry v-bind="entry" />
        </li>
      </ol>
    </li>
  </ol>
</template>

<style scoped lang="scss">
.timeline {
  list-style: none;

  @at-root #{&}__group:not(:first-child) {
    border-top: 1px solid var(--gray);
  }

  @at-root #{&}__group__entry-list {
    list-style: none;
    margin-top: var(--space-lg);
  }
}
</style>
