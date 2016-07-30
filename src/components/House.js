import React, { Component, PropTypes } from 'react';
import HouseImages from './HouseImages';

export default class House extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      images: false,
      longDescription: false,
    };
    // these bindings aren't working for some reason
    this.toggleImages = this.toggleImages.bind(this);
    this.toggleLongDescription = this.toggleLongDescription.bind(this);
    this.defaultImage = this.defaultImage.bind(this);
    this.description = this.description.bind(this);
  }
  toggleImages() {
    this.setState({
      images: !this.state.images,
    });
  }
  toggleLongDescription() {
    this.setState({
      longDescription: !this.state.longDescription,
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
  /* the methods won't properly bind, even though I bound them in the constructor.
  So I cheated by passing the component as a parameter
  */
  description() {
    let description;
    try {
      const text = this.props.data.description;
      if (text.length > 400) {
        description = `${text.substring(0, 400)}...`;
      } else {
        description = text;
      }
      // description = this.props.data.description.substring(0,400);
    } catch (err) {
      description = '';
    }
    return description;
  }

  render() {
    const defaultImage = this.defaultImage();
    const cardHeight = { height: this.state.longDescription ? '800px' : '400px' };
    return (
      <div className="card" style={cardHeight}>
        { defaultImage ? <img src={defaultImage} /> : null}
        <div className="house-header">
          <a onClick={() => {this.setState({ images: !this.state.images });}} >
            {this.props.data.name}
          </a>
        </div>
        { /* <div className="house-description">{description}</div> */}
        <div className="house-description">{this.description()}</div>
        { this.state.images ? <HouseImages images={this.props.data.images}/> : null }
      </div>
    );
  }
}

House.propTypes = {
  data: PropTypes.object,
};
