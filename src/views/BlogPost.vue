<template>
  <div class="post">
    <main>
      <article v-if="!loading && post.data && post.data.published">
        <h1>{{ post.data.title }}</h1>
        <span class="metadata">{{ publishedDate }}</span>
        <div v-html="post.data.body" />
      </article>
      <p v-else>
        Loading...
      </p>
    </main>
    <footer v-if="!loading && post.data && post.data.published">
      <span>This post is made better with <BaseLink href="https://buttercms.com">Butter</BaseLink></span>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'
import Prism from 'prismjs'

import BaseLink from '@/components/BaseLink'

export default {
  name: 'BlogPost',
  components: {
    BaseLink,
  },
  data () {
    return {
      loading: true,
      post: {},
      seo: {},
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
      this.$butter.post.retrieve(this.$route.params.slug)
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
    fetchPostSeo () {
      axios.get(`https://api.buttercms.com/v2/content/blog_post_seo/?fields.post_slug=${this.$route.params.slug}&auth_token=${this.$butterApiToken}`)
        .then((response) => {
          this.seo = response.data.data.blog_post_seo.length > 0 ? response.data.data.blog_post_seo[0]: {}
        }).catch((response) => {
          console.log(response)
        })
    },
  },
  watch: {
    $route(to, from) {
      this.fetchPost()
      this.fetchPostSeo()
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
      link: this.loading || !this.seo.canonical_link ? [] : [
        { rel: 'canonical', href: this.seo.canonical_link },
      ],
    }
  },
}
</script>

<style lang="scss">
img {
  max-width: 100%;
  height: auto;
}

.post {
  margin-top: 0;
}

.metadata {
  font-size: var(--text-lg);
  font-style: italic;
  color: var(--medium-gray);
}

footer {
  border-top: 1px solid var(--very-light-gray);
  color: var(--medium-gray);
  font-style: italic;
  padding: var(--space-lg);
  margin-top: 0;

  @media (min-width: 700px) {
    padding: var(--space-xl);
  }
}
</style>
