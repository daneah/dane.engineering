<script setup lang="ts">
import {useHead} from "@unhead/vue";

import RadarPlot from '@/components/RadarPlot/RadarPlot.vue'
import Timeline from '@/components/TimelineEntryList.vue'
import { useTimelineStore } from '@/stores/timeline'
import { useSkillsStore } from '@/stores/skills'
import type { TimelineEntryProps } from '@/components/TimelineEntry.vue'

const timeline = useTimelineStore()
const skills = useSkillsStore()

useHead({
  title: 'Résumé',
})
</script>

<template>
  <main>
    <h1>Résumé</h1>

    <h2>Experience</h2>
    <Timeline :entries="timeline.entries as TimelineEntryProps[][]" :heading-level="3" />

    <h2>Skills</h2>

    <div class="skills-list">
      <div class="skills-list__skill">
        <h3>Languages</h3>
        <RadarPlot :levels="5" :characteristics="skills.languages" />
      </div>

      <div class="skills-list__skill">
        <h3>Frameworks and Tools</h3>
        <RadarPlot :levels="5" :characteristics="skills.frameworksAndTools" />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.skills-list {
  display: grid;

  @media print, (min-width: 700px) {
    grid-template-columns: repeat(2, minmax(auto, 375px));
    grid-gap: var(--space-xxl);
  }

  @at-root #{&}__skill {
    margin-top: 0;
  }
}
</style>
