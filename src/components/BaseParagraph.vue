<template>
    <p>
        <slot />
    </p>
</template>

<script>
export default {
    name: 'BaseParagraph',
    props: {
        lead: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
p {
    line-height: var(--body-line-height);
    word-break: break-word;
    hyphens: auto;
    max-width: 65ch;

    &.lead {
        font-size: var(--text-lg);
    }

    + p {
        text-indent: var(--space-lg);
        margin-top: var(--space-md);
    }
}
</style>
