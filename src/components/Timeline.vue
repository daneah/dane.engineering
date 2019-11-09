<template>
    <ol class="timeline">
        <li
            v-for="(group, groupIndex) in entries"
            :key="`group-${groupIndex}`"
            class="timeline__group"
        >
            <ol class="timeline__group__entry-list">
                <li
                    v-for="(entry, entryIndex) in group"
                    :key="`group-${groupIndex}-entry-${entryIndex}`"
                >
                    <TimelineEntry v-bind="entry" />
                </li>
            </ol>
        </li>
    </ol>
</template>

<script>
import ResponsiveImage from '@/components/ResponsiveImage'
import TimelineEntry from '@/components/TimelineEntry'

export default {
  name: 'Timeline',
  components: {
    ResponsiveImage,
    TimelineEntry,
  },
  props: {
    entries: {
      type: Array,
      required: true,
    },
    headingLevel: {
      type: Number,
      default: 2,
    },
  },
  data () {
    return {}
  },
}
</script>

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
