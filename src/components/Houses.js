import React, { Component, PropTypes } from 'react';
import House from './House';

export default class Results extends Component {
  constructor(props, context) {
    super(props, context);
  }

  /* different veiws are displayed depending on the state of the posts and the filter */
  posts() {
    const posts = this.props.posts;
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
    return (
      <ul className="posts">
        {posts.items.map(post =>
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
  actions: PropTypes.object.isRequired
};
