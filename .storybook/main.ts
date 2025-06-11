import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-onboarding",
    "@storybook/addon-docs",
    "@storybook/addon-styling-webpack",
    "@storybook/addon-a11y",
    "@storybook/addon-a11y"
  ],
  "docs": {
    "defaultName": 'Docs',
  },
  "framework": {
    "name": "@storybook/angular",
    "options": {}
  },
  "staticDirs": [
    '../src/assets',
  ],
};
export default config;
