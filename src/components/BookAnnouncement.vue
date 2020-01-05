<template>
    <div class="book-announcement">
        <div class="book-plug">
            <h2>I wrote a book!</h2>

            <p>
                After much ado, <router-link class="link" :to="{'name': 'books'}"><em>Practices of the Python Pro</em></router-link>
                is now available for purchase through Manning Books.
            </p>

            <p>
                This book is geared toward people just getting into software development,
                or using Python as a supplement to their work in a different discipline.
                Please share with anyone looking to learn more about software development principles and best practices!
            </p>
        </div>
        <ResponsiveImage
            :src="require('@/assets/practices-of-the-python-pro-cover.png')"
            :webp="require('@/assets/practices-of-the-python-pro-cover.webp')"
            alt="Book cover for Practices of the Python Pro by Dane Hillard"
        />
    </div>
</template>

<script>
import BaseLink from '@/components/BaseLink'
import ResponsiveImage from '@/components/ResponsiveImage'

export default {
  name: 'BookAnnouncement',
  components: {
    BaseLink,
    ResponsiveImage,
  },
  data () {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.book-announcement {
    background: var(--panel-background);
    padding: var(--space-xl);
    margin-top: var(--space-xl);
    clip-path: polygon(1% 0%, 100% 2%, 99% 100%, 0% 98%);
}
</style>
