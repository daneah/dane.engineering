<template>
    <main>
        <h1>Posts</h1>
        <p v-if="loading">
            Loading...
        </p>
        <CardGrid v-else-if="posts.length">
            <template #cards>
                <ul class="posts">
                    <li
                        v-for="post in posts"
                        :key="post.slug"
                        class="posts__post"
                    >
                        <Card :link="{ name: 'post', params: { slug: post.slug }}">
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
        <p v-else>
            There are no posts available at this time!
        </p>

        <h2>From elsewhere on the web</h2>
        <ul class="external-article-list">
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
                    site="Build Smarter"
                    link="https://medium.com/build-smarter/deploying-features-under-cover-of-darkness-f112ce444bba"
                />
            </li>
            <li>
                <Article
                    title="Blazing fast Python"
                    site="Build Smarter"
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
                    site="Build Smarter"
                    link="https://medium.com/build-smarter/djangos-cached-template-loader-829f7b176e6f"
                />
            </li>
        </ul>
    </main>
</template>

<script>
import Card from '@/components/Card/Card'
import CardGrid from '@/components/CardGrid'
import ResponsiveImage from '@/components/ResponsiveImage'
import Article from "../components/Article";

const PAGE_TITLE = 'Blog posts'
const PAGE_DESCRIPTION = 'Blog posts about (mostly) web application development by Dane Hillard'

export default {
  name: 'BlogPostList',
  components: {
    Article,
    Card,
    CardGrid,
    ResponsiveImage,
  },
  data () {
    return {
      loading: true,
      posts: [],
    }
  },
  created () {
    this.BUTTER_DOMAIN = 'https://cdn.buttercms.com'
    this.THUMBNAIL_SIZE = 500
    this.fetchPosts()
  },
  methods: {
    fetchPosts () {
      this.$butter.post.list({
        "page": 1,
        "page_size": 25,
        "exclude_body": true,
      })
        .then((response) => {
          let imageDimensionCalls = [];

          response.data.data.forEach((post, postIndex) => {
            const imageId = post.featured_image.replace(`${this.BUTTER_DOMAIN}/`, '')
            const imageUrl = `${this.BUTTER_DOMAIN}/resize=width:${this.THUMBNAIL_SIZE},height:${this.THUMBNAIL_SIZE}/${imageId}`
            const imageDimensionsUrl = `${this.BUTTER_DOMAIN}/resize=width:${this.THUMBNAIL_SIZE},height:${this.THUMBNAIL_SIZE}/imagesize/${imageId}`
              imageDimensionCalls.push(fetch(imageDimensionsUrl).then((response) => response.json()).then((data) => data))
          })

          Promise.all(imageDimensionCalls).then((values) => {
            response.data.data.forEach((post, postIndex) => {
              const value = values[postIndex]
              const imageId = post.featured_image.replace(`${this.BUTTER_DOMAIN}/`, '')
              const imageUrl = `${this.BUTTER_DOMAIN}/resize=width:${this.THUMBNAIL_SIZE},height:${this.THUMBNAIL_SIZE}/${imageId}`
              post.thumbnailSrc = imageUrl
              post.thumbnailHeight = value.height
              post.thumbnailWidth = value.width
            })
            this.posts = response.data.data
            this.loading = false
          })

        }).catch((response) => {
          console.error(response)
        })
    },
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
