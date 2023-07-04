<script setup lang="ts">
import {onMounted} from "vue";

interface EthicalAdProps {
  type?: string
  keywords?: string[]
}

withDefaults(defineProps<EthicalAdProps>(), {
  type: 'image',
  keywords: () => [],
})

onMounted(() => (globalThis as any).ethicalads?.load())

const darkMode = () => globalThis.matchMedia && globalThis.matchMedia('(prefers-color-scheme: dark)').matches
</script>

<template>
  <div
      :class="['flat', {'dark': darkMode()}]"
      data-ea-publisher="dane-engineering"
      :data-ea-type="type"
      :keywords="keywords.join('|')"
  />
</template>