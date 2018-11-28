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
  --transition-time: 0.25s;
  --transition-easing: ease-in-out;

  border: 1px solid var(--gray);
  transition: transform var(--transition-time) var(--transition-easing), box-shadow var(--transition-time) var(--transition-easing);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  }
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
