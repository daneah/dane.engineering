<script setup lang="ts">
import { useHead } from '@unhead/vue'
import BaseLink from '@/components/Link/BaseLink.vue'

const pageDescription = 'This page does not exist'
useHead({
  title: 'Page not found',
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
    <h1>Page Not Found</h1>

    <p>
      It looks like the page you're looking for doesn't exist. Try going
      <router-link :to="{ name: 'home' }" custom v-slot="{ navigate }">
        <span @click="navigate" role="link">
          <BaseLink href="/" :external="false">home</BaseLink>
        </span>
      </router-link>
      and starting over.
    </p>
  </main>
</template>
