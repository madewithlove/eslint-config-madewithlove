// detect-object-injection
const foo = 'bar';
const bar = {};
bar[foo] = 'baz';

// detect-non-literal-regexp
console.warn(matcher => window.location.pathname.match(new RegExp(matcher)));
