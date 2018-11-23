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
  name: 'Card'
}
</script>

<style scoped lang="scss">
.card {
  border: 1px solid var(--gray);
}

.card__body {
  padding: var(--space-md);
}

.card__title {
  font-size: var(--text-xl);
  font-weight: bold;
}
</style>
