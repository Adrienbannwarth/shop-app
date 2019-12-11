import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

export default class Products extends Component {
  render() {
    const productItems = this.props.products.map(product => (
      <div className="col-md-4" key={product.id}>
        <div className="thumbnail text-center">
          <a href={`#${product.id}`} onClick={(e) => this.props.handleAddToCart(e, product)}>
            <img src={`/products/${product.sku}_1.jpg`} alt={product.title} />
            <Link to={{
              pathname: `/shop/${product.id}`,
              aboutProps: { name: product }
            }}>{product.title}</Link>
          </a>
          <div>
            <span>{product.price}</span>
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

