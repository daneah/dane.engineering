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
