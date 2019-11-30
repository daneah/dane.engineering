import { addDecorator, configure } from '@storybook/vue'
import { withA11y } from '@storybook/addon-a11y'

import '@/main.scss'

configure(require.context('../src', true, /\.stories\.js$/), module)
addDecorator(withA11y)
