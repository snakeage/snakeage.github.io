import React from 'react';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';

import './business-item.styles.scss';

const BuisinessItem = ({
  title,
  title_1,
  subtitle,
  subtitle_1,
  main,
  button,
  imageUrl,
  textExtra,
  classExtra,
  size,
  history,
  linkUrl,
  match,
}) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className={`${textExtra} title`}>{title}</h1>
      <span className="subtitle">{subtitle}</span>
      <CustomButton onClick={() => history.push(`${match.url}${linkUrl}`)}>
        {button}
      </CustomButton>
    </div>
  </div>
);

export default withRouter(BuisinessItem);
