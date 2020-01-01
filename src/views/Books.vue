<template>
    <main>
        <h1>Books</h1>

        <ul class="book-list">
            <li>
                <h2>Practices of the Python Pro</h2>

                <div class="book-list__book__cover">
                    <BaseLink
                        href="https://www.manning.com/books/practices-of-the-python-pro?a_aid=danehillard&a_bid=857f932b"
                        :external="true"
                    >
                        <ResponsiveImage
                            :src="require('@/assets/practices-of-the-python-pro-cover.png')"
                            :webp="require('@/assets/practices-of-the-python-pro-cover.webp')"
                            alt="Book cover for Practices of the Python Pro by Dane Hillard"
                        />
                    </BaseLink>
                </div>

                <p>
                    Professional developers know the many benefits of writing application code that’s clean, well-organized, and easy to maintain.
                    By learning and following established patterns and best practices, you can take your code and your career to a new level.
                    With <em>Practices of the Python Pro</em>, you’ll learn to design professional-level, clean, easily-maintainable software at scale using the incredibly popular programming language, Python.
                    You’ll find easy-to-grok examples that use pseudocode and Python to introduce software development best practices, along with dozens of instantly-useful techniques that will help you code like a pro.
                </p>

                <p>
                    I wrote this book for people like my friend who moved into a career in software from pharmacology, or my friend who uses Python to gain new insights into protein folding.
                    The uses for software are unimaginably diverse, as are the people who read and write it.
                    I want <em>Practices of the Python Pro</em> to help as many people as possible learn to write code they can rely on and collaborate on!
                    If you'd like to learn how to make your code last, please
                    <BaseLink
                        href="https://www.manning.com/books/practices-of-the-python-pro?a_aid=danehillard&a_bid=857f932b"
                        :external="true"
                    >buy the book</BaseLink>!
                </p>
            </li>
        </ul>
    </main>
</template>

<script>
import BaseLink from '@/components/BaseLink'
import ResponsiveImage from '@/components/ResponsiveImage'

const PAGE_TITLE = 'Books',
  PAGE_DESCRIPTION = 'Programming and software development books written by Dane Hillard'

export default {
  name: 'PythonBook',
  components: {
    BaseLink,
    ResponsiveImage,
  },
  metaInfo:  {
    title: PAGE_TITLE,
    meta: [
      {
        property: 'og:title',
        content: `${PAGE_TITLE}`,
        vmid: 'og:title',
      },
      {
        property: 'description',
        content: PAGE_DESCRIPTION,
        vmid: 'description',
      },
      {
        property: 'og:description',
        content: PAGE_DESCRIPTION,
        vmid: 'og:description',
      },
    ]
  },
}
</script>

<style scoped lang="scss">
.book-list {
  list-style: none;

  @at-root #{&}__book__cover {
    max-width: 500px;
  }
}
</style>
