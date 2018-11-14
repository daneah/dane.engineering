<template>
    <div id="app">
        <transition name="fade">
            <router-view />
        </transition>
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

.fade-enter-active {
  transition-property: opacity;
  transition-duration: 0.5s;
}

.fade-leave-to,
.fade-enter {
  opacity: 0;
}
</style>
