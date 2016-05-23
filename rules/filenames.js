module.exports = {
    plugins: ['filenames'],
    rules: {
        'filenames/match-regex': [2, '^[A-Za-z]+$'],
        'filenames/match-exported': 2,
        'filenames/no-index': 0,
    },
};
