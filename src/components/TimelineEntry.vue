<template>
  <div class="entry">
      <ResponsiveImage
          v-if="image"
          :src="image"
          class="entry__image"
          :alt="`${subtitle} logo`"
      />
      <div class="entry__metadata">
          <component
              :is="`h${headingLevel}`"
              class="entry__title"
          >
              {{ title }}
          </component>
          <div class="entry__subtitle">{{ subtitle }}</div>
          <div class="entry__years">{{ years.join("&ndash;") }}</div>
          <ul
              v-if="responsibilities"
              class="entry__responsibilities"
          >
              <li
                  v-for="responsibility in responsibilities"
                  class="entry__responsibilities__responsibility"
              >
                  {{ responsibility }}
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import ResponsiveImage from '@/components/ResponsiveImage'

export default {
  name: 'TimelineEntry',
  components: {
    ResponsiveImage,
  },
  props: {
    image: {
      type: String,
      required: false,
    },
    headingLevel: {
      type: Number,
      required: false,
      default: 2,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    years: {
      type: Array,
      required: true,
    },
    responsibilities: {
      type: Array,
      required: false,
      default: [],
    },
  },
}
</script>

<style scoped lang="scss">
.entry {
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: 50% minmax(75px, 150px);
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
