import React from 'react';

import BuisinessItem from '../business-item/business-item.component';

import './directory-buisiness.style.scss';

class DirectoryBuisiness extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Бесплатный счет для бизнеса навсегда',
          button: 'Открыть счет',
          imageUrl: 'https://alfabank.st/media/sme/urgant/mainpage_banner_1140x344.png',
          textExtra: 'white',
          id: 5,
          linkUrl: ''
        }
      ]
    };
  }

  render() {
    return (
      <div className='product-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <BuisinessItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default DirectoryBuisiness;
