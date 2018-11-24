<template>
    <main>
        <BaseHeading>Thanks!</BaseHeading>
        <BaseParagraph>
            If your communication requires a response, you'll get one in a (hopefully) timely manner.
        </BaseParagraph>
    </main>
</template>

<script>
import BaseHeading from '@/components/BaseHeading'
import BaseParagraph from '@/components/BaseParagraph'

export default {
  name: 'ContactSuccess',
  components: {
    BaseHeading,
    BaseParagraph
  },
  metaInfo: {
    title: 'Thanks!',
    meta: [
      {
        property: 'og:title',
        content: 'Thanks! | Dane Hillard',
        vmid: 'og:title'
      },
      {
        property: 'og:url',
        content: '//dane.engineering/thanks',
        vmid: 'og:url'
      }
    ]
  }
}
</script>
