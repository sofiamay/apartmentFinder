import React, { Component, PropTypes } from 'react';
import HouseImages from './HouseImages';

export default class House extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      images: false,
    };
    this.toggleImages = this.toggleImages.bind(this);
  }
  toggleImages() {
    this.setState({
      images: true,
    });
  }

  render() {
    return (
      <div className="house">
        <div className="house-header">
          <a onClick={() => {this.setState({ images: !this.state.images });}} href="#">
            {this.props.data.name}
          </a>
        </div>
        {  this.state.images ? <HouseImages images={this.props.data.images}/> : null }
      </div>
    );
  }
}

House.propTypes = {
  data: PropTypes.object,
};
