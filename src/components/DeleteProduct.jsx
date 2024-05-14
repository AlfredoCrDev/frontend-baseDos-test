import React, { useState } from 'react';
import axios from 'axios';

const DeleteProduct = () => {
  const [productId, setProductId] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setProductId(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.delete(`http://localhost:8080/products/${productId}`)
      .then(() => {
        console.log('Product deleted');
        setMessage('¡Producto eliminado exitosamente!');
        setProductId('');
        setTimeout(() => setMessage(''), 3000);
      })
      .catch(error => {
        console.error('Error deleting product:', error);
        setMessage('Hubo un error al eliminar el producto. Por favor, inténtalo de nuevo.');
      });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Eliminar Producto</h2>
      {message && <p style={styles.message}>{message}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="text" placeholder="ID del Producto" value={productId} onChange={handleChange} style={styles.input} required />
        <button type="submit" style={styles.button}>Eliminar Producto</button>
      </form>
    </div>
  );
};

export default DeleteProduct;

const styles = {
  container: {
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  title: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#555',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  message: {
    marginBottom: '15px',
    color: 'green',
    textAlign: 'center',
  },
};