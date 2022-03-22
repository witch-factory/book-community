module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'linebreak-style': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'object-curly-newline': 'off',
    "import/prefer-default-export":"off",
  },
  extends: ['airbnb'],
};
