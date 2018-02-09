// @flow
import { Map } from 'eslint';

type FooType = {
    name: string,
    old: boolean,
};

export class Foobar {
    propTypes = {
        foo: Map,
    };

    foo: FooType;

    constructor(foo: FooType) {
        this.foo = foo;
    }

    foo(foo: Object, bar: boolean) {
        if (foo.bar && bar) {
            return 'foo';
        }

        return 'bar';
    }

    bar() {}

    baz(): number {
        return 5;
    }
}
