const baseApiURL = import.meta.env.VITE_API_URL;

export const APIURLs = {

    // User
    createUser: `${baseApiURL}/users`,

    // Edit cartList
    getCartList: (cartListId: string) => `${baseApiURL}/cartList/${cartListId}`,
    // add and remove
    addToCartList: (cartListId: string) => `${baseApiURL}/cartList/${cartListId}/add`,
    removeFromCartList: (cartListId: string) => `${baseApiURL}/cartList/${cartListId}/remove`,

    // Product
    getProduct: (productId: string) => `${baseApiURL}/products/${productId}`,

    // Product list
    getProducts: `${baseApiURL}/products`,

    // Auth
    authLogIn: `${baseApiURL}/auth/login`,
    authLogoOut: `${baseApiURL}/auth/logout`,
    authStatus: `${baseApiURL}/auth/status`,

    // Wish list
    getWishList: (wishListId: string) => `${baseApiURL}/wishList/${wishListId}`,
    // add and remove
    addToWishList: ( wishListId: string) => `${baseApiURL}/wishList/${wishListId}/add`,
    removeFromWishList: ( wishListId: string) => `${baseApiURL}/wishList/${wishListId}/remove`,

    // Categories
    // men's clothing
    getMensClothing: `${baseApiURL}/categories/mens-clothing`,
    // women's clothing
    getWomensClothing: `${baseApiURL}/categories/womens-clothing`,
    // electronics
    getElectronics: `${baseApiURL}/categories/electronics`,
    // jewelry
    getJewelry: `${baseApiURL}/categories/jewelery`,

}

export interface errorWithStatus extends Error {
  status?: number;
}
