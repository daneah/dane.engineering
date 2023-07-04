<script setup lang="ts">
type ImageDecoding = 'async' | 'auto' | 'sync' | undefined
interface ResponsiveImageProps {
  src: string
  webp?: string
  alt: string
  grow?: boolean
  height: number
  width: number
  decoding?: ImageDecoding
  loading?: string
}

withDefaults(defineProps<ResponsiveImageProps>(), {
  grow: true,
  decoding: 'async',
  loading: 'lazy'
})
</script>

<template>
  <picture class="responsive-image">
    <source v-if="webp" :srcset="webp" type="image/webp" media="(min-width: 0px)" />
    <img
      :class="['responsive-image__image', { 'responsive-image__image--limited': !grow }]"
      :decoding="decoding"
      :src="src"
      :alt="alt"
      :height="height"
      :width="width"
      :loading="loading"
    />
  </picture>
</template>

<style scoped lang="scss">
.responsive-image__image {
  width: 100%;
  height: auto;
  margin-top: 0;

  @at-root #{&}--limited {
    max-width: 100%;
  }
}
</style>
