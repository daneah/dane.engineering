<template>
    <main>
        <BaseHeading>
            Talks
        </BaseHeading>
        <ul class="talk-list">
            <li>
                <BaseHeading :level="2">Serverless Django with Zappa</BaseHeading>
                <BaseHeading :level="3">DjangoCon US 2018</BaseHeading>
                <div class="talk-instance__visuals">
                    <ResponsiveImage
                        :src="require('@/assets/djangocon.png')"
                        alt="DjangoCon US 2018"
                    />
                    <YouTubeEmbed video-id="ZfynWM4-jFE" />
                </div>
            </li>
        </ul>
    </main>
</template>

<script>
import BaseHeading from '@/components/BaseHeading'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import ResponsiveImage from '@/components/ResponsiveImage'

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
    YouTubeEmbed,
    ResponsiveImage
  }
}
</script>

<style scoped lang="scss">
.talk-list {
  list-style: none;

}

.talk-instance__visuals {
  display: grid;
  grid-template-columns: minmax(75px, 250px) minmax(250px, 500px);
  grid-gap: var(--space-sm);
}
</style>
