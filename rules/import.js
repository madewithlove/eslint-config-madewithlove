module.exports = {
    plugins: ['import'],
    extends: ['plugin:import/recommended'],
    rules: {
        'import/unambiguous': 0,
        'import/namespace': [2, { allowComputed: true }],
    },
    settings: {
        'import/ignore': ['node_modules', '.(jpe?g|gif|json|scss|png|svg)'],
        'import/resolver': 'webpack',
    },
};
