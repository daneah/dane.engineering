<template>
    <main>
        <h1>Résumé</h1>

        <h2>Experience</h2>
        <Timeline :entries="$store.state.employment" />

        <h2>Skills</h2>

        <div class="skills">
            <div class="skill">
                <h3>Languages</h3>
                <RadarPlot
                    :levels="5"
                    :characteristics="$store.state.skills.languages"
                />
            </div>

            <div class="skill">
                <h3>Frameworks and Tools</h3>
                <RadarPlot
                    :levels="5"
                    :characteristics="$store.state.skills.frameworksAndTools"
                    color="var(--dark-gray)"
                />
            </div>
        </div>
    </main>
</template>

<script>
import RadarPlot from '@/components/RadarPlot'
import Timeline from '@/components/Timeline'

const PAGE_TITLE = 'Résumé',
    PAGE_DESCRIPTION = 'Professional skills and experience for Dane Hillard: Python, Django, JavaScript, CSS, and more.'

export default {
  name: 'Resume',
  components: {
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
