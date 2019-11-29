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
                        :size="23"
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

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

* + * {
    margin-top: var(--space-md);
}

html,
body {
  @media (min-width: 700px) {
    width: 100%;
    height: 100%;
  }
}

@media (min-width: 700px) {
  html {
    overflow: auto;
  }
}

body {
    font-size: var(--text-base-size);
    font-family: var(--font-primary);
    color: var(--text);
    background: var(--background);
    margin-top: 0;
}

#app {
    margin-top: 0;
    display: grid;
    grid-template-areas:
        "nav"
        "main";
    grid-template-columns: 100vw;

    @media (min-width: 700px) {
        grid-template-columns: max-content minmax(0, auto);
        grid-template-areas:
            "nav main";
    }
}

nav {
    grid-area: nav;
}

main {
    grid-area: main;
    margin-top: 0;
    padding: var(--space-lg);

    @media (min-width: 700px) {
      padding: var(--space-xl);
    }
}

article {
  ul {
    font-size: var(--text-lg);
    max-width: 65ch;
  }
}

.impact-heading {
  @include title-font;
  font-size: var(--text-xl);
}

.fade-enter-active {
  transition-property: opacity;
  transition-duration: 0.5s;
}

.fade-leave-to,
.fade-enter {
  opacity: 0;
}

code {
  padding: 0.125em .5em;
  background: var(--very-light-gray);

  @media (prefers-color-scheme: dark) {
    background: var(--black);
  }
}

pre {
  background: var(--very-light-gray);
  font-size: var(--text-lg);
  padding: var(--space-md);

  code {
    padding: 0;
    background: none;
  }
}

.nav-social-links__link {
  display: inline-block;
  margin: 0;
  margin-left: calc(-1 * var(--space-sm));
}
</style>
