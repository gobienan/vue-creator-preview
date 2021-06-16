const devPresets = ['@vue/cli-plugin-babel/preset'];
const buildPresets = [
  [
    '@babel/preset-env',
    // Config for @babel/preset-env
    {
      // Example: Always transpile optional chaining/nullish coalescing
      // include: [
      //   /(optional-chaining|nullish-coalescing)/
      // ],
    },
  ],
];
module.exports = {
  presets: process.env.NODE_ENV === 'development' ? devPresets : buildPresets,
};
