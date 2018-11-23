<template>
    <main>
        <BaseHeading>Résumé</BaseHeading>

        <BaseHeading :level="2">Skills</BaseHeading>

        <div class="skills">
            <div class="skill">
                <BaseHeading :level="3">Languages</BaseHeading>
                <RadarPlot
                    :levels="5"
                    :characteristics="languages"
                />
            </div>

            <div class="skill">
                <BaseHeading :level="3">Frameworks and Tools</BaseHeading>
                <RadarPlot
                    :levels="5"
                    :characteristics="frameworksAndTools"
                />
            </div>
        </div>
    </main>
</template>

<script>
import BaseHeading from '@/components/BaseHeading'
import RadarPlot from '@/components/RadarPlot'

export default {
  name: 'Resume',
  components: {
    BaseHeading,
    RadarPlot
  },
  data () {
    return {
      languages: [
        {
          name: 'Java',
          score: 1
        },
        {
          name: 'Ruby',
          score: 3,
        },
        {
          name: 'Python',
          score: 5,
        },
        {
          name: 'CSS',
          score: 3.75,
        },
        {
          name: 'JavaScript',
          score: 3.5,
        }
      ],
      frameworksAndTools: [
        {
          name: 'Django',
          score: 5
        },
        {
          name: 'jQuery',
          score: 4.5
        },
        {
          name: 'Vue.js',
          score: 3.25
        },
        {
          name: 'React',
          score: 2
        },
        {
          name: 'ZURB Foundation',
          score: 3.75
        },
        {
          name: 'Bootstrap',
          score: 3.75
        },
        {
          name: 'SASS',
          score: 5
        },
        {
          name: 'Webpack',
          score: 4
        }
      ]
    }
  },
  metaInfo: {
    title: 'Résumé',
    meta: [
      {
        property: 'og:title',
        content: 'Résumé | Dane Hillard',
        vmid: 'og:title'
      },
      {
        property: 'og:url',
        content: '//dane.engineering/resume',
        vmid: 'og:url'
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
