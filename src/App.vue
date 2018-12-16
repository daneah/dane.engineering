<template>
    <div id="app">
        <BaseNav :links="navLinks">
            <template slot="brand">
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
            <template slot="social-links">
                <li>
                    <BaseLink
                        href="https://twitter.com/easyaspython"
                    >
                        <img
                            :src="require('@/assets/twitter.svg')"
                            alt="Twitter icon"
                            width="25"
                        >
                    </BaseLink>
                </li>
                <li>
                    <BaseLink
                        href="https://github.com/daneah"
                    >
                        <img
                            :src="require('@/assets/github.svg')"
                            alt="GitHub icon"
                            width="25"
                        >
                    </BaseLink>
                </li>
                <li>
                    <BaseLink
                        href="https://dev.to/easyaspython"
                    >
                        <img
                            :src="require('@/assets/dev-badge.svg')"
                            alt="Dane Hillard's DEV Profile"
                            height="25"
                        >
                    </BaseLink>
                </li>
                <li>
                    <BaseLink
                        href="https://easyaspython.com"
                    >
                        <img
                            :src="require('@/assets/medium.svg')"
                            alt="Medium logo"
                            width="25"
                        >
                    </BaseLink>
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

export default {
  name: 'App',
  components: {
    BaseNav,
    BaseLink
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
          content: 'GIVE ME A URL',
          vmid: 'og:url'
        },
        {
          name: 'description',
          content: 'GIVE ME A DESCRIPTION',
          vmid: 'description'
        }
      ]
    }
  },
  data () {
    return {
      navLinks: [
        { to: 'talks', text: 'Talks' },
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
}

* + * {
    margin-top: var(--space-md);
}

html,
body {
  @media (min-width: 700px) {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
}

body {
    font-size: var(--text-base-size);
    font-family: var(--font-primary);
    color: var(--text-color);
    margin-top: 0;
}

#app {
    margin-top: 0;
    display: grid;
    grid-template-areas:
        "nav"
        "main";

    @media (min-width: 700px) {
        grid-template-columns: max-content auto;
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

.impact-heading {
  font-size: var(--text-xl);
  font-family: var(--font-title);
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
}
</style>
