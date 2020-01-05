import { addParameters, addDecorator } from '@storybook/vue';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import '@/main.scss'

addDecorator(withA11y);
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  docs: {
    iframeHeight: '200px',
    inlineStories: false,
  },
});
