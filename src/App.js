import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './components/Header/Header';

import Posts from './containers/Posts/Posts'

import asyncComponent from './hoc/asyncComponent'

const AsyncNewPost = asyncComponent(() => {
    return import("./containers/NewPost/NewPost")
})

class App extends Component {

    state = {
        auth: false
    }

  render() {
        const newPostLink = this.state.auth ?
            <Route path='/new-post' component={AsyncNewPost} /> :
            null

    return (
        <BrowserRouter>
          <div className="Blog">
              <div className="buttons">
                  <button onClick={() => this.setState({auth : true})}>Login</button>
                  <button onClick={() => this.setState({auth : false})}>Logout</button>
              </div>
            <Header auth={this.state.auth} />
              <Switch>
                  { newPostLink }
                  <Route path='/posts/' component={Posts} />
                  {/*<Redirect from="/" to="/posts" />*/}
                  <Route render={() => <h1>Not Found</h1>} />
              </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
