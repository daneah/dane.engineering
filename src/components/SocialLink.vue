<template>
    <div class="social-link">
        <BaseLink
            class="social-link__anchor"
            :href="url"
        >
            <img
                :src="image"
                :alt="imageAlt"
                :width="size"
                :height="size"
            >
        </BaseLink>
    </div>
</template>

<script>
import BaseLink from '@/components/BaseLink'

export default {
  name: 'SocialLink',
  components: {
    BaseLink,
  },
  props: {
    url: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: false,
      default: 25,
    },
  },
}
</script>

<style scoped lang="scss">
.social-link {
  @at-root #{&}__anchor {
    display: inline-block;
    padding: var(--space-sm);
  }
}
</style>
