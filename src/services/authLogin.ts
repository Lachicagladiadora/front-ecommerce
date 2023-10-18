import { APIURLs, errorWithStatus } from "./settings";
import { type Session } from './interfaceSession';


export async function logIn(email: string, password: string): Promise<Session> {
    const response = await fetch(APIURLs.authLogIn, {
        method: 'POST',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {

        const error = new Error(`Session error: ${response.status}`) as errorWithStatus;
        error.status = response.status;
        error.message = response.statusText;
        throw error;
    }
}