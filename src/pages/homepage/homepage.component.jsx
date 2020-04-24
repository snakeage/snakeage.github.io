import React from 'react';

import Directory from '../../components/directory/directory.component';
import Product from '../../components/product/product.component';

import './homepage.styles.scss';

const HomePage = () => (
  <div className="homepage">
    <Directory />
    <Product />
  </div>
);

export default HomePage;
