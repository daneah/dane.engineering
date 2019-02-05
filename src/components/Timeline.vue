<template>
    <ol class="timeline">
        <li
            v-for="(group, groupIndex) in entries"
            :key="`group-${groupIndex}`"
            class="timeline__group"
        >
            <ol class="entries">
                <li
                    v-for="(entry, entryIndex) in group"
                    :key="`group-${groupIndex}-entry-${entryIndex}`"
                    class="entry"
                >
                    <ResponsiveImage
                        v-if="entry.image"
                        :src="entry.image"
                        class="entry__image"
                        alt="Timeline image"
                    />
                    <div class="entry__metadata">
                        <div class="entry__year">{{ entry.year }}</div>
                        <div class="entry__title">{{ entry.title }}</div>
                        <div class="entry__subtitle">{{ entry.subtitle }}</div>
                        <p
                            v-if="entry.description"
                            class="entry__description"
                        >
                            {{ entry.description }}
                        </p>
                    </div>
                </li>
            </ol>
        </li>
    </ol>
</template>

<script>
import ResponsiveImage from '@/components/ResponsiveImage'

export default {
  name: 'Timeline',
  components: {
    ResponsiveImage,
  },
  props: {
    entries: {
      type: Array,
      required: true,
    }
  },
  data () {
    return {}
  },
}
</script>

<style scoped lang="scss">
.timeline {
  list-style: none;
}

.timeline__group:not(:first-child) {
  border-top: 1px solid var(--gray);
}

.entries {
  list-style: none;
  margin-top: var(--space-lg);
}

.entry {
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: 50% minmax(75px, 150px);
  grid-gap: var(--space-xl);
}

.entry__metadata {
  grid-column: 1;
}

.entry__image {
  grid-column: 2;
}

.entry__year {
  font-size: var(--text-xl);
  font-weight: bold;
}

.entry__title {
  font-size: var(--text-lg);
  margin-top: var(--space-xxs);
}

.entries li:first-child .entry__metadata {
  margin-top: 0;
}

.entry__subtitle {
  font-size: var(--text-md);
  font-style: italic;
}
</style>
