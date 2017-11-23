import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ArticleList from './components/ArticleList';
import * as action_sources from './actions/action_sources';


class App extends Component {
  // componentDidMount() {
  //   this.props.actions.fetch_sources();
  // }

  render() {
    return (
      <ArticleList />
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     actions: bindActionCreators(action_sources, dispatch)
//   }
// }

// export default connect(null, mapDispatchToProps)(App);

export default App;