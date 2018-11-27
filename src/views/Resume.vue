<template>
    <main>
        <BaseHeading>Résumé</BaseHeading>

        <BaseHeading :level="2">Experience</BaseHeading>
        <Timeline :entries="$store.state.employment" />

        <BaseHeading :level="2">Skills</BaseHeading>

        <div class="skills">
            <div class="skill">
                <BaseHeading :level="3">Languages</BaseHeading>
                <RadarPlot
                    :levels="5"
                    :characteristics="$store.state.skills.languages"
                />
            </div>

            <div class="skill">
                <BaseHeading :level="3">Frameworks and Tools</BaseHeading>
                <RadarPlot
                    :levels="5"
                    :characteristics="$store.state.skills.frameworksAndTools"
                />
            </div>
        </div>
    </main>
</template>

<script>
import BaseHeading from '@/components/BaseHeading'
import RadarPlot from '@/components/RadarPlot'
import Timeline from '@/components/Timeline'

const PAGE_TITLE = 'Résumé',
    PAGE_DESCRIPTION = 'Professional skills and experience for Dane Hillard: Python, Django, JavaScript, CSS, and more.'

export default {
  name: 'Resume',
  components: {
    BaseHeading,
    RadarPlot,
    Timeline
  },
  metaInfo: {
    title: PAGE_TITLE,
    meta: [
      {
        property: 'og:title',
        content: `${PAGE_TITLE} | Dane Hillard`,
        vmid: 'og:title'
      },
      {
        property: 'og:url',
        content: '//dane.engineering/resume',
        vmid: 'og:url'
      },
      {
        name: 'description',
        content: PAGE_DESCRIPTION,
        vmid: 'description'
      },
      {
        property: 'og:description',
        content: PAGE_DESCRIPTION,
        vmid: 'og:description'
      }
    ]
  }
}
</script>

<style scoped lang="scss">
.skills {
  display: grid;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, minmax(auto, 375px));
    grid-gap: var(--space-xxl);
  }
}

.skill {
  margin-top: 0;
}
</style>
