<script setup lang="ts">
import { useHead } from '@unhead/vue'

import BaseLink from '@/components/Link/BaseLink.vue'
import BaseButton from '@/components/Button/BaseButton.vue'
import ResponsiveImage from '@/components/ResponsiveImage.vue'

import publishingPythonPackagesJpeg from '@/assets/publishing-python-packages-cover.jpg'
import publishingPythonPackagesWebp from '@/assets/publishing-python-packages-cover.webp'
import practicesOfThePythonProPng from '@/assets/practices-of-the-python-pro-cover.png'
import practicesOfThePythonProWebp from '@/assets/practices-of-the-python-pro-cover.webp'

const pageDescription = 'Programming and software development books written by Dane Hillard'
useHead({
  title: 'Books',
  meta: [
    {
      name: 'description',
      content: pageDescription
    },
    {
      property: 'og:description',
      content: pageDescription
    }
  ]
})
</script>

<template>
  <main>
    <h1>Books</h1>

    <ul class="book-list">
      <li class="book-list__book">
        <h2>Publishing Python Packages: Test, share, and automate your projects</h2>

        <BaseLink href="https://pypackages.com" :external="true">
          <BaseButton>Buy now</BaseButton>
        </BaseLink>

        <div class="book-list__book__cover">
          <BaseLink href="https://pypackages.com" :external="true">
            <ResponsiveImage
              :src="publishingPythonPackagesJpeg"
              :webp="publishingPythonPackagesWebp"
              alt="Book cover for Publishing Python Packages: Test, share, and automate your projects by Dane Hillard"
              :width="264"
              :height="331"
            />
          </BaseLink>
        </div>

        <p>
          The life of a maintainer can be hard. Beyond writing working code, you have to triage
          issues, review pull requests, and create releases regularly. Don't let the logistics of
          package management get in your way.
        </p>

        <p>
          <em>Publishing Python Packages: Test, share, and automate your projects</em> is a book
          about creating and streamlining a repeatable process for authoring and maintaining Python
          packages. Whether you're looking to create your first published Python package or trying
          to reduce the maintenance burden of the packages you already work on,
          <em>Publishing Python Packages: Test, share, and automate your projects</em> has something
          for you.
        </p>
      </li>

      <li class="book-list__book">
        <h2>Practices of the Python Pro</h2>

        <BaseLink href="https://thepythonpro.com" :external="true">
          <BaseButton>Buy now</BaseButton>
        </BaseLink>

        <div class="book-list__book__cover">
          <BaseLink href="https://thepythonpro.com" :external="true">
            <ResponsiveImage
              :src="practicesOfThePythonProPng"
              :webp="practicesOfThePythonProWebp"
              alt="Book cover for Practices of the Python Pro by Dane Hillard"
              :width="720"
              :height="901"
            />
          </BaseLink>
        </div>

        <p>
          As you start your adventure in writing software, you'll often find yourself scrambling to
          a working solution. Learning syntax, data structures, and code style for a programming
          language serve as additional barriers along the way.
        </p>

        <p>
          As you gain experience, you might start to hear from others how certain practices make
          code easier to work with. Often, these practices are provided without justification, or in
          the worst cases without much explanation about how they even work. Without a solid handle
          on these concepts you'll face challenges scaling software to serve larger and larger
          projects.
        </p>

        <p>
          <em>Practices of the Python Pro</em> will teach you some of the key aspects of writing
          maintainable software. From separation of concerns to encapsulation to abstraction, the
          book contains small examples in Python that you can follow to level up your software
          development skills. Learn about the benefits of composition over inheritance, how to use
          inversion of control to achieve loose coupling, and how to create performance tests and
          functional tests. Full of concepts you can apply to most any language or framework,
          <em>Practices of the Python Pro</em> will have you writing more maintainable code with
          confidence faster than ever before.
        </p>

        <p>
          Whether you're just starting out in programming, using software to supplement your data
          science work, or applying code in novel ways to art or music,
          <em>Practices of the Python Pro</em> has something for you. Are you ready to get started?
          <BaseLink href="https://thepythonpro.com" :external="true">Buy the book</BaseLink> today!
        </p>
      </li>
    </ul>
  </main>
</template>

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
