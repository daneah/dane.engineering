<script setup lang="ts">
interface SpeakerDeckEmbedProps {
  deckId: string
}
defineProps<SpeakerDeckEmbedProps>()
</script>

<template>
  <div class="embed-container">
    <iframe
      :src="`https://speakerdeck.com/player/${deckId}`"
      frameborder="0"
      allowfullscreen
      allowtransparency
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
