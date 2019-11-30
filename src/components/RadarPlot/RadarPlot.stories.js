import Vue from 'vue'
import { withKnobs, object, number } from '@storybook/addon-knobs'

import RadarPlot from './RadarPlot'

export default {
  title: 'Components|RadarPlot',
  decorators: [withKnobs],
}

export const basic = () => ({
  components: { RadarPlot },
  props: {
    levels: {
      default: number('Levels', 5),
    },
    characteristics: {
      default: object('Characteristics', [
        { name: 'Flying', score: 1 },
        { name: 'Cooking', score: 3 },
        { name: 'Running', score: 0.5 },
        { name: 'Reading', score: 3 },
        { name: 'Swimming', score: 4.5 }
      ]),
    },
  },
  template: '<RadarPlot :levels="levels" :characteristics="characteristics" />',
})
