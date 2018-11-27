<template>
    <main>
        <BaseHeading>Page Not Found</BaseHeading>

        <BaseParagraph>
            It looks like the page you're looking for doesn't exist.
            Try going
            <router-link
                tag="span"
                :to="{ name: 'home' }"
            >
                <BaseLink
                    href="/"
                    :external="false"
                >home</BaseLink>
            </router-link>
            and starting over.
        </BaseParagraph>
    </main>
</template>

<script>
import BaseHeading from '@/components/BaseHeading'
import BaseParagraph from '@/components/BaseParagraph'
import BaseLink from '@/components/BaseLink'

const PAGE_TITLE = 'Page Not Found',
    PAGE_DESCRIPTION = 'This page does not exist'

export default {
  name: 'NotFound',
  components: {
    BaseHeading,
    BaseParagraph,
    BaseLink
  },
  metaInfo: {
    title: 'Page Not Found',
    meta: [
      {
        name: 'description',
        content: PAGE_DESCRIPTION,
        vmid: 'description'
      },
      {
        property: 'og:description',
        content: PAGE_DESCRIPTION,
        vmid: 'og:description'
      },
      {
        property: 'og:title',
        content: `${PAGE_TITLE} | Dane Hillard`,
        vmid: 'og:title'
      },
      {
        property: 'og:url',
        content: window.location.href,
        vmid: 'og:url'
      }
    ]
  }
}
</script>
