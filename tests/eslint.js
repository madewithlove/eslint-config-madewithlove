// no-case-declarations
function reducer(state, action) {
    switch (action.type) {
        case 'FOOBAR':
            const foo = { ...action, bar: 'baz' };

            return { ...state, foo };
    }
}

// no-console
console.warn(reducer({}, { type: 'FOOBAR' }));

// no-constant-condition
while (true) {
    console.warn('true');
}
