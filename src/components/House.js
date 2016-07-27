import React, { Component, PropTypes } from 'react';

export default class Result extends Component {
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
      <div className="result">
        <div className="result-header">
          <h2>{this.props.data.name}</h2>
        </div>
      </div>
    );
  }
}

Result.propTypes = {
  data: React.PropTypes.object,
}
