import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import cel from '../img/celulares.webp'


const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/products/${id}`)
      .then(response => {
        setProduct(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching product detail:', error);
      });
  }, [id]);

  if (!product) {
    return <div style={styles.loading}>Cargando...</div>;
  }

  return (
    <div style={styles.container}>
      <img src={cel} alt="celular" style={styles.cel} />
      <h2 style={styles.title}>{product.title}</h2>
      <p style={styles.id}>{product._id}</p>
      <p style={styles.description}>{product.description}</p>
      <p style={styles.info}>Precio: {product.price}</p>
      <p style={styles.info}>Marca: {product.brand}</p>
    </div>
  );
};

export default ProductDetail;

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    color: '#333',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  loading: {
    textAlign: 'center',
    fontSize: '24px',
    marginTop: '50px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#222',
  },
  id: {
    fontSize: '16px',
    marginBottom: '10px',
    color: '#666',
  },
  description: {
    fontSize: '16px',
    marginBottom: '20px',
    color: '#444',
  },
  info: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#333',
  },
  cel: {
    width: '500px',
  }
};