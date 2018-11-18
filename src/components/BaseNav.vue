<template>
    <nav>
        <ul>
            <li class="brand">
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
                        class="nav-link"
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
                        class="nav-link"
                    >
                        <BaseLink
                            :href="link.to"
                            :external="link.external || false"
                        >
                            {{ link.text }}
                        </BaseLink>
                    </router-link>
                    <li
                        v-else
                        :key="link.to"
                        class="nav-link"
                    >
                        <span>{{ link.text }}</span>
                    </li>
                </template>
            </template>
        </ul>
    </nav>
</template>

<script>
import BaseLink from '@/components/BaseLink';

export default {
  name: 'BaseNav',
  components: {
    BaseLink
  },
  props: {
    links: {
      type: Array,
      required: true
    }
  },
  computed: {
    activeLinks () {
      const currentRoute = this.$route.name
      return this.links.filter(link => link.to !== currentRoute)
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/main.scss';

nav {
    ul {
        list-style: none;
    }
}

.nav-link {
  font-size: var(--text-lg);
  padding: var(--space-xs);
  padding-left: 0;
}
</style>