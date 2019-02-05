<template>
    <main>
        <h1>
            Talks
        </h1>
        <ul class="talk-list">
            <li>
                <h2>Serverless Django with Zappa</h2>
                <h3>DjangoCon US 2018</h3>
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
import YouTubeEmbed from '@/components/YouTubeEmbed'
import ResponsiveImage from '@/components/ResponsiveImage'

const PAGE_TITLE = 'Talks'
const PAGE_DESCRIPTION = 'Django and Python Conference talks by Dane Hillard'

export default {
  name: 'Talks',
  components: {
    YouTubeEmbed,
    ResponsiveImage
  },
  metaInfo: {
    title: PAGE_TITLE,
    meta: [
      {
        property: 'og:title',
        content: `${PAGE_TITLE} | Dane Hillard`,
        vmid: 'og:title',
      },
      {
        name: 'description',
        content: PAGE_DESCRIPTION,
        vmid: 'description',
      },
      {
        property: 'og:description',
        content: PAGE_DESCRIPTION,
        vmid: 'og:description',
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
