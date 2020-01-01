import { addParameters } from '@storybook/vue';

import '@/main.scss'

addParameters({
  docs: {
    iframeHeight: '200px',
    inlineStories: false,
  },
});
