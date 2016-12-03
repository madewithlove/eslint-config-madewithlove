import fs from 'fs';

const name = 'foo';
const bar = require(`${name}`);
const baz = fs.readFileSync(name);

const foo = {
    bar: () => baz,
};

foo[bar]();
