import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    brand: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:8080/products', formData)
      .then(response => {
        console.log('Product added:', response.data);
        setFormData({ title: '', description: '', price: '', brand: '' });
        setMessage('¡Producto creado exitosamente!');
        setTimeout(() => setMessage(''), 3000);
      })
      .catch(error => {
        console.error('Error adding product:', error);
        setMessage('Hubo un error al crear el producto. Por favor, inténtalo de nuevo.');
      });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Agregar Producto</h2>
      {message && <p style={styles.message}>{message}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="text" name="title" placeholder="Título" value={formData.title} onChange={handleChange} style={styles.input} required />
        <textarea name="description" placeholder="Descripción" value={formData.description} onChange={handleChange} style={styles.input} required />
        <input type="number" name="price" placeholder="Precio" value={formData.price} onChange={handleChange} style={styles.input} required />
        <input type="text" name="brand" placeholder="Marca" value={formData.brand} onChange={handleChange} style={styles.input} required />
        <button type="submit" style={styles.button}>Agregar Producto</button>
      </form>
    </div>
  );
};

export default AddProduct;

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
  }
};