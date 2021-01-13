<template>
    <nav class="nav">
        <ul class="nav__link-list">
            <li class="nav__brand">
                <slot name="brand">
                    Brand
                </slot>
            </li>
            <template
                v-for="link in links"
            >
                <template v-if="link.external">
                    <li
                        :key="link.to"
                        class="nav__link"
                    >
                        <BaseLink
                            :href="link.to"
                            :external="true"
                        >
                            {{ link.text }}
                        </BaseLink>
                    </li>
                </template>
                <template v-else>
                    <router-link
                        v-if="activeLinks.includes(link)"
                        :key="link.to"
                        tag="li"
                        :to="{ name: link.to }"
                        class="nav__link"
                    >
                        <BaseLink
                            :href="$router.resolve({ name: link.to }).href"
                            :external="link.external || false"
                        >
                            {{ link.text }}
                        </BaseLink>
                    </router-link>
                    <li
                        v-else
                        :key="link.to"
                        class="nav__link"
                    >
                        <span>{{ link.text }}</span>
                    </li>
                </template>
            </template>
            <li>
                <ul class="nav__social">
                    <slot name="social-links" />
                </ul>
            </li>
        </ul>
        <EthicalAd
            id="sidebar"
            class="ethical"
            type="text"
            :key="$route.path"
            :keywords="['python', 'webdev', 'django']"
        />
    </nav>
</template>

<script>
import BaseLink from '@/components/BaseLink'
import EthicalAd from '@/components/EthicalAd'

export default {
  name: 'BaseNav',
  components: {
    BaseLink,
    EthicalAd,
  },
  props: {
    links: {
      type: Array,
      required: true,
    }
  },
  data () {
    return {}
  },
  computed: {
    activeLinks () {
      const currentRoute = this.$route.name
      return this.links.filter(link => link.to !== currentRoute)
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/main.scss';

.nav {
    padding: var(--space-lg);
    background: var(--nav-background);

    @media (min-width: 700px) {
      min-height: 100vh;
      padding: var(--space-xl);
    }

    @at-root #{&}__link-list {
        list-style: none;

        @media (min-width: 700px) {
          position: sticky;
          top: var(--space-xl);
        }
    }

    @at-root #{&}__link {
      font-size: var(--text-lg);
      margin-top: 0;
      padding: var(--space-xs);
      padding-left: 0;

      @media (max-width: 699px) {
        display: inline-block;
      }
    }
}

@media print {
  .nav__link,
  .nav__social {
    display: none;
  }
}

.ethical {
  @media (min-width: 700px) {
    position: fixed;
    max-width: 160px;
  }

  ::v-deep .ea-content {
    margin: 0 !important;
  }
}
</style>
