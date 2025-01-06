<script setup lang="ts">
import Butter from 'buttercms'
import { useHead } from '@unhead/vue'
import type { Ref } from 'vue'
import { ref } from 'vue'

import Card from '@/components/Card/BaseCard.vue'
import CardGrid from '@/components/CardGrid.vue'
import ResponsiveImage from '@/components/ResponsiveImage.vue'
import Article from '@/components/ExternalArticle.vue'

const pageDescription = 'Blog posts about (mostly) web application development by Dane Hillard'
useHead({
  title: 'Blog posts',
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

interface FullPostData extends Butter.Post {
  thumbnailSrc: string
  thumbnailHeight: number
  thumbnailWidth: number
}
const butterDomain = 'https://cdn.buttercms.com'
const thumbnailSize = 500

const loading = ref(true)
const posts: Ref<FullPostData[]> = ref([])

await Butter('cd7317f31d717fc87a1374098f53651830003bed')
  .post.list({
    page: 1,
    page_size: 25,
    exclude_body: true
  })
  .then((response) => {
    if (response.data) {
      const imageDimensionCalls = (response.data.data as unknown as Butter.Post[]).map(
        (post: Butter.Post) => {
          const imageId = post.featured_image.replace(`${butterDomain}/`, '')
          const imageDimensionsUrl = `${butterDomain}/resize=width:${thumbnailSize},height:${thumbnailSize}/imagesize/${imageId}`
          return fetch(imageDimensionsUrl)
            .then((response) => response.json())
            .then((data) => data)
        }
      )
      Promise.all(imageDimensionCalls).then((values) => {
        if (response.data) {
          posts.value = (response.data.data as unknown as Butter.Post[]).map(
            (post: Butter.Post, postIndex: number) => {
              const value = values[postIndex]
              const imageId = post.featured_image.replace(`${butterDomain}/`, '')
              return {
                ...post,
                thumbnailSrc: `${butterDomain}/resize=width:${thumbnailSize},height:${thumbnailSize}/${imageId}`,
                thumbnailHeight: value.height,
                thumbnailWidth: value.width
              }
            }
          )
        }
        loading.value = false
      })
    }
  })
  .catch((error) => {
    console.error(error)
  })
</script>

<template>
  <main>
    <h1>Posts</h1>
    <p v-if="loading">Loading...</p>
    <CardGrid v-else-if="posts.length">
      <template #cards>
        <ul class="posts">
          <li v-for="post in posts" :key="post.slug" class="posts__post">
            <Card :link="{ name: 'post', params: { slug: post.slug } }">
              <template #image>
                <ResponsiveImage
                  v-if="post.featured_image"
                  :src="post.thumbnailSrc"
                  :height="post.thumbnailHeight"
                  :width="post.thumbnailWidth"
                  alt=""
                />
              </template>
              <template #title>
                {{ post.title }}
              </template>
              <template #description>
                {{ post.summary }}
              </template>
            </Card>
          </li>
        </ul>
      </template>
    </CardGrid>
    <p v-else>There are no posts available at this time!</p>

    <h2>From elsewhere on the web</h2>
    <ul class="external-article-list">
      <li>
        <Article
          title="Creating The Conditions to Learn From Incidents"
          site="Jeli"
          link="https://www.jeli.io/blog/creating-the-conditions-to-learn-from-incidents"
        />
      </li>
      <li>
        <Article
          title="Find bugs before your users do: closing the software development risk exposure gap"
          site="ITHAKA Tech"
          link="https://medium.com/ithaka-tech/find-bugs-before-your-users-do-closing-the-software-development-risk-exposure-gap-cace5dbd19d2"
        />
      </li>
      <li>
        <Article
          title="Architectural decision records and the quest for consistency"
          site="ITHAKA Tech"
          link="https://medium.com/ithaka-tech/architectural-decision-records-and-the-quest-for-consistency-c9e0617aa7d0"
        />
      </li>
      <li>
        <Article
          title="Build a Blog Using Django, Vue, and GraphQL"
          site="Real Python"
          link="https://realpython.com/python-django-blog/"
        />
      </li>
      <li>
        <Article
          title="Python Packages: Five Real Python Favorites"
          site="Real Python"
          link="https://realpython.com/python-packages/"
        />
      </li>
      <li>
        <Article
          title="Effective Python Testing With Pytest"
          site="Real Python"
          link="https://realpython.com/pytest-python-testing/"
        />
      </li>
      <li>
        <Article
          title="An Effective Python Environment: Making Yourself at Home"
          site="Real Python"
          link="https://realpython.com/effective-python-environment/"
        />
      </li>
      <li>
        <Article
          title="Deploying Features Under the Cover of Darkness"
          site="ITHAKA Tech"
          link="https://medium.com/build-smarter/deploying-features-under-cover-of-darkness-f112ce444bba"
        />
      </li>
      <li>
        <Article
          title="Blazing fast Python"
          site="ITHAKA Tech"
          link="https://medium.com/build-smarter/blazing-fast-python-40a2b25b0495"
        />
      </li>
      <li>
        <Article
          title="Consolidating Multiple Django Projects"
          site="Easy as Python"
          link="https://easyaspython.com/how-to-consolidate-multiple-django-projects-b7c9bb940a59"
        />
      </li>
      <li>
        <Article
          title="Django's cached template loader"
          site="ITHAKA Tech"
          link="https://medium.com/build-smarter/djangos-cached-template-loader-829f7b176e6f"
        />
      </li>
    </ul>
  </main>
</template>

<style lang="scss" scoped>
.posts {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  grid-gap: 3rem;

  @at-root #{&}__post {
    margin: 0;
  }
}

.external-article-list {
  list-style: none;
}
</style>
