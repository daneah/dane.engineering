<template>
    <main>
        <BaseHeading>
            Hi, I'm Dane.
        </BaseHeading>
    </main>
</template>

<script>
import BaseHeading from '@/components/BaseHeading'

export default {
  name: 'Home',
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
  },
  components: {
    BaseHeading
  }
}
</script>
