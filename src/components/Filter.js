import React, { Component } from 'react'

export default class Filter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-mb-4">
        {`${this.props.count} products.`}
        </div>
        <div className="col-mb-4">
          <label>
            Order by
            <select
              className="form-control" value={this.props.sortBy}
              onChange={this.props.handleChangeSort}>
              <option value="">Select</option>
              <option value="lowest">lowest to highest </option>
              <option value="highest">highest to lowest</option>
            </select>
          </label>
        </div>
        <div className="col-mb-4">
          <label>
            Filter size
            <select
              className="form-control" value={this.props.size}
              onChange={this.props.handleChangeSize}>
              <option value="">ALL</option>
              <option value="x">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="xxl">XLL</option>
            </select>
          </label>
        </div>
      </div>
    )
  }
}
