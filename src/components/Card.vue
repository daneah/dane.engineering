<template>
    <div class="card">
        <div class="card__header">
            <router-link
                v-if="link"
                :to="link"
            >
                <slot name="image">
                    <img src="https://via.placeholder.com/250x250">
                </slot>
                <div class="card__title">
                    <slot name="title">
                        Card Title
                    </slot>
                </div>
            </router-link>
            <template v-else>
                <slot name="image">
                    <img src="https://via.placeholder.com/250x250">
                </slot>
                <div class="card__title">
                    <slot name="title">
                        Card Title
                    </slot>
                </div>
            </template>
        </div>
        <div class="card__body">
            <div class="card__description">
                <slot name="description">
                    <p>
                        This is the card description.
                    </p>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Card',
  props: {
    link: {
      type: Object,
      required: false,
    }
  },
  data () {
    return {}
  },
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
  margin-top: 0;
  padding: var(--space-sm);

  font-size: var(--text-lg);
  font-weight: bold;

  @media (max-width: 699px) {
    font-size: var(--text-lg);
  }

  word-break: break-word;
  hyphens: auto;
}
</style>
