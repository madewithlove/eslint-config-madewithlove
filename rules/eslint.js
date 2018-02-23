module.exports = {
    parser: 'babel-eslint',
    extends: ['eslint:recommended'],
    rules: {
        'no-case-declarations': 'off',
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    globals: {
        __DEVTOOLS__: true,
    },
};
