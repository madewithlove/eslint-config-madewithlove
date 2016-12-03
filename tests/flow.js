// @flow
import {Map} from 'immutable';

type FooType = {
    name: string,
};

export class Foobar {
    propTypes = {
        foo: Map,
    };

    constructor(foo: FooType) {
        this.foo = foo;
    }
}
