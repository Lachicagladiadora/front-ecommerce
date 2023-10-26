import { getWishList } from './getWishList'
import { type WishList } from './interfaceWishList'

jest.mock('./settings')

const wishList: WishList = {
  id: 123,
  products: [],
  userId: 12345
}
globalThis.fetch = jest.fn(async () =>
  await Promise.resolve({
    ok: true,
    json: async () => await Promise.resolve(wishList)
  })
) as jest.Mock

describe('getWishList()', () => {
  it('should return a wishList object on success', async () => {
    const wishListReceived = await getWishList(123)
    expect(wishListReceived).toEqual(wishList)
  })
  it('should throw an error when unsuccessful from fetch', async () => {
    (globalThis.fetch as jest.Mock).mockImplementationOnce(async () => await Promise
      .reject(new Error('error')))
    await expect(getWishList(123)).rejects.toThrow('error')
  })
})
