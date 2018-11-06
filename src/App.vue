<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import '@/main.scss';

body {
    font-size: var(--text-base-size);
    font-family: var(--font-primary);
    color: var(--text-color);
}

main {
    padding: var(--space-xxl);
}
</style>
