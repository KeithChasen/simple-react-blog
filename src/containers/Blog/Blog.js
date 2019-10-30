import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'

import './Blog.css';
import Posts from './Posts/Posts'
import NewPost from "./NewPost/NewPost";

class Blog extends Component {

    state = {
        auth: false
    }

    render () {
        const newPostLink = this.state.auth ? <NavLink to={{
                pathname: "/new-post",
                    //example how we can use anchor
                    // both hash and search are available in this.props.location
                hash: '#submit',
                search: '?quick-submit=true'
            }}>
                New Post
            </NavLink> : null

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/posts" exact>
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                { newPostLink }
                            </li>

                        </ul>
                    </nav>
                </header>

                <div className="buttons">
                    <button onClick={() => this.setState({auth : true})}>Login</button>
                    <button onClick={() => this.setState({auth : false})}>Logout</button>
                </div>

                <Switch>
                    {this.state.auth ? <Route path='/new-post' component={NewPost} /> : null }
                    <Route path='/posts/' component={Posts} />
                    <Redirect from="/" to="/posts" />
                </Switch>

            </div>
        );
    }
}

export default Blog;