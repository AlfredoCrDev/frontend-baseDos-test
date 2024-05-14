import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './app.css'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
import AddProduct from './components/AddProduct'
import DeleteProduct from './components/DeleteProduct'

function App() {

  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/' element={<ProductList/>} />
          <Route path="/products/:id" element={<ProductDetail/>} />
          <Route path="/add-product" element={<AddProduct/>} />
          <Route path="/delete-product" element={<DeleteProduct/>} />
          <Route path="*" element={<p>404</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
