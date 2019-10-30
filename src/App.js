import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

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

    login = () => {
        this.setState({auth : true})
    }

    logout = () => {
        this.setState({auth : false})
    }

  render() {
        const newPostLink = this.state.auth ?
            <Route path='/new-post' component={AsyncNewPost} /> :
            null

      return (
          <BrowserRouter>
              <React.Fragment>
                  <div className="Blog">
                      <Header
                          auth={this.state.auth}
                          login={this.login}
                          logout={this.logout}
                      />
                      { newPostLink }
                      <Route path='/posts/' component={Posts} />
                      <Redirect from="/" to="/posts" />
                  </div>
            </React.Fragment>
          </BrowserRouter>
    );
  }
}

export default App;
