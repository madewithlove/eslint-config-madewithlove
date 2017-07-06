module.exports = {
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': [
            'error', {
                printWidth: 120,
                tabWidth: 4,
                singleQuote: true,
                trailingComma: 'all',
                bracketSpacing: false,
            },
        ],
    },
};
