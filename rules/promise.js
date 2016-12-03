module.exports = {
    plugins: ['promise'],
    rules: {
        'promise/always-return': 2,
        'promise/avoid-new': 2,
        'promise/catch-or-return': 2,
        'promise/no-callback-in-promise': 2,
        'promise/no-native': 2,
        'promise/no-nesting': 2,
        'promise/no-promise-in-callback': 2,
        'promise/no-return-wrap': 2,
        'promise/param-names': 2,
        'promise/prefer-await-to-callbacks': 2,
        'promise/prefer-await-to-then': 2,
    },
};
