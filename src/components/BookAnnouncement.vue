<template>
    <div class="book-announcement">
        <div class="book-plug">
            <h2>I'm writing a book!</h2>

            <p>
                <router-link class="link" :to="{'name': 'books'}"><em>Practices of the Python Pro</em></router-link>
                is currently available through Manning's early access program.
                I've been sharing my experience in Python with others for a few years
                and this is my biggest attempt in that endeavor, to date!
            </p>

            <p>
                This book is geared toward people just getting into software development,
                or using Python as a supplement to their work in a different discipline.
                Please share with anyone looking to learn more about software development principles and best practices!
            </p>

            <p>
                The first chapter is available <strong>free of charge</strong> and the full book is available in early access until production is finalized.
            </p>
        </div>
        <ResponsiveImage
            :src="require('@/assets/practices-of-the-python-pro-cover.jpg')"
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
