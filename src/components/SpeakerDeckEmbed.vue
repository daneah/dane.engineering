<template>
    <div class="embed-container">
        <iframe
            :src="`//speakerdeck.com/player/${deckId}`"
            frameborder="0"
            allowfullscreen
            allowtransparency
        />
    </div>
</template>

</template>

<script>
export default {
  name: 'SpeakerDeckEmbed',
  props: {
    deckId: {
      type: String,
      required: true,
    }
  },
  data () {
    return {}
  },
}
</script>

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
