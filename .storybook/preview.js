import { addParameters, addDecorator } from '@storybook/vue';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import '@/main.scss'

addParameters({
  a11y: {},
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  docs: {
    iframeHeight: '200px',
    inlineStories: false,
  },
});
