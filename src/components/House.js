import React, { Component, PropTypes } from 'react';
import HouseImages from './HouseImages';

export default class House extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      images: false,
    };
    this.toggleImages = this.toggleImages.bind(this);
    this.defaultImage = this.defaultImage.bind(this);
    this.description = this.description.bind(this);
  }
  toggleImages() {
    this.setState({
      images: true,
    });
  }
  defaultImage() {
    let defaultImage;
    try {
      defaultImage = this.props.data.defaultImage.thumb;
    } catch (err) {
      defaultImage = false;
    }
    return defaultImage;
  }
  description() {
    let description;
    try {
      description = this.props.data.description.substring(0,400);
    } catch (err) {
      description = '';
    }
    return description;
  }

  render() {
    const defaultImage = this.defaultImage();
    const description = this.description();
    const cardHeight = { height: this.state.images ? '800px' : '400px' };
    return (
      <div className="card" style={cardHeight}>
        { defaultImage ? <img src={defaultImage} /> : null}
        <div className="house-header">
          <a onClick={() => {this.setState({ images: !this.state.images });}} href="#">
            {this.props.data.name}
          </a>
        </div>
        <div className="house-description">{description}</div>
        {  this.state.images ? <HouseImages images={this.props.data.images}/> : null }
      </div>
    );
  }
}

House.propTypes = {
  data: PropTypes.object,
};
