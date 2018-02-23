module.exports = {
    plugins: ['import'],
    extends: ['plugin:import/recommended'],
    rules: {
        'import/unambiguous': 'off',
    },
    settings: {
        'import/ignore': ['node_modules', '.(jpe?g|gif|json|scss|png|svg)'],
        'import/resolver': 'webpack',
    },
};
