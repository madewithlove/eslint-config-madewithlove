module.exports = {
    plugins: ['flowtype'],
    rules: {
        'flowtype/boolean-style': 2,
        'flowtype/define-flow-type': 2,
        'flowtype/delimiter-dangle': [2, 'always-multiline'],
        'flowtype/generic-spacing': 2,
        'flowtype/no-dupe-keys': 2,
        'flowtype/no-primitive-constructor-types': 2,
        'flowtype/no-weak-types': 0,
        'flowtype/object-type-delimiter': 2,
        'flowtype/require-parameter-type': 0,
        'flowtype/require-return-type': [2, 'always', {
            excludeArrowFunctions: true,
        }],
        'flowtype/require-valid-file-annotation': 2,
        'flowtype/require-variable-type': 0,
        'flowtype/semi': 2,
        'flowtype/sort-keys': 2,
        'flowtype/space-after-type-colon': 2,
        'flowtype/space-before-generic-bracket': 2,
        'flowtype/space-before-type-colon': 2,
        'flowtype/type-id-match': 2,
        'flowtype/union-intersection-spacing': 2,
        'flowtype/use-flow-type': 2,
        'flowtype/valid-syntax': 2,
    },
    "settings": {
        "flowtype": {
            "onlyFilesWithFlowAnnotation": true
        }
    }
};
