module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      files: ['*.test.js'],
      rules: {
        'no-undef': ['off'],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
  },
};
