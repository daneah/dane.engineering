<template>
    <main>
        <BaseHeading>About Dane</BaseHeading>

        <BaseParagraph>
            Dane grew up in Michigan and currently lives in Pittsburgh, Pennsylvania.
        </BaseParagraph>

        <BaseParagraph>
            Dane has a B.S.E in computer engineering with a minor in mathematics from the University of Michigan.
            As a software engineer, Dane has worked on research and development at SAIC (now <BaseLink href="https://www.leidos.com/">Leidos</BaseLink>)
            and personalized cancer genomics at Compendia Bioscience (now part of <BaseLink href="https://www.thermofisher.com">Thermo Fisher Scientific</BaseLink>).
            As a web application developer at <BaseLink href="https://www.ithaka.org">ITHAKA</BaseLink>,
            his focus is mainly on web development in Python, Django, and front-end technologies to enable academic research.
        </BaseParagraph>

        <BaseParagraph>
            Dane is an engineer, musician, photographer, dancer, and creative.
            Contribute to his rampant serial hobbyism by reaching out about stuff you want to build together.
        </BaseParagraph>

        <BaseHeading :level="2">Projects</BaseHeading>
        <ul class="projects">
            <li class="project">
                <Card>
                    <template slot="image">
                        <BaseLink href="https://github.com/daneah/pixelize">
                            <ResponsiveImage
                                :src="require('@/assets/pixelize.png')"
                                alt="Pixelize project screenshot"
                            />
                        </BaseLink>
                    </template>
                    <template slot="title">Pixelize</template>
                    <template slot="description">
                        <p>
                            <code>pixelize</code> is a tool to make glitch art from source images.
                        </p>
                    </template>
                </Card>
            </li>
            <li class="project">
                <Card>
                    <template slot="image">
                        <BaseLink
                            href="https://www.littleleviathan.com"
                            :rel="false"
                        >
                            <ResponsiveImage
                                :src="require('@/assets/little-leviathan.png')"
                                alt="Little Leviathan screenshot"
                            />
                        </BaseLink>
                    </template>
                    <template slot="title">Little Leviathan</template>
                    <template slot="description">
                        <p>
                            Little Leviathan is the name I write music under and is the name of my first album.
                        </p>
                    </template>
                </Card>
            </li>
            <li class="project">
                <Card>
                    <template slot="image">
                        <BaseLink
                            href="https://ballroomdance.club"
                        >
                            <ResponsiveImage
                                :src="require('@/assets/the-ballroom-dance-club.png')"
                                alt="The Ballroom Dance Club logo"
                            />
                        </BaseLink>
                    </template>
                    <template slot="title">The Ballroom Dance Club</template>
                    <template slot="description">
                        <p>
                            I was a competitive ballroom dancer for many years.
                            I totally revamped the local ballroom dance club's website,
                            helping users better find the schedule, membership options, and information about the dances.
                        </p>
                    </template>
                </Card>
            </li>
            <li class="project">
                <Card>
                    <template slot="image">
                        <BaseLink
                            href="https://www.danehillard.com"
                            :rel="false"
                        >
                            <ResponsiveImage
                                :src="require('@/assets/dane-hillard-photography.png')"
                                alt="Dane Hillard Photography screenshot"
                            />
                        </BaseLink>
                    </template>
                    <template slot="title">Dane Hillard Photography</template>
                    <template slot="description">
                        <p>
                            I'm a fashion and lifestyle photographer.
                            A majority of clients find me online so a portfolio and blog posts about my work draw people in.
                        </p>
                    </template>
                </Card>
            </li>
        </ul>
    </main>
</template>

<script>
import BaseHeading from '@/components/BaseHeading'
import BaseParagraph from '@/components/BaseParagraph'
import BaseLink from '@/components/BaseLink'
import ResponsiveImage from '@/components/ResponsiveImage'
import Card from '@/components/Card'

export default {
  name: 'Home',
  components: {
    BaseHeading,
    BaseParagraph,
    BaseLink,
    ResponsiveImage,
    Card
  },
  metaInfo: {
    titleTemplate: 'Dane Hillard',
    meta: [
      {
        property: 'og:title',
        content: 'Dane Hillard',
        vmid: 'og:title'
      },
      {
        property: 'og:url',
        content: '//dane.engineering',
        vmid: 'og:url'
      }
    ]
  }
}
</script>

<style scoped lang="scss">
.projects {
  list-style: none;
  display: grid;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, minmax(auto, 375px));
    grid-gap: var(--space-xxl);
  }
}

.project {
  margin-top: 0;
}
</style>
