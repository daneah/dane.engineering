module.exports = {
  presets: [
    '@storybook/addon-docs/preset',
  ],
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
  ],
  stories: [
    '../src/components/**/*.stories.@(js|mdx)',
  ],
};
