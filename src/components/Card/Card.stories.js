import Vue from 'vue'
import { withKnobs, text } from '@storybook/addon-knobs'

import Card from './Card'

export default {
  title: 'Components|Card',
  decorators: [withKnobs],
}

export const textOnly = () => ({
  components: { Card },
  props: {
    title: {
      default: text('Title', 'Card title'),
    },
    description: {
      default: text('Description', 'This is the card description.'),
    },
  },
  template: `
  <Card>
      <template #title>{{ title }}</template>
      <template #description>{{ description }}</template>
  </Card>
  `,
})

export const withImage = () => ({
  components: { Card },
  props: {
    title: {
      default: text('Title', 'Kittens'),
    },
    description: {
      default: text('Description', 'They are adorable.'),
    },
  },
  template: `
  <Card>
      <template #image>
        <img src="https://placekitten.com/1500/350" alt="kitty">
      </template>
      <template #title>{{ title }}</template>
      <template #description>{{ description }}</template>
  </Card>
  `,
})
