<script setup lang="ts">
import { useHead } from '@unhead/vue'

import BaseLink from '@/components/Link/BaseLink.vue'

const pageDescription = 'In no particular order, these are some of the other blogs out there that are worth your while to check out.'
useHead({
  title: 'Worth reading',
  meta: [
    {
      name: 'description',
      content: pageDescription
    },
    {
      name: 'og:description',
      content: pageDescription
    }
  ]
})
const blogs = [
  {
    url: 'https://nedbatchelder.com/',
    title: 'Ned Batchelder\'s blog'
  },
  {
    url: 'https://danluu.com/',
    title: 'Dan Luu'
  },
  {
    url: 'https://snarky.ca/',
    title: 'Tall, Snarky Canadian'
  },
  {
    url: 'https://stephango.com/',
    title: 'Stephan Ango'
  },
  {
    url: 'https://jvns.ca',
    title: 'Julia Evans'
  },
  {
    url: 'https://simonwillison.net/',
    title: 'Simon Willison'
  },
  {
    url: 'https://martinfowler.com/',
    title: 'Martin Fowler'
  },
  {
    url: 'https://hillelwayne.com/',
    title: 'Hillel Wayne'
  }
]
</script>

<template>
  <main>
    <h1>Worth reading</h1>
    <p>{{ pageDescription }}</p>

    <ul>
      <li v-for="blog in blogs" :key="blog.id">
        <BaseLink :href="blog.url">{{ blog.title }}</BaseLink>
      </li>
    </ul>
  </main>
</template>
