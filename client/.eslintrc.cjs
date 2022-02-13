module.exports= {
  env:{
    browser:true,
    es6:true,
    node:true,
  },
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prop-types":"off",
    "react/react-in-jsx-scope":"off",
  },
  "extends": ['airbnb'],
};