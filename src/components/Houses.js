import React, { Component, PropTypes } from 'react';
import House from './House';
import { containsLabel } from '../utils/helpers.js';

export default class Houses extends Component {
  constructor(props, context) {
    super(props, context);
  }

  /* different veiws are displayed depending on the state of the posts and the filter */
  posts() {
    const { posts, filter } = this.props;
    // if fetching posts, display spinner
    if (posts.isFetching) {
      return (
        <div className="posts">Spinner</div>
      );
    }
    // display error
    if (posts.error) {
      return (
        <div className="posts error">Error</div>
      );
    }
    if (filter === '') {
      return (
        <div className="houses">
          {posts.items.map(post =>
            <House data={post} />
          )}
        </div>
      );
    }
    return (
      <div className="houses">
        {posts.items.filter(item => containsLabel(item, filter)).map(post =>
          <House data={post} />
        )}
      </div>
    );
  }

  // handleDecrement() {
  //   this.props.actions.decrement();
  // }

  render() {
    return (
      <div className="houses-container">
        {this.posts()}
      </div>
    );
  }
}

Houses.propTypes = {
  posts: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};
