<template>
    <div class="book-announcement">
        <div class="book-plug">
            <h2>I'm writing a book!</h2>

            <p>
                <BaseLink href="https://bit.ly/the-python-pro"><em>Practices of the Python Pro</em></BaseLink>
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
                The first chapter is available <strong>free of charge</strong> and the early access currently includes the first six chapters.
                If you <BaseLink href="https://bit.ly/the-python-pro">buy now</BaseLink> you can read new chapters as they're ready
                and provide feedback along the way so that I can make this book a great learning tool for everyone!
            </p>
        </div>
        <ResponsiveImage
            :src="require('@/assets/practices-of-the-python-pro-cover.png')"
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
    background: var(--gray);
    padding: var(--space-xl);
}
</style>
