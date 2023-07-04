<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import {useHead} from "@unhead/vue";
import BaseNav from '@/components/BaseNav.vue'
import BaseLink from '@/components/Link/BaseLink.vue'
import SocialLink from '@/components/SocialLink.vue'
import twitter from '@/assets/twitter.svg'
import github from '@/assets/github.svg'
import mastodon from '@/assets/mastodon.svg'
import dev from '@/assets/dev-badge.svg'
import medium from '@/assets/medium.svg'
import avatar from '@public/img/icons/avatar.png'

const navLinks = [
  { to: 'books', text: 'Books' },
  { to: 'talks', text: 'Talks' },
  { to: 'posts', text: 'Posts' },
  { to: 'resume', text: 'Résumé' },
  { to: 'contact', text: 'Contact' }
]

const route = useRoute()

useHead({
  titleTemplate: '%s | Dane Hillard',
  link: [
    {
      rel: 'canonical',
      href: () => `https://dane.engineering${route.fullPath}`
    }
  ],
  meta: [
    {
      property: 'og:url',
      content: () => `https://dane.engineering${route.fullPath}${route.fullPath ? '/' : ''}`
    },
    {
      property: 'og:image',
      content: avatar,
    }
  ],
})
</script>

<template>
  <div id="app">
    <BaseNav :links="navLinks">
      <template #brand>
        <template v-if="route.name === 'home'">
          <div class="impact-heading">Hi, I'm Dane.</div>
        </template>
        <template v-else>
          <router-link :to="{ name: 'home' }" custom v-slot="{ navigate }">
            <div @click="navigate" @keypress.enter="navigate" role="link">
              <BaseLink href="/" class="impact-heading" :external="false" :clean="true">
                Hi, I'm Dane.
              </BaseLink>
            </div>
          </router-link>
        </template>
      </template>
      <template #social-links>
        <li class="nav-social-links__link">
          <SocialLink
            url="https://twitter.com/easyaspython"
            :image="twitter"
            imageAlt="Twitter icon"
          />
        </li>
        <li class="nav-social-links__link">
          <SocialLink
            rel="me"
            url="https://fosstodon.org/@daneah"
            :image="mastodon"
            imageAlt="Mastodon icon"
          />
        </li>
        <li class="nav-social-links__link">
          <SocialLink url="https://github.com/daneah" :image="github" imageAlt="GitHub icon" />
        </li>
        <li class="nav-social-links__link">
          <SocialLink
            url="https://dev.to/easyaspython"
            :image="dev"
            imageAlt="Dane Hillard's DEV Profile"
          />
        </li>
        <li class="nav-social-links__link">
          <SocialLink url="https://easyaspython.com" :image="medium" imageAlt="Medium logo" />
        </li>
      </template>
    </BaseNav>
  </div>

  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Transition name="fade" mode="out-in">
        <Suspense>
          <component :is="Component"></component>

          <template #fallback> Loading... </template>
        </Suspense>
      </Transition>
    </template>
  </RouterView>
</template>

<style scoped></style>
