module.exports = {
    parser: 'babel-eslint',
    plugins: ['babel'],
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    rules: {
        'babel/no-await-in-loop': 2,
        'babel/flow-object-type': 2,
        'arrow-body-style': [0, 'as-needed'],
        'arrow-spacing': 2,
        'babel/arrow-parens': [2, 'as-needed'],
        'babel/generator-star-spacing': 2,
        'babel/object-shorthand': 2,
        'constructor-super': 2,
        'no-class-assign': 2,
        'no-confusing-arrow': 2,
        'no-const-assign': 2,
        'no-dupe-class-members': 2,
        'no-duplicate-imports': 2,
        'no-new-symbol': 2,
        'no-restricted-imports': 2,
        'no-this-before-super': 2,
        'no-useless-computed-key': 2,
        'no-useless-constructor': 2,
        'no-useless-rename': 2,
        'no-var': 2,
        'prefer-arrow-callback': 2,
        'prefer-const': 2,
        'prefer-reflect': 2,
        'prefer-rest-params': 2,
        'prefer-spread': 2,
        'prefer-template': 2,
        'require-yield': 2,
        'rest-spread-spacing': 2,
        'sort-imports': 0,
        'template-curly-spacing': 2,
        'yield-star-spacing': 2,
    },
};
