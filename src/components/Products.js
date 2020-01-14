import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../scss/App.scss';

export default class Products extends Component {

  constructor(props) {
    super(props);
    this.state = {
      test: this.props.cartItems
    }
  }

  render() {
    console.log(this.state.test)

    const productItems = this.props.products.map(product => (

      <div className="col-md-4" key={product.id}>
        <div className="thumbnail text-center">
          <a href={`#${product.id}`} onClick={(e) => this.props.handleAddToCart(e, product)}>
            <img className="img__product" src={`/products/${product.sku}.jpg`} alt={product.title} />
            <Link to={{
              pathname: `/shop/${product.id}`,
              aboutProps: { name: product }
            }}>{product.title}</Link>
          </a>
          <div>
            <span>{product.price}</span>
            <br></br>
            <span>{product.id}</span>
            <button className="btn btn-default"
              onClick={(e) => this.props.handleAddToCart(e, product)}>Add to cart</button>
          </div>
        </div>
      </div>
    )
    )
    return (
      <div className="row">
        {productItems}
      </div>
    )
  }
}

