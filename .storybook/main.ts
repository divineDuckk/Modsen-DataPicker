import path from 'path';

import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    'storybook-css-modules',
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),

  webpackFinal: async config => {
    const { resolve = {}, module = { rules: [] } } = config;

    if (!resolve.extensions) {
      resolve.extensions = [];
    }
    if (!module.rules) {
      module.rules = [];
    }

    if (!resolve.alias) {
      resolve.alias = {};
    }

    const fileLoaderRule = (module.rules as any[]).find((rule: any) =>
      rule.test instanceof RegExp ? rule.test.test('.svg') : false,
    );

    if (fileLoaderRule && typeof fileLoaderRule.exclude === 'undefined') {
      fileLoaderRule.exclude = /\.svg$/;
    }
    module.rules.push({
      test: /\.svg$/,
      loader: 'svg-react-loader',
    });

    resolve.alias = {
      ...resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    };

    resolve.extensions.push('.ts', '.tsx', '.scss', '.css');

    return {
      ...config,
      resolve,
      module,
    };
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

export default config;
