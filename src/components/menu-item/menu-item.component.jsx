import React from 'react';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';

import './menu-item.styles.scss';

const MenuItem = ({
  title,
  subtitle,
  button,
  imageUrl,
  size,
  textExtra,
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

export default withRouter(MenuItem);
