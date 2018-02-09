module.exports = {
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                tabWidth: 4,
                singleQuote: true,
                trailingComma: 'all',
            },
        ],
    },
};
