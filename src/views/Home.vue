<template>
    <main>
        <BaseHeading>
            Hi, I'm Dane.
        </BaseHeading>
        <router-link to="talks">Talks</router-link>
    </main>
</template>

<script>
import BaseHeading from '@/components/BaseHeading'

export default {
  name: 'Home',
  components: {
    BaseHeading
  }
}
</script>
