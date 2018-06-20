module.exports = {
    plugins: ['jsx-a11y'],
    extends: ['plugin:jsx-a11y/recommended'],
    rules: {
        'jsx-a11y/onclick-has-role': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
    },
};
