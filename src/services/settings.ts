const baseApiURL = import.meta.env.VITE_API_URL

export const APIURLs = {

  // User
  createUser: `${baseApiURL}/users`,

  // Edit cartList
  getCartList: (cartListId: number) => `${baseApiURL}/cartList/${cartListId}`,
  // add and remove
  addToCartList: (cartListId: number) => `${baseApiURL}/cartList/${cartListId}/add`,
  removeFromCartList: (cartListId: number) => `${baseApiURL}/cartList/${cartListId}/remove`,

  // Product
  getProduct: (productId: number) => `${baseApiURL}/products/${productId}`,

  // Product list
  getProducts: `${baseApiURL}/products`,

  // Auth
  authLogIn: `${baseApiURL}/auth/login`,
  authLogoOut: `${baseApiURL}/auth/logout`,
  authStatus: `${baseApiURL}/auth/status`,

  // Wish list
  getWishList: (wishListId: number) => `${baseApiURL}/wishList/${wishListId}`,
  // add and remove
  addToWishList: (wishListId: number) => `${baseApiURL}/wishList/${wishListId}/add`,
  removeFromWishList: (wishListId: number) => `${baseApiURL}/wishList/${wishListId}/remove`,

  // Categories
  // men's clothing
  getMensClothing: `${baseApiURL}/categories/mens-clothing`,
  // women's clothing
  getWomensClothing: `${baseApiURL}/categories/womens-clothing`,
  // electronics
  getElectronics: `${baseApiURL}/categories/electronics`,
  // jewelry
  getJewelry: `${baseApiURL}/categories/jewelery`

}

export interface errorWithStatus extends Error {
  status?: number
}
