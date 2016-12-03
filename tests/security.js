const name = 'foo';
const bar = require(`${name}`);

const foo = {
    bar: () => 'baz',
};

foo[bar]();
