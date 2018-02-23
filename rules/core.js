module.exports = {
    parser: 'babel-eslint',
    extends: ['eslint:recommended'],
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    globals: {
        __DEVTOOLS__: true,
    },
};
