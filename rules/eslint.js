module.exports = {
    parser: 'babel-eslint',
    extends: ['eslint:recommended'],
    rules: {
        'no-case-declarations': 0,
        'no-console': [1, { allow: ['info', 'warn', 'error'] }],
        'no-constant-condition': 0,
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
