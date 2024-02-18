// .storybook/main.js

const path = require('path');

module.exports = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions'
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {
            builder: {
                useSWC: true
            }
        }
    },
    docs: {
        autodocs: 'tag'
    },
    webpackFinal: async (config, { configType }) => {
        // Add Babel presets
        config.module.rules.push({
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                useBuiltIns: 'usage',
                                corejs: 3,
                                targets: '> 0.25%, not dead'
                            }
                        ],
                        '@babel/preset-typescript',
                        '@babel/preset-react'
                    ],
                    plugins: [
                        [
                            '@stylexjs/babel-plugin',
                            {
                                dev: true,
                                test: false,
                                unstable_moduleResolution: {
                                    type: 'commonJS',
                                    rootDir: path.resolve(
                                        __dirname,
                                        '__dirname'
                                    )
                                }
                            }
                        ]
                    ]
                }
            }
        });

        return config;
    }
};
