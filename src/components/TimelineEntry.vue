<script setup lang="ts">
import ResponsiveImage from '@/components/ResponsiveImage.vue'

export type TimelineEntryProps = {
  image?: string
  headingLevel?: number
  title: string
  subtitle: string
  years: number[]
  responsibilities?: string[]
}

const props = withDefaults(defineProps<TimelineEntryProps>(), {
  headingLevel: 2,
  responsibilities: () => []
})

const displayYears = props.years.map((year) => (year < 0 ? 'present' : year)).join('&ndash;')
</script>

<template>
  <div class="entry">
    <ResponsiveImage
      v-if="image"
      :src="image"
      class="entry__image"
      :alt="`${subtitle} logo`"
      :width="400"
      :height="400"
    />
    <div class="entry__metadata">
      <component :is="`h${headingLevel}`" class="entry__title">
        {{ title }}
      </component>
      <div class="entry__subtitle">{{ subtitle }}</div>
      <div class="entry__years" v-html="displayYears" />
      <ul v-if="responsibilities" class="entry__responsibilities">
        <li
          v-for="(responsibility, responsibilityIndex) in responsibilities"
          :key="`responsibility-${responsibilityIndex}`"
          class="entry__responsibilities__responsibility"
          v-html="responsibility"
        />
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.entry {
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: auto minmax(75px, 150px);
  grid-gap: var(--space-xl);
  margin-top: var(--space-xl);

  @media print {
    grid-template-columns: auto minmax(25px, 50px);
  }

  @at-root #{&}__metadata {
    grid-column: 1;

    &:first-of-type {
      margin-top: 0;
    }
  }

  @at-root #{&}__image {
    grid-column: 2;
    break-inside: avoid;
  }

  @at-root #{&}__years {
    font-size: var(--text-md);
    font-weight: bold;
  }

  @at-root #{&}__title {
    font-size: var(--text-xl);
    font-weight: normal;
    margin-top: 0;
  }

  @at-root #{&}__subtitle {
    font-size: var(--text-lg);
    font-style: italic;
    margin-top: var(--space-xxs);
  }

  @at-root #{&}__responsibilities {
    list-style: disc;
  }
}
</style>
