<script setup lang="ts">
import '@/components/YouTubeEmbed.vue'

interface YouTubeEmbedProps {
  videoId: string
}
defineProps<YouTubeEmbedProps>()
</script>

<template>
  <div class="embed-container">
    <iframe
      :src="`https://www.youtube.com/embed/${videoId}`"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>

<style scoped lang="scss">
.embed-container {
  overflow: hidden;
  margin-top: 0;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;

  iframe {
    top: 0;
    left: 0;

    height: 100%;
    width: 100%;
    position: absolute;
  }
}
</style>
