import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PostsActions from '../actions/PostsActions';
import * as FilterActions from '../actions/FilterActions';
import Filter from '../components/Filter';
import Houses from '../components/Houses';

/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
export default class App extends Component {

  /* Load initial ajax data. The response will trigger an update in the views */
  componentDidMount() {
    this.props.postsActions.fetchPosts();
  }
  render() {
    // we can use ES6's object destructuring to effectively 'unpack' our props
    const { posts, postsActions, filter, filterActions } = this.props;
    return (
      <div className="main-app-container">
        <div className="main-app-nav">Happy House Hunting!</div>
        {/* notice that we then pass those unpacked props into the Counter component */}
        {/* <Counter counter={counter} actions={actions} /> */}
        <Filter filter={filter} actions={filterActions} />
        <Houses posts={posts} actions={postsActions} filter={filter} />
      </div>
    );
  }
}

App.propTypes = {
  posts: PropTypes.object.isRequired,
  postsActions: PropTypes.object.isRequired,
  filter: React.PropTypes.string.isRequired,
  filterActions: PropTypes.object.isRequired,
};

/**
 * Keep in mind that 'state' isn't the state of local object, but your single
 * state in this Redux application. 'counter' is a property within our store/state
 * object. By mapping it to props, we can pass it to the child component Counter.
 */
function mapStateToProps(state) {
  return {
    posts: state.posts,
    filter: state.filter,
  };
}

/**
 * Turns an object whose values are 'action creators' into an object with the same
 * keys but with every action creator wrapped into a 'dispatch' call that we can invoke
 * directly later on. Here we imported the actions specified in 'CounterActions.js' and
 * used the bindActionCreators function Redux provides us.
 *
 * More info: http://redux.js.org/docs/api/bindActionCreators.html
 */
function mapDispatchToProps(dispatch) {
  return {
    postsActions: bindActionCreators(PostsActions, dispatch),
    filterActions: bindActionCreators(FilterActions, dispatch)
  };
}

/**
 * 'connect' is provided to us by the bindings offered by 'react-redux'. It simply
 * connects a React component to a Redux store. It never modifies the component class
 * that is passed into it, it actually returns a new connected componet class for use.
 *
 * More info: https://github.com/rackt/react-redux
 */

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
