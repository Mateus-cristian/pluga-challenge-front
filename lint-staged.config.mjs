// lint-staged.config.mjs
const config = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'prettier --write',
  ],
  '*.{css,scss}': ['prettier --write --ignore-unknown'],
  '*.{json,md}': ['prettier --write'],
};

export default config;