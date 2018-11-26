<template>
    <div class="card">
        <div class="card__image">
            <slot name="image">
                <img src="https://via.placeholder.com/250x250">
            </slot>
        </div>
        <div class="card__body">
            <div class="card__title">
                <slot name="title">
                    Card Title
                </slot>
            </div>
            <div class="card__description">
                <slot name="description">
                    <BaseParagraph>
                        This is the card description.
                    </BaseParagraph>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
import BaseParagraph from '@/components/BaseParagraph';

export default {
  name: 'Card',
  components: {
    BaseParagraph
  }
}
</script>

<style scoped lang="scss">
.card {
  border: 1px solid var(--gray);
}

.card__body {
  margin-top: 0;
  padding: var(--space-md);
}

.card__title {
  font-size: var(--text-xl);
  font-weight: bold;
}
</style>
