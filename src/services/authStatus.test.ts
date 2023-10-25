import { authStatus } from './authStatus'

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
  beforeEach(() => {
    (fetch as jest.Mock).mockClear()
  })
  it('should return a session object logged in when user is logged in', async () => {
    const session = await authStatus()

    expect(session.isAuth).toBe(true)
    expect(session.userId).toBe(1)
  })
  it('should return a session object logged out when user is logged out', async () => {
    (globalThis.fetch as jest.Mock).mockImplementationOnce(async () => await Promise
      .resolve({
        ok: true,
        json: async () => await Promise.resolve({
          isAuth: false,
          userId: null
        })
      })
    )
    const session = await authStatus()

    expect(session.isAuth).toBe(false)
    expect(session.userId).toBe(null)
  })
  it('should throw an error when unsuccessful', async () => {
    (globalThis.fetch as jest.Mock).mockImplementationOnce(async () => await Promise
      .reject(new Error('error')))
    await expect(authStatus()).rejects.toThrow('error')
    expect(globalThis.fetch).toHaveBeenCalledTimes(1)
  })
})
