module.exports = {
    "extends": [
        "eslint:recommended",
        require.resolve("./rules/a11y"),
        require.resolve("./rules/best-practices"),
        require.resolve("./rules/errors"),
        require.resolve("./rules/es6"),
        require.resolve("./rules/filenames"),
        require.resolve("./rules/flowtype"),
        require.resolve("./rules/import"),
        require.resolve("./rules/node"),
        require.resolve("./rules/promise"),
        require.resolve("./rules/react"),
        require.resolve("./rules/security"),
        require.resolve("./rules/style"),
        require.resolve("./rules/variables"),
        require.resolve("./rules/webpack"),
    ],
    "rules": {
        "import/no-unresolved": 0,
        "import/no-extraneous-dependencies": 0
    },
};

