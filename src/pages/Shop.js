import React, { Component } from 'react';

// COMPONENTS

import Products from '../components/Products';
import Filter from '../components/Filter';
import Basket from '../components/Basket';


export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], filteredProducts: [], cartItems: [], isOpenCart: false }

    this.handleChangeSort = this.handleChangeSort.bind(this);
    this.handleChangeSize = this.handleChangeSize.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }

  componentWillMount() {
    fetch("http://localhost:8000/products")
      .then(res => res.json())
      .then(data => this.setState({
        products: data,
        filteredProducts: data
      }));
    if (localStorage.getItem('cartItems')) {
      this.setState({
        cartItems: JSON.parse(localStorage.getItem('cartItems'))
      });
    }
  }

  // filter by price
  handleChangeSort(e) {
    this.setState({ sort: e.target.value });
    this.listproducts();
  }

  // filter by size
  handleChangeSize(e) {
    this.setState({ size: e.target.value });
    this.listproducts();
  }

  listproducts() {
    this.setState(state => {

      // filter by price
      if (state.sortBy !== '') {
        state.products.sort((a, b) => (state.sort === 'lowest') ? (a.price > b.price ? 1 : -1) : (a.price < b.price ? 1 : -1))
      } else {
        state.products.sort((a, b) => (a.id < b.id ? 1 : -1));
      }

      // filter by size
      if (state.size !== '') {
        return {
          filteredProducts: state.products.filter(a =>
            a.availableSizes.indexOf(state.size.toUpperCase()) >= 0)
        };
      }

      return { filteredProducts: state.products };
    })
  }

  handleAddToCart(e, product) {
    this.setState(state => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;
      cartItems.forEach(item => {
        if (item.id === product.id) {
          productAlreadyInCart = true;
          item.count++;
        }
      });
      if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return cartItems;
    })
  }

  handleRemoveFromCart(e, item) {
    this.setState(state => {
      const cartItems = state.cartItems.filter(elm => elm.id !== item.id);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { cartItems };
    })
  }

  render() {
    return (
        <div>
          <h1>E commerce shop</h1>
          <br>
          </br>
          <div className="row">
            <div className="col-md-8">
              <Filter
                size={this.state.size}
                sort={this.state.sortBy}
                handleChangeSize={this.handleChangeSize}
                handleChangeSort={this.handleChangeSort}
                count={this.state.filteredProducts.length}
              />
              <hr></hr>
              <Products
                products={this.state.filteredProducts}
                handleAddToCart={this.handleAddToCart}
                cartItems={this.state.cartItems}
              />
            </div>
            <div className="col-md-4">
              <p onClick={() => this.setState({ isOpenCart: !this.state.isOpenCart })}>le panier</p>
              <div className={this.state.isOpenCart ? "is-open" : "is-close"}>
                <Basket
                  cartItems={this.state.cartItems}
                  handleRemoveFromCart={this.handleRemoveFromCart}
                />
              </div>
            </div>
          </div>
        </div>
    )
  }
}
