import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import cel from '../img/celulares.webp'

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/products/')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

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
    borderRadius: '16px'
  },
  cel: {
    width: '250px'
  }
}

export default ProductList;
