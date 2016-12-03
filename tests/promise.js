import foo, {callback} from 'foo';

const promise = new Promise(resolve => {
    resolve(foo.then(response => {
        return response.then(baz => {
            callback();

            return response.send(baz);
        });
    }));
});

export default promise;
