export const AUTHORIZE = 'auth/AUTHORIZE';

export function authorize(token, expiresIn) {
    return {type: AUTHORIZE, token, expiresIn};
}
