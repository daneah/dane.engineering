<template>
    <div class="book-announcement">
        <div class="book-plug">
            <BaseHeading :level="2">I'm writing a book!</BaseHeading>

            <BaseParagraph class="lead">
                <BaseLink href="https://bit.ly/clap-py"><em>Code Like a Pro: Software Development in Python</em></BaseLink>
                is currently available through Manning's early access program.
                I've been sharing my experience in Python with others for a few years
                and this is my biggest attempt in that endeavor, to date!
            </BaseParagraph>

            <BaseParagraph class="lead">
                This book is geared toward people just getting into software development,
                or using Python as a supplement to their work in a different discipline.
                Please share with anyone looking to learn more about software development principles and best practices!
            </BaseParagraph>

            <BaseParagraph class="lead">
                The first chapter is available <strong>free of charge</strong> and the early access currently includes the first three chapters.
                If you <BaseLink href="https://bit.ly/clap-py">buy now</BaseLink> you can read new chapters as they're ready
                and provide feedback along the way so that I can make this book a great learning tool for everyone!
                <span v-if="dealAvailable">Get 50% off with the code <code>mlhillard</code> until February 7th.</span>
            </BaseParagraph>
        </div>
        <ResponsiveImage
            :src="require('@/assets/code-like-a-pro-meap-cover.png')"
            alt="Book cover for Code Like a Pro: Software Development in Python"
        />
    </div>
</template>

<script>
import BaseHeading from '@/components/BaseHeading'
import BaseLink from '@/components/BaseLink'
import BaseParagraph from '@/components/BaseParagraph'
import ResponsiveImage from '@/components/ResponsiveImage'

export default {
    name: 'BookAnnouncement',
    components: {
        BaseHeading,
        BaseLink,
        BaseParagraph,
        ResponsiveImage,
    },
    computed: {
        dealAvailable () {
            const rightNow = new Date()
            return rightNow.getMonth() === 0 || (rightNow.getMonth() === 1 && rightNow.getDate() <= 7)
        },
    },
}
</script>

<style lang="scss" scoped>
.book-announcement {
    background: var(--gray);
    padding: var(--space-xl);
}
</style>
