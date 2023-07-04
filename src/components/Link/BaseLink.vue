<script setup lang="ts">
import type { ComputedRef } from 'vue'
import { computed } from 'vue'

export type LinkProps = {
  href: string
  rel?: string
  external?: boolean
  clean?: boolean
}

const props = withDefaults(defineProps<LinkProps>(), {
  external: true,
  clean: false
})

const finalRel: ComputedRef<string | undefined> = computed(
  (): string | undefined => props.rel || (props.external ? 'noopener noindex nofollow' : undefined)
)
</script>

<template>
  <a
    :class="['link', { 'link--clean': clean }]"
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="finalRel"
    ><slot
  /></a>
</template>

<style scoped></style>
