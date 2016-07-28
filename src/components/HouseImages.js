import React, { Component, PropTypes } from 'react';

export default class HouseImages extends Component {
  constructor(props, context) {
    super(props, context);
  }

  // handleIncrement() {
  //   this.props.actions.increment();
  // }

  // handleDecrement() {
  //   this.props.actions.decrement();
  // }

  render() {
    return (
      <div className="house-images">
        <ul className="house-images">
          {this.props.images.map(image =>
            <img src={image.thumb} />
          )}
        </ul>
      </div>
    );
  }
}

HouseImages.propTypes = {
  images: PropTypes.object.isRequired,
};
