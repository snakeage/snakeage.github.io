import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/">
        Частным клиентам
      </Link>
      <Link className="option" to="/small-buisiness">
        Малый бизнес и ИП
      </Link>
      <Link className="option" to="/">
        Средний и крупный бизнес
      </Link>
      <Link className="option" to="/">
        Финансовым организациям
      </Link>
      <Link className="option" to="/">
        Клуб
      </Link>
      <Link className="option" to="/">
        Инвестбанк
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Выйти
        </div>
      ) : (
        <Link className="option" to="/signin">
          Интернет-банк
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
