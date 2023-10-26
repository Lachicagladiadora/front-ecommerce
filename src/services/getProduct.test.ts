import { getProduct } from './getProduct'
import { type Product } from './interfaceProduct'

jest.mock('./settings')

const product: Product = {
  id: 123,
  title: 'test',
  price: '30',
  description: 'test',
  category: 'electronics',
  image: 'image.jpg',
  stock: 5
}
globalThis.fetch = jest.fn(async () =>
  await Promise.resolve({
    ok: true,
    json: async () => await Promise.resolve(product)
  })
) as jest.Mock

describe('getProduct()', () => {
  it('should return a product object when successful', async () => {
    const product: Product = await getProduct(123)
    expect(product).toEqual(product)
  })
  it('should throw an error when unsuccessful from fetch', async () => {
    (globalThis.fetch as jest.Mock).mockImplementationOnce(async () => await Promise
      .reject(new Error('error')))
    await expect(getProduct(123)).rejects.toThrow('error')
  })
})
