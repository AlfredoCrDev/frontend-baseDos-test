import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './app.css'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'

function App() {

  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/' element={<ProductList/>} />
          <Route path="/products/:id" element={<ProductDetail/>} />
          <Route path="*" element={<p>404</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
