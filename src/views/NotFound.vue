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

export default {
  name: 'NotFound',
  components: {
    BaseHeading,
    BaseParagraph,
    BaseLink
  },
  metaInfo: {
    title: 'Page Not Found'
  }
}
</script>
