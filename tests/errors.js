/**
 * I like things
 */
const errors = function aaa(foo, bar) {
    return foo + bar;
};

function *onFoobar() {
    while (true) {
        yield 'foo';
    }
}

export default onFoobar(errors);
