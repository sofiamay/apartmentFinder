import React, { Component, PropTypes } from 'react';

export default class Search extends Component {
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
      <div className="search-container">
        <div className="search-bar">  
          <input type="text" name="fname" />
          <button type="button">Search</button>        
        </div>
      </div>
    );
  }
}

Search.propTypes = {
}
