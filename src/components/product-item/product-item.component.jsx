import React from 'react';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';

import './product-item.scss';

const ProductItem = ({
  title,
  title_1,
  subtitle,
  subtitle_1,
  main,
  button,
  imageUrl,
  textExtra,
  history,
  linkUrl,
  match,
}) => (
  <div className={`item-product${textExtra} item-product`}>
    <img src={imageUrl} alt='prod' />
    
    <div className={`content-product${textExtra} content-product`}>
      <span className={`title-product${textExtra}`}>{main}</span>
      <h1 className='title-product'>{title}</h1>
      <span className="subtitle-product">{subtitle}</span>
      <h1 className='title-product'>{title_1}</h1>
      <span className="subtitle-product">{subtitle_1}</span>
      <CustomButton onClick={() => history.push(`${match.url}${linkUrl}`)}>
        {button}
      </CustomButton>
    </div>
  </div>
);

export default withRouter(ProductItem);
