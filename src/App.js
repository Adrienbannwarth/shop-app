import React, { Component } from 'react';
import './scss/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Select from 'react-select';
import { options } from './helpers/options';
import { withTranslation } from 'react-i18next';

// COMPONENTS
import Nav from './components/Nav';

// PAGES 
import About from './pages/About';
import Shop from './pages/Shop';
import ItemDetail from './pages/ItemDetail';
import Slider from './components/Slider';
import Error404 from './pages/Error404'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lang: options[0],
    };
  }

  changeLang = (lang) => {
    const { i18n } = this.props;
    const { value } = lang;
    this.setState({ lang });
    i18n.changeLanguage(value);
  };

  render() {
    const { lang } = this.state;
    const { t } = this.props;
    return (

      <div className="">
        <Select
          defaultValue={options[0]}
          options={options}
          value={lang}
          onChange={this.changeLang}
        />

        {t('Welcome to React Translation')}
        {t('This_is_test_view')}
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route path="/" exact component={About} />
              <Route path="/about" component={About} />
              <Route path="/shop" exact component={Shop} />
              <Route path="/slider" exact component={Slider} />
              <Route path="/shop/:id" component={ItemDetail} />
              <Route component={Error404} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default withTranslation()(App);
