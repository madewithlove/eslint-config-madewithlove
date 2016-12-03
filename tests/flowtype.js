// @flow
import {Map} from 'immutable';

type FooType = {
    name: string,
    old: boolean,
};

export class Foobar {
    propTypes = {
        foo: Map,
    };

    constructor(foo: FooType) {
        this.foo = foo;
    }

    foo(foo: Object, bar): string {
        const baz = 'baz';

        return () => foo && bar && baz && 'bar';
    }

    bar() {
        return;
    }
}
