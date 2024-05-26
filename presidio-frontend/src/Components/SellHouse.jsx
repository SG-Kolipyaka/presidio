import React from 'react';
import SellerForm from './SellerForm';
import SellerBlock from './SellerBlock';
import '../css/sellhouse.css';

const SellHouse = () => {
  return (
    <div className='houseblock'>
      <div className="seller-block">
        <SellerBlock />
      </div>
      <div className="seller-form">
        <SellerForm />
      </div>
    </div>
  );
}

export default SellHouse;
