const { prettier } = require('../package');

module.exports = {
    plugins: ['prettier'],
    extends: ['plugin:prettier/recommended'],
    rules: {
        'prettier/prettier': [1, prettier],
    },
};
