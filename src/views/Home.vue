<template>
    <main>
        <BaseHeading>About Dane</BaseHeading>

        <BaseParagraph>
            Dane has a B.S.E in computer engineering with a minor in mathematics from the University of Michigan.
            As a software engineer, Dane has worked on research and development at SAIC (now <BaseLink href="https://www.leidos.com/">Leidos</BaseLink>)
            and personalized cancer genomics at Compendia Bioscience (now part of <BaseLink href="https://www.thermofisher.com">Thermo Fisher Scientific</BaseLink>).
            As a web application developer at <BaseLink href="https://www.ithaka.org">ITHAKA</BaseLink>,
            his focus has been mainly on web development in Python and Django to enable academic research.
        </BaseParagraph>

        <BaseParagraph>
            Dane Hillard is an engineer, musician, photographer, dancer, and creative.
            Contribute to his rampant serial hobbyism by reaching out about stuff you want to build together.
        </BaseParagraph>
    </main>
</template>

<script>
import BaseHeading from '@/components/BaseHeading'
import BaseParagraph from '@/components/BaseParagraph'
import BaseLink from '@/components/BaseLink'

export default {
  name: 'Home',
  components: {
    BaseHeading,
    BaseParagraph,
    BaseLink
  },
  metaInfo: {
    title: 'Home',
    meta: [
      {
        property: 'og:title',
        content: 'Home | Dane Hillard',
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
