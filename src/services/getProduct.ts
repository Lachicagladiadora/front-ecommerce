import { APIURLs, type errorWithStatus } from './settings'

export async function getProduct <Product> (_id: number): Promise<Product | Error> {
  const response = await fetch(APIURLs.getProduct, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  if (response.ok) {
    const data = await response.json()
    return data
  } else {
    const error = new Error(`Product error: ${response.status}`) as errorWithStatus
    error.status = response.status
    error.message = response.statusText
    throw error
  }
}
