<template>
    <p>
        <slot />
    </p>
</template>

<script>
export default {
    name: 'BaseParagraph'
}
</script>

<style lang="scss" scoped>
p {
    line-height: var(--body-line-height);
    word-break: break-word;
    hyphens: auto;
    max-width: 60ch;

    & + p {
        text-indent: var(--space-lg);
        margin-top: var(--space-md);
    }
}
</style>
