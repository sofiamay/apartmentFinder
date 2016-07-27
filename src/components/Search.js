import React, { Component, PropTypes } from 'react';

export default class Search extends Component {
  constructor(props, context) {
    super(props, context);
    this.updateFilter = this.updateFilter.bind(this);
  }

  updateFilter(event) {
    this.props.actions.updateFilter(event.target.value);
  }

  // handleDecrement() {
  //   this.props.actions.decrement();
  // }

  render() {
    return (
      <div className="search-container">
        <div className="search-bar">
          <input type="text" name="fname" onChange={this.updateFilter.bind()}/>
          <button type="button">Search</button>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  filter: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};
