<script setup lang="ts">
import BaseLink from '@/components/Link/BaseLink.vue'
import type { ComputedRef } from 'vue'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import EthicalAd from '@/components/EthicalAd.vue'

interface NavLinkProps {
  to: string
  text: string
}
interface NavProps {
  links: NavLinkProps[]
}
const props = defineProps<NavProps>()

const router = useRouter()
const route = useRoute()
const activeLinks: ComputedRef<NavLinkProps[]> = computed((): NavLinkProps[] => {
  return props.links.filter((link) => link.to !== route.name)
})
</script>

<template>
  <nav class="nav">
    <ul class="nav__link-list">
      <li class="nav__brand">
        <slot name="brand"> Brand </slot>
      </li>
      <template v-for="link in links">
        <router-link
          v-if="activeLinks.includes(link)"
          :key="link.to"
          :to="{ name: link.to }"
          custom
          v-slot="{ navigate }"
        >
          <li @click="navigate" @keypress.enter="navigate" role="link" class="nav__link">
            <BaseLink :href="router.resolve({ name: link.to }).href" :external="false">
              {{ link.text }}
            </BaseLink>
          </li>
        </router-link>
        <li v-else :key="link.to" class="nav__link">
          <span>{{ link.text }}</span>
        </li>
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
      :key="route.path"
      :keywords="['python', 'webdev', 'django']"
    />
  </nav>
</template>

<style scoped lang="scss">
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

  :deep(.ea-content) {
    margin: 0 !important;
  }
}
</style>
