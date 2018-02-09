const configuration = require('./index');

module.exports = Object.assign(configuration, {
    extends: configuration.extends.map(extended => {
        return extended.includes('madewithlove')
            ? require.resolve(
                  extended.replace('eslint-config-madewithlove', '.'),
              )
            : extended;
    }),
    rules: {
        'import/no-unresolved': 0,
        'import/no-extraneous-dependencies': 0,
    },
});
