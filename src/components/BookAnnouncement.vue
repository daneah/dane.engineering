<template>
    <div class="book-announcement">
        <div class="book-plug">
            <h2>I'm writing another book!</h2>

            <p>
                I'm writing <BaseLink href="https://pypackages.com" :external="true"><em>Publishing Python Packages</em></BaseLink> for Manning Books.
                Visit the site to learn more and sign up for updates.
            </p>
        </div>
        <ResponsiveImage
            :src="require('@/assets/publishing-python-packages-cover.jpg')"
            :webp="require('@/assets/publishing-python-packages-cover.webp')"
            alt="Book cover for Publishing Python Packages by Dane Hillard"
            width="264"
            height="331"
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
