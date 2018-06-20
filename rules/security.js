module.exports = {
    plugins: ['security'],
    extends: ['plugin:security/recommended'],
    rules: {
        'security/detect-object-injection': 0,
        'security/detect-non-literal-regexp': 0,
    },
};
