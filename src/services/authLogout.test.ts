import { logOut } from './authLogout'

jest.mock('./settings')

globalThis.fetch = jest.fn(async () =>
  await Promise.resolve({
    ok: true,
    json: async () => await Promise.resolve({
      isAuth: null,
      userId: false
    })
  })
) as jest.Mock

describe('logIn()', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear()
  })
  it('should return a session logged out on success', async () => {
    const session = await logOut()

    expect(session.isAuth).toBe(null)
    expect(session.userId).toBe(false)
  })

  it('should throw an error when unsuccessful', async () => {
    (globalThis.fetch as jest.Mock).mockImplementationOnce(async () => await Promise
      .reject(new Error('fetch error')))
    await expect(logOut()).rejects.toThrow('fetch error')
    expect(globalThis.fetch).toHaveBeenCalledTimes(1)
  })
})
