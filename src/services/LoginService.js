export class LoginService {
    HOST =  'http://localhost:8080';

    async login(email, password) {
        const b64 = btoa(`${email}:${password}`);
        return fetch(`${this.HOST}/api/login`, {
            method: 'POST',
            headers: { 'Authorization': `Basic ${b64}` }
        })
        .then(resp => {
            return {
                status: resp.status,
                ...resp.json(),
            }
        })
       
    }

}