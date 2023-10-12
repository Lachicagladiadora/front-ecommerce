import { APIURLs, errorWithStatus } from "./settings";

export async function logOut() {
    const response = await fetch(APIURLs.authLogoOut, {
        method: 'POST',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
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