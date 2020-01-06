<template>
    <main>
        <h1>Books</h1>

        <ul class="book-list">
            <li>
                <h2>Practices of the Python Pro</h2>

                <BaseLink
                  href="https://www.manning.com/books/practices-of-the-python-pro?a_aid=danehillard&a_bid=857f932b"
                  :external="true"
                >
                  <PrimaryButton>Buy now</PrimaryButton>
                </BaseLink>

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
                    As you start your adventure in writing software, you'll often find yourself scrambling to a working solution.
                    Learning syntax, data structures, and code style for a programming language serve as additional barriers along the way.
                </p>

                <p>
                    As you gain experience, you might start to hear from others how certain practices make code easier to work with.
                    Often, these practices are provided without justification, or in the worst cases without much explanation about how they even work.
                    Without a solid handle on these concepts you'll face challenges scaling software to serve larger and larger projects.
                </p>

                <p>
                    <em>Practices of the Python Pro</em> will teach you some of the key aspects of writing maintainable software.
                    From separation of concerns to encapsulation to abstraction, the book contains small examples in Python that you can follow to level up your software development skills.
                    Learn about the benefits of composition over inheritance, how to use inversion of control to achieve loose coupling, and how to create performance tests and functional tests.
                    Full of concepts you can apply to most any language or framework, <em>Practices of the Python Pro</em> will have you writing more maintainable code with confidence faster than ever before.
                </p>

                <p>
                    Whether you're just starting out in programming, using software to supplement your data science work, or applying code in novel ways to art or music, <em>Practices of the Python Pro</em> has something for you.
                    Are you ready to get started?
                    <BaseLink
                        href="https://www.manning.com/books/practices-of-the-python-pro?a_aid=danehillard&a_bid=857f932b"
                        :external="true"
                    >Buy the book</BaseLink> today!
                </p>
            </li>
        </ul>
    </main>
</template>

<script>
import BaseLink from '@/components/BaseLink'
import PrimaryButton from '@/components/Button/PrimaryButton'
import ResponsiveImage from '@/components/ResponsiveImage'

const PAGE_TITLE = 'Books',
  PAGE_DESCRIPTION = 'Programming and software development books written by Dane Hillard'

export default {
  name: 'PythonBook',
  components: {
    BaseLink,
    PrimaryButton,
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
