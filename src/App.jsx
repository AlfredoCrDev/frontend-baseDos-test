import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './app.css'
import ProductList from './components/ProductList'

function App() {

  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/' element={<ProductList/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
