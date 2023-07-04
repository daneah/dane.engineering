<script setup lang="ts">
import BaseLink from '@/components/Link/BaseLink.vue'

interface SocialLinkProps {
  url: string
  rel?: string
  image: string
  imageAlt: string
  size?: number
}

withDefaults(defineProps<SocialLinkProps>(), {
  size: 25
})
</script>

<template>
  <div class="social-link">
    <BaseLink class="social-link__anchor" :href="url" :rel="rel">
      <img :src="image" :alt="imageAlt" :width="size" :height="size" />
    </BaseLink>
  </div>
</template>

<style scoped lang="scss">
.social-link {
  @at-root #{&}__anchor {
    display: inline-block;
    padding: var(--space-sm);
  }
}
</style>
