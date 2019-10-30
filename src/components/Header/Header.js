import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Header extends Component {

    render () {
        const newPostLink = this.props.auth ? <NavLink to={{
                pathname: "/new-post",
                    //example how we can use anchor
                    // both hash and search are available in this.props.location
                hash: '#submit',
                search: '?quick-submit=true'
            }}>
                New Post
            </NavLink> : null

        return (
            <div>
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
                    <button onClick={this.props.login}>Login</button>
                    <button onClick={this.props.logout}>Logout</button>
                </div>
             </div>
        );
    }
}

export default Header;