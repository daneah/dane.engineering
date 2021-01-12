<template>
    <div
        :class="['flat', {'dark': darkMode}]"
        data-ea-publisher="dane-engineering"
        :data-ea-type="type"
        :keywords="keywords.join('|')"
    />
</template>

<script>
export default {
  name: "EthicalAd",
  props: {
    type: {
      type: String,
      required: false,
      default: "image",
    },
    keywords: {
      type: Array,
      required: false,
      default: [],
    },
  },
  computed: {
    darkMode () {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    },
  },
}
</script>
