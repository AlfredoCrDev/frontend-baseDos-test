// ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product._id}</p>
      <p>{product.description}</p>
      <p>Precio: {product.price}</p>
      <p>Marca: {product.brand}</p>
    </div>
  );
};

export default ProductDetail;