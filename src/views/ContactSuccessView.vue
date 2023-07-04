<script setup lang="ts">
import { useHead } from '@unhead/vue'

const pageDescription = 'High five. Dane likes hearing from you!'

useHead({
  title: 'Thanks!',
  meta: [
    {
      name: 'description',
      content: pageDescription
    },
    {
      property: 'og:description',
      content: pageDescription
    }
  ]
})
</script>

<template>
  <main>
    <h1>Thanks!</h1>
    <p>If your communication requires a response, you'll get one in a (hopefully) timely manner.</p>
  </main>
</template>
