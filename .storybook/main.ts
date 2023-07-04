import path from 'path'

import type { StorybookConfig } from '@storybook/vue3-vite'
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    path.dirname(require.resolve(path.join('@storybook/addon-links', 'package.json'))),
    path.dirname(require.resolve(path.join('@storybook/addon-essentials', 'package.json'))),
    path.dirname(require.resolve(path.join('@storybook/addon-interactions', 'package.json'))),
  ],
  framework: {
    name: path.dirname(require.resolve(path.join('@storybook/vue3-vite', 'package.json'))),
    options: {},
  },
  docs: {
    autodocs: true,
  }
}
export default config
