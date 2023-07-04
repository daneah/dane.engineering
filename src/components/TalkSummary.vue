<script setup lang="ts">
interface TalkProps {
  headingLevel?: number
  title: string
  subtitle: string
}

withDefaults(defineProps<TalkProps>(), {
  headingLevel: 1
})
</script>

<template>
  <div class="talk">
    <component :is="`h${headingLevel}`" class="talk__title">
      {{ title }}
    </component>
    <component :is="`h${headingLevel + 1}`" class="talk__subtitle">
      {{ subtitle }}
    </component>
    <div class="talk__description">
      <slot name="description" />
    </div>
    <div class="talk__visuals">
      <slot name="visuals" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.talk {
  @at-root #{&}__subtitle {
    margin-top: var(--space-xs);
  }

  @at-root #{&}__visuals {
    display: grid;
    grid-template-columns: 100px minmax(250px, 700px);
    grid-gap: var(--space-md);
  }
}
</style>
