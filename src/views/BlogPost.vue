<template>
  <main>
    <article v-if="post.data && post.data.published">
      <h1>{{ post.data.title }}</h1>
      <span class="metadata">{{ publishedDate }}</span>
      <div v-html="post.data.body" />
    </article>
  </main>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'BlogPost',
  data () {
    return {
      loading: true,
      post: {},
    }
  },
  computed: {
    publishedDate () {
      const pubDate = new Date(this.post.data.published)
      let options = {
        year: "numeric", month: "long",
        day: "numeric", hour: "2-digit", minute: "2-digit"
      }
      return pubDate.toLocaleTimeString('en-us', options)
    }
  },
  methods: {
    fetchPost () {
      this.butter.post.retrieve(this.$route.params.slug)
        .then((response) => {
          this.loading = false
          this.post = response.data
          this.$nextTick(() => {
            Prism.highlightAll()
          })
        }).catch((response) => {
          console.log(response)
        })
    },
  },
  watch: {
    $route(to, from) {
      this.fetchPost()
    },
  },
  created () {
    this.fetchPost()
  },
  metaInfo () {
    let meta = [
      {
        property: 'og:title',
        content: this.loading ? 'Loading...' : `${this.post.data.title} | Dane Hillard`,
        vmid: 'og:title',
      },
      {
        name: 'description',
        content: this.loading ? 'Loading...' : this.post.data.meta_description,
        vmid: 'description',
      },
      {
        property: 'og:description',
        content: this.loading ? 'Loading...' : this.post.data.meta_description,
        vmid: 'og:description',
      },
    ]

    if (!this.loading && this.post.data.featured_image) {
      meta.push({
        property: 'og:image',
        content: this.post.data.featured_image,
        vmid: 'og:image',
      })
    }

    return {
      title: this.loading ? 'Loading...' : this.post.data.title,
      meta: meta,
    }
  },
}
</script>

<style lang="scss">
img {
  max-width: 100%;
}

.metadata {
  font-size: var(--text-lg);
  font-style: italic;
  color: var(--medium-gray);
}
</style>
