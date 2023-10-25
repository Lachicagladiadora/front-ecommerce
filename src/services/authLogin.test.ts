import { logIn } from './authLogin'
jest.mock('./settings')

globalThis.fetch = jest.fn(async () =>
  await Promise.resolve({
    ok: true,
    json: async () => await Promise.resolve({
      isAuth: true,
      userId: 1
    })
  })
) as jest.Mock

describe('logIn()', () => {
  it('should return a session object when successful', async () => {
    const session = await logIn('test@example.com', 'password')

    expect(session.isAuth).toBe(true)
    expect(session.userId).toBe(1)
  })
  it.only('should throw an error when unsuccessful', async () => {
    (globalThis.fetch as jest.Mock).mockImplementationOnce(async () => await Promise
      .reject(new Error('error')))
    // or
    /*  (fetch as jest.Mock).mockImplementationOnce(async () => await Promise
      .reject(new Error('error'))) */
    await expect(logIn('test@example.com', 'password')).rejects.toThrow('error')
    expect(globalThis.fetch).toHaveBeenCalledTimes(1)
    // or
    // expect(fetch).toHaveBeenCalledTimes(1)
  })
})
