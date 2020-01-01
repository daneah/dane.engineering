module.exports = {
  presets: ['@storybook/addon-docs/preset'],
  addons: ['@storybook/addon-a11y/register'],
  stories: ['../src/components/**/*.stories.(js|mdx)'],
};
