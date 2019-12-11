import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// COMPONENTS
import Nav from './components/Nav';

// PAGES 
import About from './pages/About';
import Shop from './pages/Shop';
import ItemDetail from './pages/ItemDetail';

class App extends Component {

  render() {
    return (

      <div className="container">
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route path="/" exact component={About} />
              <Route path="/about" component={About} />
              <Route path="/shop" exact component={Shop} />
              <Route path="/shop/:id" component={ItemDetail} />
            </Switch>
          </div>
        </Router>


      </div>
    );
  }
}

export default App;
