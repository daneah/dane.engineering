<template>
  <main>
    <h1>Posts</h1>
    <p v-if="loading">Loading...</p>
    <CardGrid v-else-if="posts.data.length">
      <template slot="cards">
        <ul class="posts">
          <li
            v-for="post in posts.data"
            :key="post.slug"
            class="post"
          >
            <Card :link="{ name: 'post', params: { slug: post.slug }}">
              <template slot="image">
                  <ResponsiveImage
                    v-if="post.featured_image"
                    :src="postThumbnail(post.featured_image)"
                    alt=""
                  />
              </template>
              <template slot="title">
                  {{ post.title }}
              </template>
              <template slot="description">{{ post.summary }}</template>
            </Card>
          </li>
        </ul>
      </template>
    </CardGrid>
    <p v-else>There are no posts available at this time!</p>
  </main>
</template>

<script>
import BaseLink from '@/components/BaseLink'
import Card from '@/components/Card'
import CardGrid from '@/components/CardGrid'
import ResponsiveImage from '@/components/ResponsiveImage'

const PAGE_TITLE = 'Blog posts'
const PAGE_DESCRIPTION = 'Blog posts about (mostly) web application development by Dane Hillard'

export default {
  name: 'BlogPostList',
  components: {
    BaseLink,
    Card,
    CardGrid,
    ResponsiveImage,
  },
  data () {
    return {
      loading: true,
      posts: {},
    }
  },
  methods: {
    fetchPosts () {
      this.$butter.post.list({page: 1, pageSize: 10})
        .then((response) => {
          this.loading = false
          this.posts = response.data
        }).catch((response) => {
          console.log(response)
        })
    },
    postThumbnail (imageUrl) {
      const butterPrefix = 'https://cdn.buttercms.com/'
      const thumbnailSize = 500
      const imageId = imageUrl.replace(butterPrefix, '')
      return `${butterPrefix}resize=width:${thumbnailSize},height:${thumbnailSize}/${imageId}`
    },
  },
  created () {
    this.fetchPosts()
  },
  metaInfo: {
    title: PAGE_TITLE,
    meta: [
      {
        property: 'og:title',
        content: `${PAGE_TITLE} | Dane Hillard`,
        vmid: 'og:title',
      },
      {
        name: 'description',
        content: PAGE_DESCRIPTION,
        vmid: 'description',
      },
      {
        property: 'og:description',
        content: PAGE_DESCRIPTION,
        vmid: 'og:description',
      }
    ],
  },
}
</script>

<style lang="scss" scoped>
.posts {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 3rem;
}

.post {
  margin: 0;
}
</style>
