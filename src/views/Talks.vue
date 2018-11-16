<template>
    <main>
        <BaseHeading>
            Talks
        </BaseHeading>
        <ul>
            <li>
                <YouTubeEmbed video-id="ZfynWM4-jFE" />
            </li>
        </ul>
    </main>
</template>

<script>
import BaseHeading from '@/components/BaseHeading'
import YouTubeEmbed from '@/components/YouTubeEmbed'

export default {
  name: 'Talks',
  metaInfo: {
    title: 'Talks',
    meta: [
      {
        property: 'og:title',
        content: 'Talks | Dane Hillard',
        vmid: 'og:title'
      },
      {
        property: 'og:url',
        content: '//dane.engineering/talks',
        vmid: 'og:url'
      }
    ]
  },
  components: {
    BaseHeading,
    YouTubeEmbed
  }
}
</script>

<style scoped lang="scss">
ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
</style>
