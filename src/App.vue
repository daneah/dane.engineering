<template>
    <div id="app">
        <BaseNav :links="navLinks" />

        <transition name="fade">
            <router-view />
        </transition>
    </div>
</template>

<script>
import BaseNav from '@/components/BaseNav';

export default {
  name: 'App',
  components: {
    BaseNav
  },
  metaInfo () {
    return {
      title: 'GIVE ME A TITLE',
      titleTemplate: chunk => `${chunk} | Dane Hillard`,
      meta: [
        {
          property: 'og:title',
          content: 'GIVE ME A TITLE',
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
        { to: 'home', text: 'Home' },
        { to: 'talks', text: 'Talks' },
      ]
    }
  }
}
</script>

<style lang="scss">
@import '@/main.scss';

body {
    font-size: var(--text-base-size);
    font-family: var(--font-primary);
    color: var(--text-color);
}

main {
    margin: var(--space-xl) var(--space-xxl);
}

.fade-enter-active {
  transition-property: opacity;
  transition-duration: 0.5s;
}

.fade-leave-to,
.fade-enter {
  opacity: 0;
}
</style>
