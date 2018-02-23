module.exports = {
    plugins: ['filenames'],
    rules: {
        'filenames/match-exported': 'error',
        'filenames/match-regex': ['error', '^[A-Za-z0-9-]+(\.test)?$'],
        'filenames/no-index': 'off',
    },
};
