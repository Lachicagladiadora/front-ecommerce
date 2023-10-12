import { APIURLs, errorWithStatus } from "./settings";

export async function login(username: string, password: string) {
    const response = await fetch(APIURLs.authLogIn, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
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