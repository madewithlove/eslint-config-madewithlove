// detect-object-injection
const foo = 'bar';
const bar = {};

bar[foo] = 'baz';
