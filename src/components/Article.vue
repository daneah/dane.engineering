<template>
    <span class="article">
        <BaseLink :href="link">
            <em>{{ title }}</em>
        </BaseLink>
        <div class="article__badge">
            <Badge :color="badgeColor">{{ site }}</Badge>
        </div>
    </span>
</template>

<script>
import BaseLink from "@/components/BaseLink";
import Badge from "@/components/Badge";

export default {
  name: "Article",
  components: {
    Badge,
    BaseLink
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    site: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    }
  },
  computed: {
    badgeColor () {
      const siteToColor = {
        ["Real Python"]: "#18354c",
        ["Build Smarter"]: "#8d7e5f",
        ["Easy as Python"]: "#22ba9b",
      }

      return siteToColor[this.site]
    }
  }
}
</script>

<style scoped>
.article__badge {
  display: inline-block;
  margin-left: 1rem;
}
</style>
