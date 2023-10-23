import { APIURLs, type errorWithStatus } from "./settings";
import { type WishList } from "./interfaceWishList";

export async function addToWishList(wishListId: number, productId: number): Promise<WishList> {
    const response = await fetch(APIURLs.addToWishList(wishListId), {
        method: 'POST',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            productId
        })
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