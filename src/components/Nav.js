import React, { Component } from 'react';
import '../scss/App.scss';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      burgerIsOpen: false,
    }
  }

  render() {
    const { t } = this.props;
    return (
      <div>
      <h1>{t('This_is_test_view')}</h1>
        <div className={this.state.burgerIsOpen ? "container-menu is-open-menu" : "is-close-menu"}>
          <p>content</p>
        </div>
        <header>
          <div onClick={() => this.setState({ burgerIsOpen: !this.state.burgerIsOpen })} className="btn-burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <img className="nav-logo" src={require('../logo-shop.jpg')} alt="logo" />
          <nav>
            <ul className="nav-links">
              <Link to='/about'>
                <li><span>About</span></li>
              </Link>
              <Link to="/shop">
                <li><span>Shop</span></li>
              </Link>
              <Link to="/slider">
                <li><span>Collections</span></li>
              </Link>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default withTranslation()(Nav);

