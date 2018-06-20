module.exports = {
    plugins: ['filenames'],
    rules: {
        'filenames/match-exported': 2,
        'filenames/match-regex': [2, '^[A-Za-z0-9-]+(.test)?$'],
        'filenames/no-index': 0,
    },
};
