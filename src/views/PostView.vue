<script setup lang="ts">
import highlight from 'highlight.js/lib/common'
import type { Ref } from 'vue'
import { useRoute } from 'vue-router'
import { nextTick, onMounted, onUpdated, ref } from 'vue'
import Butter from 'buttercms'
import { useHead } from '@unhead/vue'
import axios from 'axios'

import BaseLink from '@/components/Link/BaseLink.vue'

const route = useRoute()

const loading = ref(true)
const post: Ref<Butter.Post | undefined> = ref(undefined)
const canonicalLink = ref('')

const apiToken = 'cd7317f31d717fc87a1374098f53651830003bed'

useHead({
  title: () => post.value?.seo_title || 'Post',
  link: [
    {
      rel: 'canonical',
      href: () => canonicalLink.value || `https://dane.engineering${route.fullPath}/`
    }
  ],
  meta: [
    {
      property: 'og:title',
      content: () => `${post.value?.seo_title} | Dane Hillard`
    },
    {
      name: 'description',
      content: () => post.value?.meta_description
    },
    {
      property: 'og:description',
      content: () => post.value?.meta_description
    },
    {
      property: 'og:image',
      content: () => post.value?.featured_image
    }
  ]
})

onUpdated(() => {
  nextTick(() =>
    window.requestAnimationFrame(() => {
      highlight.highlightAll()
    })
  )
})

onMounted(async () => {
  await Butter(apiToken)
    .post.retrieve(route.params.slug as string)
    .then(async (response) => {
      post.value = response.data?.data as unknown as Butter.Post

      await axios
        .get(
          `https://api.buttercms.com/v2/content/blog_post_seo/?fields.post_slug=${route.params.slug}&auth_token=${apiToken}`
        )
        .then((response) => {
          canonicalLink.value =
            response.data?.data.blog_post_seo.length > 0
              ? response.data.data.blog_post_seo[0].canonical_link
              : ''
        })
        .catch((response) => {
          console.error(response)
        })
      loading.value = false
    })
    .catch((response) => {
      console.error(response)
    })
})

const getLocalDate = (timestamp: Date): string => {
  const date = new Date(timestamp)
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(date)
}

const publishedDate = () => (post.value ? getLocalDate(post.value?.published) : '')
const lastUpdatedDate = () => (post.value ? getLocalDate(post.value?.updated) : '')
</script>

<template>
  <div class="post">
    <main>
      <article v-if="!loading && post && post.published">
        <h1>{{ post?.title }}</h1>
        <div class="post__metadata">
          {{ publishedDate() }}
          <span v-if="publishedDate() !== lastUpdatedDate()"
            >(Updated {{ lastUpdatedDate() }})</span
          >
        </div>
        <div v-html="post.body" />
      </article>
      <p v-else>Loading...</p>
    </main>
    <footer class="post__footer" v-if="!loading && post && post.published">
      <span
        >This post is made better with
        <BaseLink href="https://buttercms.com">Butter</BaseLink></span
      >
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/_links';

.post {
  margin-top: 0;

  @at-root #{&}__metadata {
    font-size: var(--text-lg);
    font-style: italic;
    color: var(--medium-gray);
  }

  @at-root #{&}__footer {
    border-top: 1px solid var(--very-light-gray);
    color: var(--medium-gray);
    font-style: italic;
    padding: var(--space-lg);
    margin-top: 0;

    @media (min-width: 700px) {
      padding: var(--space-xl);
    }
  }

  & :deep() {
    a {
      @extend %link;
    }
  }

  & :deep() {
    img {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>
