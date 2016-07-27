import React, { Component, PropTypes } from 'react';
import throttle from '../utils/helpers';

export default class Search extends Component {
  constructor(props, context) {
    super(props, context);
    this.updateFilter = this.updateFilter.bind(this);
  }

  updateFilter(event) {
    throttle(this.props.actions.updateFilter(event.target.value), 200)();
  }

  render() {
    return (
      <div className="search-container">
        <div className="search-bar">
          <input type="text" name="fname" onChange={this.updateFilter}/>
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
