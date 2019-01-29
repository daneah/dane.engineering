<template>
    <main>
        <BaseHeading>About Dane</BaseHeading>

        <div class="about">
            <div class="bio">
                <BaseParagraph>
                    Dane Hillard is a software engineer and web developer interested in education, biotechnology, and open source.
                </BaseParagraph>

                <BaseParagraph>
                    Dane has a B.S.E in computer engineering with a minor in mathematics from the University of Michigan.
                    As a software engineer, Dane has worked on intelligence research and development at SAIC (now <BaseLink href="https://www.leidos.com/">Leidos</BaseLink>)
                    and personalized cancer genomics at Compendia Bioscience (now part of <BaseLink href="https://www.thermofisher.com">Thermo Fisher Scientific</BaseLink>).
                    As a lead web application developer at <BaseLink href="https://www.ithaka.org">ITHAKA</BaseLink>,
                    his focus is mainly on web development in Python, Django, and front-end technologies to enable academic research.
                </BaseParagraph>

                <BaseParagraph>
                    Dane grew up in Michigan and currently lives in Pittsburgh, Pennsylvania.
                </BaseParagraph>
            </div>
            <ResponsiveImage
                :src="require('@/assets/dane-hillard.png')"
                alt="Portrait of Dane Hillard"
            />
        </div>

        <BaseHeading :level="2">Projects</BaseHeading>
        <ul class="projects">
            <li class="project">
                <Card>
                    <template slot="image">
                        <BaseLink href="https://github.com/daneah/pixelize">
                            <ResponsiveImage
                                :src="require('@/assets/pixelize.png')"
                                alt="pixelize project screenshot"
                            />
                        </BaseLink>
                    </template>
                    <template slot="title">pixelize</template>
                    <template slot="description">
                        <BaseParagraph>
                            <code>pixelize</code> is a tool to make glitch art from source images.
                        </BaseParagraph>
                    </template>
                </Card>
            </li>
            <li class="project">
                <Card>
                    <template slot="image">
                        <BaseLink
                            href="https://github.com/ithaka/apiron"
                        >
                            <ResponsiveImage
                                :src="require('@/assets/apiron.png')"
                                alt="Screenshot of apiron GitHub page"
                            />
                        </BaseLink>
                    </template>
                    <template slot="title">apiron</template>
                    <template slot="description">
                        <BaseParagraph>
                            <code>apiron</code> is a Python library for building RESTful API clients.
                            We built this at ITHAKA to speed up development and interact with our internal services more consistently.
                        </BaseParagraph>
                    </template>
                </Card>
            </li>
            <li class="project">
                <Card>
                    <template slot="image">
                        <BaseLink
                            href="https://codepen.io/collection/DOmwxa/"
                        >
                            <ResponsiveImage
                                :src="require('@/assets/mondrian.png')"
                                alt="Screenshot of the Mondrian collection on CodePen"
                            />
                        </BaseLink>
                    </template>
                    <template slot="title">Mondrian</template>
                    <template slot="description">
                        <BaseParagraph>
                            A collection of Mondrian works recreated in CSS Grid
                        </BaseParagraph>
                    </template>
                </Card>
            </li>
            <li class="project">
                <Card>
                    <template slot="image">
                        <BaseLink
                            href="/toneshift.pdf"
                            :external="false"
                        >
                            <ResponsiveImage
                                :src="require('@/assets/guitar.jpg')"
                                alt="Guitar"
                            />
                        </BaseLink>
                    </template>
                    <template slot="title">ToneShift</template>
                    <template slot="description">
                        <BaseParagraph>
                            Our 2007 senior design project at the University of Michigan
                            to build a pitch-shifting device for electric guitars.
                            For contemporary work in this area see <BaseLink href="https://guitarpitchshifter.com">Guitar Pitch Shifter</BaseLink>
                            or Alan Pagliere's <BaseLink href="http://www.freepatentsonline.com/y2018/0053494.html">work on lap steel guitar tunings</BaseLink>.
                        </BaseParagraph>
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

const PAGE_DESCRIPTION = 'Dane Hillard is a software engineer and web developer interested in education, biotechnology, and open source.'

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
        content: 'https://dane.engineering',
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
.projects {
  list-style: none;
  display: grid;
  grid-gap: var(--space-md);

  @media (min-width: 700px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: var(--space-xl);
  }
}

.project {
  margin-top: 0;
}

.about {
  display: grid;
  grid-gap: var(--space-lg);

  @media (max-width: 699px) {
    img {
      width: 50%;
      min-width: 100px;
      margin: 0 auto;
    }
  }

  @media (min-width: 700px) {
    grid-template-columns: minmax(200px, max-content) minmax(100px, 250px);

    img {
      margin-top: 0;
    }
  }
}
</style>
