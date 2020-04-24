import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Кредитная карта 100 дней без %',
          subtitle: 'Доставим быстро и безопасно',
          imageUrl: 'https://chelindustry.ru/images/ZFotoS--ChlInd_983316.jpg',
          id: 1,
          button: 'Заказать карту',
          linkUrl: 'hats'
        },
        {
          title: 'Как получить отсрочку по кредитам',
          imageUrl: 'https://alfabank.st/media/get-money/credit/credit-holydays/main_credit_quarantine_686x320_08-04-2020.png',
          id: 2,
          button: 'Подробнее',
          linkUrl: ''
        },
        {
          title: 'Кредит наличными от 7.7%',
          subtitle: 'Доставим быстро и безопасно',
          button: 'Заказать карту',
          imageUrl: 'https://alfabank.st/media/get-money/credit/main_mobile_no_menu_686x320_07-03-2020.png',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'Ипотека от 6.5%',
          subtitle: 'Решение онлайн и оформление за 1 визит',
          button: 'Оформить',
          imageUrl: 'https://alfabank.st/media/make-money/savings-account/alfa/account-main-desktop-01-04-2020.png',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
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
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
