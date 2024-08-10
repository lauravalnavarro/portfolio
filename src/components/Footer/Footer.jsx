import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Laura N. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;