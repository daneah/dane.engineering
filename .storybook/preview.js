import { addParameters, addDecorator } from '@storybook/vue';
import { withA11y } from '@storybook/addon-a11y';

import '@/main.scss'

addDecorator(withA11y);
addParameters({
  docs: {
    iframeHeight: '200px',
    inlineStories: false,
  },
});
