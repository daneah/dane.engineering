<template>
    <nav>
        <ul>
            <template
                v-for="link in links"
            >
                <router-link
                    v-if="activeLinks.includes(link)"
                    :key="link"
                    tag="li"
                    :to="{ name: link.to }"
                >
                    <a>{{ link.text }}</a>
                </router-link>
                <li
                    v-else
                    :key="link"
                >
                    <span>{{ link.text }}</span>
                </li>
            </template>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'BaseNav',
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
    margin: 0 var(--space-xxl);

    ul {
        list-style: none;

        li {
            display: inline-block;

            a,
            span {
                display: block;
                padding: var(--space-md) var(--space-sm) 0 var(--space-sm);
                text-decoration: none;
                font-size: var(--text-lg);
                color: var(--text-color);
            }

            a:hover {
                text-decoration: underline;
            }

            &:first-child {
              a,
              span {
                padding-left: 0;
              }
            }
        }
    }
}
</style>
