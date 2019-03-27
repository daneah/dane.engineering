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
                        :alt="`${entry.subtitle} logo`"
                    />
                    <div class="entry__metadata">
                        <component
                            :is="`h${headingLevel}`"
                            class="entry__title"
                        >
                          {{ entry.title }}
                        </component>
                        <div class="entry__subtitle">{{ entry.subtitle }}</div>
                        <div class="entry__years">{{ entry.years.join("&ndash;") }}</div>
                        <ul
                            v-if="entry.responsibilities"
                            class="responsibilities"
                        >
                            <li v-for="responsibility in entry.responsibilities">
                                {{ responsibility }}
                            </li>
                        </ul>
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
  margin-top: var(--space-xl);

  @media print {
    grid-template-columns: auto minmax(25px, 50px);
  }
}

.entry__metadata {
  grid-column: 1;
}

.entry__image {
  grid-column: 2;
  break-inside: avoid;
}

.entry__years {
  font-size: var(--text-md);
  font-weight: bold;
}

.entry__title {
  font-size: var(--text-xl);
  font-weight: normal;
  margin-top: 0;
}

.entry__subtitle {
  font-size: var(--text-lg);
  font-style: italic;
  margin-top: var(--space-xxs);
}

.entries li:first-child .entry__metadata {
  margin-top: 0;
}

.responsibilities {
  list-style: disc;
}
</style>
