import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import cel from '../img/celulares.webp';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/products/?page=${currentPage}`);
      setProducts(response.data.docs);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div style={styles.container}>
      <h2>Lista de Productos</h2>
      <div style={styles.cardContainer}>
        {products.map(product => (
          <div key={product._id} style={styles.card}>
            <img src={cel} alt="celular" style={styles.cel} />
            <Link to={`/products/${product._id}`}>
              <h3>{product.title}</h3>
            </Link>
            <p>SKU: {product._id}</p>
            <p>Precio: $ {(product.price).toLocaleString()}</p>
            <p>Marca: {product.brand}</p>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
      />
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange, onPrevPage, onNextPage }) => {
  return (
    <div style={styles.pagination}>
      <button onClick={onPrevPage} disabled={currentPage === 1}>
        Anterior
      </button>
      <div>Página {currentPage} de {totalPages}</div>
      <button onClick={onNextPage} disabled={currentPage === totalPages}>
        Siguiente
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1.2rem',
    margin: '1.2rem',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    justifyContent: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1.2rem',
    margin: '1.2rem',
    alignItems: 'flex-end',
    backgroundColor: '#DEDEDE',
    borderRadius: '16px',
  },
  cel: {
    width: '250px',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1rem',
  },
};

export default ProductList;
