<template>
    <div id="app">
        <BaseNav :links="navLinks">
            <template #brand>
                <template v-if="$route.name === 'home'">
                    <div class="impact-heading">Hi, I'm Dane.</div>
                </template>
                <template v-else>
                    <router-link
                        tag="div"
                        :to="{ name: 'home' }"
                    >
                        <BaseLink
                            href="/"
                            class="impact-heading"
                            :external="false"
                            :clean="true"
                        >
                            Hi, I'm Dane.
                        </BaseLink>
                    </router-link>
                </template>
            </template>
            <template #social-links>
                <li class="nav-social-links__link">
                    <SocialLink
                        url="https://twitter.com/easyaspython"
                        :image="require('@/assets/twitter.svg')"
                        imageAlt="Twitter icon"
                    />
                </li>
                <li class="nav-social-links__link">
                    <SocialLink
                        url="https://github.com/daneah"
                        :image="require('@/assets/github.svg')"
                        imageAlt="GitHub icon"
                    />
                </li>
                <li class="nav-social-links__link">
                    <SocialLink
                        url="https://dev.to/easyaspython"
                        :image="require('@/assets/dev-badge.svg')"
                        imageAlt="Dane Hillard's DEV Profile"
                    />
                </li>
                <li class="nav-social-links__link">
                    <SocialLink
                        url="https://easyaspython.com"
                        :image="require('@/assets/medium.svg')"
                        imageAlt="Medium logo"
                    />
                </li>
            </template>
        </BaseNav>

        <transition name="fade">
            <router-view />
        </transition>
    </div>
</template>

<script>
import BaseNav from '@/components/BaseNav';
import BaseLink from '@/components/BaseLink';
import SocialLink from '@/components/SocialLink';

export default {
  name: 'App',
  components: {
    BaseNav,
    BaseLink,
    SocialLink,
  },
  metaInfo () {
    return {
      title: 'GIVE ME A TITLE',
      titleTemplate: chunk => `${chunk} | Dane Hillard`,
      meta: [
        {
          property: 'og:title', content: 'GIVE ME A TITLE',
          vmid: 'og:title'
        },
        {
          property: 'og:url',
          content: `https://dane.engineering${location.pathname}`,
          vmid: 'og:url'
        },
        {
          name: 'description',
          content: 'GIVE ME A DESCRIPTION',
          vmid: 'description'
        },
        {
          property: 'og:image',
          content: 'https://dane.engineering/img/icons/avatar.png',
          vmid: 'og:image',
        },
      ]
    }
  },
  data () {
    return {
      navLinks: [
        { to: 'books', text: 'Books' },
        { to: 'talks', text: 'Talks' },
        { to: 'posts', text: 'Posts' },
        { to: 'resume', text: 'Résumé' },
        { to: 'contact', text: 'Contact' },
      ]
    }
  }
}
</script>

<style lang="scss">
@import '@/main.scss';
</style>
