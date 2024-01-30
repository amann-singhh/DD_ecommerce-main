import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/collections/collection1.png'}
        title={'Men'}
        text={'SHOP NOW'}
        link={'/shopmen'}
      />
      
      <ProductCollection
        image={'/collections/collection2.png'}
        title={'Women'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection4.png'}
        title={'Stickers'}
        text={'SHOP NOW'}
        link={'/shopsticker'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
