const baseApiURL = import.meta.env.VITE_API_URL;

export const APIURLs = {

    // User
    createUser: `${baseApiURL}/users`,

    // Edit cartList
    getCartList: (cartListId: string) => `${baseApiURL}/cartList/${cartListId}`,
    // add and remove
    editCartList: ({ cartListId, productId }: {cartListId: string, productId: string}) => `${baseApiURL}/cartList/${cartListId}/${productId}`,

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
    editWishList: ({ wishListId, productId }: {wishListId: string, productId: string}) => `${baseApiURL}/wishList/${wishListId}/${productId}`,

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
