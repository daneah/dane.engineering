<template>
    <main>
        <h1>Thanks!</h1>
        <p>
            If your communication requires a response, you'll get one in a (hopefully) timely manner.
        </p>
    </main>
</template>

<script>
const PAGE_TITLE = 'Thanks!',
    PAGE_DESCRIPTION = 'High five. Dane likes hearing from you!'

export default {
  name: 'ContactSuccess',
  metaInfo: {
    title: PAGE_TITLE,
    meta: [
      {
        property: 'og:title',
        content: `${PAGE_TITLE} | Dane Hillard`,
        vmid: 'og:title'
      },
      {
        property: 'description',
        content: PAGE_DESCRIPTION,
        vmid: 'description'
      },
      {
        property: 'og:description',
        content: PAGE_DESCRIPTION,
        vmid: 'og:description'
      }
    ]
  }
}
</script>
