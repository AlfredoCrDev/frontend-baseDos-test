import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Productos</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/add-product" style={styles.navLink}>Agregar Producto</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/delete-product" style={styles.navLink}>Eliminar Producto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '10px 20px',
  },
  navList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  navItem: {
    marginRight: '20px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '5px 10px',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
  },
};
