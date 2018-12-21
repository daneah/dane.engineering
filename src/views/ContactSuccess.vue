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

const PAGE_TITLE = 'Thanks!',
    PAGE_DESCRIPTION = 'High five. Dane likes hearing from you!'

export default {
  name: 'ContactSuccess',
  components: {
    BaseHeading,
    BaseParagraph
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
        content: 'https://dane.engineering/thanks',
        vmid: 'og:url'
      },
      {
        property: 'description',
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
