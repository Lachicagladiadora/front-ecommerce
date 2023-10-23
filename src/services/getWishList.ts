import { APIURLs, errorWithStatus } from "./settings";
import { type WishList } from "./interfaceWishList";

export async function getWishList(wishListId: number): Promise<WishList> {
    const response = await fetch(APIURLs.getWishList(wishListId), {
        method: 'GET',
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
        const error = new Error() as errorWithStatus;
        error.status = response.status;
        error.message = response.statusText;
        throw error;
    }
}