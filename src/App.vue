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
        }
      ]
    }
  },
  data () {
    return {
      navLinks: [
        { to: 'talks', text: 'Talks' },
        { to: 'https://easyaspython.com', text: 'Writing', external: true },
        { to: 'resume', text: 'Résumé' },
        { to: 'https://github.com/daneah', text: 'GitHub', external: true },
        { to: 'https://twitter.com/easyaspython', text: 'Twitter', external: true },
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

body {
    font-size: var(--text-base-size);
    font-family: var(--font-primary);
    color: var(--text-color);
    padding: var(--space-xl);
}

#app {
    display: grid;
    grid-template-areas:
        "nav"
        "main";
    grid-gap: var(--space-xxl);

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
    margin-top: 0;
    grid-area: main;
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
