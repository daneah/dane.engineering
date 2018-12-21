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

const PAGE_TITLE = 'Talks',
    PAGE_DESCRIPTION = 'Django and Python Conference talks by Dane Hillard'

export default {
  name: 'Talks',
  components: {
    BaseHeading,
    YouTubeEmbed,
    ResponsiveImage
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
        content: 'https://dane.engineering/talks',
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
.talk-list {
  list-style: none;

}

.talk-instance__visuals {
  display: grid;
  grid-template-columns: minmax(75px, 250px) minmax(250px, 500px);
  grid-gap: var(--space-sm);
}
</style>
