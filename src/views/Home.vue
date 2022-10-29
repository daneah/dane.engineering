<template>
    <main>
        <h1>About Dane</h1>

        <div class="about">
            <div class="bio">
                <p>
                    Dane Hillard is a software engineer and web developer interested in education, biotechnology, and open source.
                </p>

                <p>
                    Dane has a B.S.E. in computer engineering with a minor in mathematics from the University of Michigan.
                    As a software engineer, Dane has worked on intelligence research and development at SAIC (now <BaseLink href="https://www.leidos.com/">Leidos</BaseLink>)
                    and personalized cancer genomics at Compendia Bioscience (now part of <BaseLink href="https://www.thermofisher.com">Thermo Fisher Scientific</BaseLink>).
                    As a technical architect at <BaseLink href="https://www.ithaka.org">ITHAKA</BaseLink>,
                    his focus is mainly on web development in Python, Django, and front-end technologies to enable academic research.
                </p>

                <p>
                    Dane grew up in Michigan and currently lives in Philadelphia, Pennsylvania.
                </p>
            </div>
            <ResponsiveImage
                class="portrait"
                :src="require('@/assets/dane-hillard.png')"
                :webp="require('@/assets/dane-hillard.webp')"
                alt="Portrait of Dane Hillard"
                :width="250"
                :height="344"
            />
        </div>

        <h2>Projects</h2>
        <p>
            I like to make things.
            Some of the projects below were for school or work, but I chose to make them because they were fun and challenging.
            Go build something!
        </p>
        <CardGrid>
          <template #cards>
            <ul class="project-list">
                <li class="project-list__project">
                    <Card>
                        <template #image>
                            <BaseLink
                                href="https://github.com/ithaka/pharos"
                            >
                                <ResponsiveImage
                                    :src="require('@/assets/pharos.png')"
                                    :webp="require('@/assets/pharos.webp')"
                                    alt="The colored orb logo for Pharos, JSTOR's design system"
                                    :width="1000"
                                    :height="588"
                                />
                            </BaseLink>
                        </template>
                        <template #title>Pharos</template>
                        <template #description>
                            <p>
                                Pharos is JSTOR's design system.
                                It contains our design decisions, a component library, a Storybook playground, and more.
                            </p>
                        </template>
                    </Card>
                </li>
                <li class="project-list__project">
                    <Card>
                        <template #image>
                            <BaseLink href="https://github.com/daneah/pixelize">
                                <ResponsiveImage
                                    :src="require('@/assets/pixelize.png')"
                                    :webp="require('@/assets/pixelize.webp')"
                                    alt="pixelize project screenshot"
                                    :width="1110"
                                    :height="784"
                                />
                            </BaseLink>
                        </template>
                        <template #title>pixelize</template>
                        <template #description>
                            <p>
                                <code>pixelize</code> is a tool to make glitch art from source images.
                            </p>
                        </template>
                    </Card>
                </li>
                <li class="project-list__project">
                    <Card>
                        <template #image>
                            <BaseLink
                                href="https://github.com/ithaka/apiron"
                            >
                                <ResponsiveImage
                                    :src="require('@/assets/apiron.png')"
                                    :webp="require('@/assets/apiron.webp')"
                                    alt="Screenshot of apiron GitHub page"
                                    :width="1320"
                                    :height="724"
                                />
                            </BaseLink>
                        </template>
                        <template #title>apiron</template>
                        <template #description>
                            <p>
                                <code>apiron</code> is a Python library for building RESTful API clients.
                                We built this at ITHAKA to speed up development and interact with our internal services more consistently.
                            </p>
                        </template>
                    </Card>
                </li>
                <li class="project-list__project">
                    <Card>
                        <template #image>
                            <BaseLink
                                href="https://codepen.io/collection/DOmwxa/"
                            >
                                <ResponsiveImage
                                    :src="require('@/assets/mondrian.png')"
                                    alt="Screenshot of the Mondrian collection on CodePen"
                                    :width="1610"
                                    :height="1322"
                                />
                            </BaseLink>
                        </template>
                        <template #title>Mondrian</template>
                        <template #description>
                            <p>
                                A collection of Mondrian works recreated in CSS Grid
                            </p>
                        </template>
                    </Card>
                </li>
                <li class="project-list__project">
                    <Card>
                        <template #image>
                            <BaseLink
                                href="/toneshift.pdf"
                                :external="false"
                            >
                                <ResponsiveImage
                                    :src="require('@/assets/guitar.jpg')"
                                    :webp="require('@/assets/guitar.webp')"
                                    alt="Guitar"
                                    :width="333"
                                    :height="249"
                                />
                            </BaseLink>
                        </template>
                        <template #title>ToneShift</template>
                        <template #description>
                            <p>
                                Our 2007 senior design project at the University of Michigan
                                to build a pitch-shifting device for electric guitars.
                                For contemporary work in this area see <BaseLink href="https://guitarpitchshifter.com">Guitar Pitch Shifter</BaseLink>
                                or Alan Pagliere's <BaseLink href="http://www.freepatentsonline.com/y2018/0053494.html">work on lap steel guitar tunings</BaseLink>.
                            </p>
                        </template>
                    </Card>
                </li>
              </ul>
            </template>
          </CardGrid>
      </main>
  </template>

<script>
import BaseLink from '@/components/BaseLink'
import Card from '@/components/Card/Card'
import CardGrid from '@/components/CardGrid'
import ResponsiveImage from '@/components/ResponsiveImage'

const PAGE_DESCRIPTION = 'Dane Hillard is a software engineer and web developer interested in education, biotechnology, and open source.'

export default {
  name: 'Home',
  components: {
    BaseLink,
    Card,
    CardGrid,
    ResponsiveImage,
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

<style lang="scss" scoped>
.project-list {
  list-style: none;
  display: grid;
  grid-gap: var(--space-md);

  @media (min-width: 700px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: var(--space-lg);
  }

  @at-root #{&}__project {
    margin-top: 0;
  }
}

.about,
.book-announcement {
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

.portrait {
    clip-path: polygon(0% 4%, 95% 0%, 100% 100%, 0% 97%);
}
</style>
