module.exports = {
  presets: [
    '@storybook/addon-docs/preset',
  ],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-viewport/register',
  ],
  stories: [
    '../src/components/**/*.stories.(js|mdx)',
  ],
};
