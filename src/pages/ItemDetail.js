import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ItemDetail extends Component {

  render() {
    console.log(this.props.currencyData)
    const product = this.props.location.aboutProps.name;
    const sizeItem = product.availableSizes.map(product => (
      <p>{product}</p>
    ))

    return (
      <div>
        <Link to={{ pathname: "/shop" }}>back</Link>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>{sizeItem}</p>
        <p>{product.price} €</p>
        <img className="img__product" src={`/products/${product.sku}.jpg`} alt={product.title} />

      </div>
    )
  }
}
