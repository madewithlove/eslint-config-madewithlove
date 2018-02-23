const reducer = (state, action) => {
    switch (action.type) {
        case 'FOOBAR':
            const foo = { ...action, bar: 'baz' };

            return { ...state, foo };
    }
};

reducer({}, { type: 'FOOBAR' });
