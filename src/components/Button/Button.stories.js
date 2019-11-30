import Vue from 'vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'

export default {
  title: 'Components|Button',
  decorators: [withKnobs],
}

export const primary = () => ({
  components: { PrimaryButton },
  props: {
    text: {
      default: text('Text', 'Hello'),
    },
  },
  template: '<PrimaryButton @click="click">{{ text }}</PrimaryButton>',
  methods: {
    click: action('Clicked')
  },
})

export const secondary = () => ({
  components: { SecondaryButton },
  props: {
    text: {
      default: text('Text', 'Hello'),
    },
  },
  template: '<SecondaryButton @click="click">{{ text }}</SecondaryButton>',
  methods: {
    click: action('Clicked')
  },
})

export const asSubmitButton = () => ({
  components: { PrimaryButton },
  template: '<PrimaryButton type="submit" @click="click">Submit</PrimaryButton>',
  methods: {
    click: action('Submitted')
  },
})
