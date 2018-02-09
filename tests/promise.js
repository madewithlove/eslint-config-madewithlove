import foo, { callback } from 'foo';

const promise = new Promise(resolve => {
    resolve(
        foo.then(response =>
            response.then(baz => {
                callback();

                return response.send(baz);
            }),
        ),
    );
});

export default promise;
