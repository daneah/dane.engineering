<template>
    <main>
        <h1>Books</h1>

        <ul class="book-list">
            <li class="book-list__book">
                <h2>Publishing Python Packages</h2>

                <BaseLink
                  href="https://pypackages.com"
                  :external="true"
                >
                  <PrimaryButton>Get early access</PrimaryButton>
                </BaseLink>

                <div class="book-list__book__cover">
                    <BaseLink
                        href="https://pypackages.com"
                        :external="true"
                    >
                        <ResponsiveImage
                            :src="require('@/assets/publishing-python-packages-cover.jpg')"
                            :webp="require('@/assets/publishing-python-packages-cover.webp')"
                            alt="Book cover for Publishing Python Packages by Dane Hillard"
                        />
                    </BaseLink>
                </div>

                <p>
                  The life of a maintainer can be hard.
                  Beyond writing working code, you have to triage issues, review pull requests, and create releases regularly.
                  Don't let the logistics of package management get in your way.
                </p>

                <p>
                  I'm currently writing <em>Publishing Python Packages</em>, a book about creating and streamlining a repeatable process for authoring and maintaining Python packages.
                  Whether you're looking to create your first published Python package or trying to reduce the maintenance burden of the packages you already work on, <em>Publishing Python Packages</em> has something for you.
                </p>
            </li>

            <li class="book-list__book">
                <h2>Practices of the Python Pro</h2>

                <BaseLink
                  href="https://thepythonpro.com"
                  :external="true"
                >
                  <PrimaryButton>Buy now</PrimaryButton>
                </BaseLink>

                <div class="book-list__book__cover">
                    <BaseLink
                        href="https://thepythonpro.com"
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
                        href="https://thepythonpro.com"
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
    max-width: 300px;
  }

  @at-root #{&}__book {
    margin-bottom: var(--space-xxl);
  }
}
</style>
