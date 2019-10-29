import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom'

import './Blog.css';
import Posts from './Posts/Posts'
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/" exact>
                                    Home
                                </NavLink>
                            </li>

                            {/*example how we can use anchor*/}
                            <li>
                                <NavLink to={{
                                    pathname: "/new-post",
                                    // both hash and search are available in this.props.location
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}>
                                    New Post
                                </NavLink>
                            </li>

                        </ul>
                    </nav>
                </header>

                <Switch>
                    <Route exact path='/' component={Posts} />
                    <Route path='/new-post' component={NewPost} />
                    <Route path='/:id' component={FullPost} />
                </Switch>

            </div>
        );
    }
}

export default Blog;