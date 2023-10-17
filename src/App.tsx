import './App.css'
import { Link, Routes, Route, Outlet, useParams } from 'react-router-dom'
import { Home } from './pages'

export const App = (): JSX.Element => {
  const Product = (): JSX.Element => {
    const { productId } = useParams()
    return <h1>product {productId} detail</h1>
  }
  const Cart = (): JSX.Element => {
    return <h1>cart list</h1>
  }
  const WishList = (): JSX.Element => {
    return <h1>wish list</h1>
  }
  const Search = (): JSX.Element => { return <h1>search</h1> }
  const LogIn = (): JSX.Element => { return <h1>Log In </h1> }
  const Categories = (): JSX.Element => {
    return (
      <div>
        <h1>Categories</h1>
    <ul>
            <li><Link to='/categories/mens-clothing'>Mens Clothing</Link></li>
            <li><Link to='/categories/womens-clothing'>Womens Clothing</Link></li>
            <li><Link to='/categories/electronics'>Electronics</Link></li>
            <li><Link to='/categories/jewerly'>Jewerly</Link></li>
          </ul>
      </div>
    )
  }
  const MensClothing = (): JSX.Element => {
    return <h1>MensClothing</h1>
  }
  const WomensClothing = (): JSX.Element => {
    return <h1>WomensClothing</h1>
  }
  const Electronics = (): JSX.Element => {
    return <h1>Electronics</h1>
  }
  const Jewerly = (): JSX.Element => {
    return <h1>Jewerly</h1>
  }
  const Error = (): JSX.Element => { return <h1>Error</h1> }

  return (
    <div>
      <header>
        <h1><Link to='/'>Shopland</Link></h1>
        <nav>
          <ul>
            <li><Link to='/search'>Search</Link></li>
            <li><Link to='/cartList'>Cart</Link></li>
            <li><Link to='/auth/log-in'>Log in</Link></li>
          </ul>
        </nav>
      </header>
      <Outlet/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products/:productId' element={<Product />}/>
        <Route path='/cartList/:cartListId' element={<Cart/>}/>
        <Route path='/wishList/:wishListId' element={<WishList/>}/>
        <Route path='/search' element={<Search />}/>
        <Route path='/cartList' element={<Cart />}/>
        <Route path='/auth/log-in' element={<LogIn />}/>
        <Route path='/categories' element={<Categories/>}>
          <Route path='/categories/mens-clothing' element={<MensClothing/>}/>
          <Route path='/categories/womens-clothing' element={<WomensClothing/>}/>
          <Route path='/categories/electronics' element={<Electronics/>}/>
          <Route path='/categories/jewerly' element={<Jewerly/>}/>
        </Route>
        <Route path='/wish-list' element={<WishList/>}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </div>
  )
}
