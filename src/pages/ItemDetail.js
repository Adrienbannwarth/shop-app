import React, { Component } from 'react'

export default class ItemDetail extends Component {
  render() {


    const product = this.props.location.aboutProps;


    console.log("HERE", product)
    return (
      <div>
        {/* <h1>{product.title}</h1> */}
        <h1>item</h1>

      </div>
    )
  }
}
