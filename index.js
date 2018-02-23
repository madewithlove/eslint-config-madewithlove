module.exports = {
    extends: [
        // Core
        'eslint:recommended',

        // Plugins
        'eslint-config-madewithlove/rules/a11y',
        'eslint-config-madewithlove/rules/filenames',
        'eslint-config-madewithlove/rules/import',
        'eslint-config-madewithlove/rules/promise',
        'eslint-config-madewithlove/rules/react',
        'eslint-config-madewithlove/rules/prettier',
        'eslint-config-madewithlove/rules/security',
    ],
    globals: {
        __DEVTOOLS__: true,
    },
};
