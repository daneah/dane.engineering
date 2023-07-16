<script setup lang="ts">
import BaseLink from '@/components/Link/BaseLink.vue'
import Badge from '@/components/Badge/BaseBadge.vue'

interface ExternalArticleProps {
  title: string
  site: string
  link: string
}

const props = defineProps<ExternalArticleProps>()

const siteToColor: Record<string, string> = {
  ['Real Python']: '#18354c',
  ['ITHAKA Tech']: '#000000',
  ['Easy as Python']: '#22ba9b'
}
const badgeColor = siteToColor[props.site]
</script>

<template>
  <span class="article">
    <BaseLink :href="link">
      <em>{{ title }}</em>
    </BaseLink>
    <div class="article__badge">
      <Badge :color="badgeColor">{{ site }}</Badge>
    </div>
  </span>
</template>

<style scoped>
.article__badge {
  display: inline-block;
  margin-left: 1rem;
}
</style>
