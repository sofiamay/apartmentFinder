import React, { Component, PropTypes } from 'react';
import House from './House';
import { containsLabel } from '../utils/helpers.js';

export default class Results extends Component {
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
        <ul className="posts">
          {posts.items.map(post =>
            <House data={post} />
          )}
        </ul>
      );
    }
    return (
      <ul className="posts">
        {posts.items.filter(item => containsLabel(item.images, filter)).map(post =>
          <House data={post} />
        )}
      </ul>
    );
  }

  // handleDecrement() {
  //   this.props.actions.decrement();
  // }

  render() {
    return (
      <div className="posts-container">
        {this.posts()}
      </div>
    );
  }
}

Results.propTypes = {
  posts: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};
