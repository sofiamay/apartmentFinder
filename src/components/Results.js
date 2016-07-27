import React, { Component, PropTypes } from 'react';
import Result from './Result';

export default class Results extends Component {
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
      <div className="results-container">
        <Result data={{name: 'A House', image: 'someURL'}} />
      </div>
    );
  }
}

Results.propTypes = {
}
