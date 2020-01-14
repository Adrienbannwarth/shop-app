
import React, { Component } from 'react'
import Slide from './slider/Slide'
import LeftArrow from './slider/LeftArrow'
import RightArrow from './slider/RightArrow'

export default class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 2,
      translateValue: 0,
      width: 0,
      products: []
    }
  }

  componentWillMount() {
    fetch("http://localhost:8000/products")
      .then(res => res.json())
      .then(data => this.setState({
        products: data,
        filteredProducts: data
      }));
  }

  componentDidMount() {
    this.setState({
      width: this.sliderWidth()
    });
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 1) {
      return
    }

    this.setState(backState => ({
      currentIndex: backState.currentIndex - 1,
      translateValue: backState.translateValue + (this.slideWidth() + 20)
    }));
  }

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.products.length) {
      return this.setState({
        currentIndex: 2,
        translateValue: 0
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth() + 20),
      width: this.sliderWidth()
    }));
  }

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth
  }

  sliderWidth = () => {
    return document.querySelector('.progress-bar-contain').clientWidth
  }

  render() {
    const test = this.state.products;
    console.log(test)
    return (
      <div>
        <div className="slider">
          <div className="slider-wrapper"
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: 'transform ease-out 0.45s'
            }}>
            {
              this.state.products.map((image, i) => (
                <Slide key={i} image={image.sku} />
              ))
            }
          </div>

          <LeftArrow
            goToPrevSlide={this.goToPrevSlide}
          />

          <RightArrow
            goToNextSlide={this.goToNextSlide}
          />
        </div>
        <div className="footer-slider">
          <p className="current-index">{this.state.currentIndex} /  {this.state.products.length}</p>
          <div className="progress-bar-contain">
            <div className="progress-bar"
              style={{
                width: this.state.currentIndex * (this.state.width / this.state.products.length)
              }}
            ></div>
          </div>
          <div className="footer-slider-arrow">
            <LeftArrow
              className="prev"
              goToPrevSlide={this.goToPrevSlide}
            />

            <RightArrow
              className="next"
              goToNextSlide={this.goToNextSlide}
            />
          </div>
        </div>
      </div>
    );
  }
}