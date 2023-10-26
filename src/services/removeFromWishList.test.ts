import { type WishList } from './interfaceWishList'
import { removeFromWishList } from './removeFromWishList'

jest.mock('./settings')

const wishList: WishList = {
  id: 123,
  products: [
    {
      id: 55,
      title: 'test',
      price: '30',
      description: 'test',
      category: 'electronics',
      image: 'image.jpg',
      stock: 5
    }
  ],
  userId: 12345
}
globalThis.fetch = jest.fn(async () =>
  await Promise.resolve({
    ok: true,
    json: async () => await Promise.resolve(wishList)
  })
) as jest.Mock

describe('removeFromWishList()', () => {
  it('should return a wishList object on success', async () => {
    const wishListReceived = await removeFromWishList(123, 123)
    expect(wishListReceived).toEqual(wishList)
  })
  it('should throw an error when unsuccessful from fetch', async () => {
    (globalThis.fetch as jest.Mock).mockImplementationOnce(async () => await Promise
      .reject(new Error('error')))
    await expect(removeFromWishList(123, 123)).rejects.toThrow('error')
  })
})
