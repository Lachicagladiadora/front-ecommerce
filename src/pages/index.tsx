import { Link, Routes, Route, useParams } from 'react-router-dom'

export const Home = (): JSX.Element => {
  const PRODUCTS = [
    {
      id: 1,
      imageUrl: 'https://example.com/product1.jpg',
      name: 'keyboard',
      description: 'This is the first product description.',
      price: 29.99,
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      category: 'Electronics'
    },
    {
      id: 2,
      imageUrl: 'https://example.com/product2.jpg',
      name: 'dress',
      description: 'This is the second product description.',
      price: 49.99,
      details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category: 'Clothing',
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 3,
      imageUrl: 'https://example.com/product3.jpg',
      name: 'earth',
      description: 'This is the third product description.',
      price: 14.99,
      details: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      category: 'Home and Garden'
    },
    {
      id: 4,
      imageUrl: 'https://example.com/product4.jpg',
      name: 'jacket',
      description: 'This is the fourth product description.',
      price: 199.99,
      details: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
      category: 'Sports and Outdoors',
      sizes: ['M', 'L', 'XL']
    },
    {
      id: 5,
      imageUrl: 'https://example.com/product5.jpg',
      name: 'rice',
      description: 'This is the fifth product description.',
      price: 9.99,
      details: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      category: 'Food'
    }
  ]

  const Product = (): JSX.Element => {
    const { productId } = useParams()
    return <h1>product {productId} detail</h1>
  }

  return (
    <main>
      <p>hello world!</p>
      <div>
        {PRODUCTS.map((product) => (
          <div key={product.id}>
            <Link to={`/products/${product.name}`}>{product.name}</Link>
            <Link to={'/cartList/:cartListId/add'}> add to cart </Link>
            <Link to={'/wishList/:wishListId/add'}> add to wish list </Link>
          </div>
        ))}
      </div>
        <Link to={'/categories'}>Categories</Link>
      <Routes>
        <Route path='/products/:productName' element={<Product />}/>
        <Route path='/cartList/:cartListId/add' element={<Cart />}/>
      </Routes>
    </main>
  )
}
