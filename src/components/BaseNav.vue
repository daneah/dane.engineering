<template>
    <nav>
        <ul>
            <router-link
                v-for="link in links"
                :key="link.to"
                tag="li"
                :to="{ name: link.to }"
            >
                <a>{{ link.text }}</a>
            </router-link>
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

            a {
                display: block;
                padding: var(--space-md) var(--space-sm) 0 var(--space-sm);
                text-decoration: none;
                font-size: var(--text-lg);
                color: var(--text-color);

                &:hover {
                    text-decoration: underline;
                }
            }

            &:first-child a {
                padding-left: 0;
            }

            &.router-link-exact-active a {
                color: #4652cc;
            }
        }
    }
}
</style>
