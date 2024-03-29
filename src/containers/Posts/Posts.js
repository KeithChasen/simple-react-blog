import React, { Component } from 'react'
import axiosInstance from "../../axios";
import Post from "../../components/Post/Post";
import { Route } from "react-router-dom";

import './Posts.css'
import FullPost from "../FullPost/FullPost";

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        console.log(this.props)
        axiosInstance.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4)
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Keith'
                    }
                })
                this.setState({
                    posts: updatedPosts
                })
            })
            .catch(err => {})
    }

    postSelectedHandler = id => {
        // this.props.history.push({
        //     pathname: `/${id}`
        // })

        this.props.history.push(`/posts/${id}`)
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong</p>
        if (!this.state.error) {
            posts = this.state.posts
                .map(
                    post =>
                        /*<Link to={'/posts/' + post.id} key={post.id}>*/
                        <Post
                            key={post.id}
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}
                        />
                        // </Link>
                )
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                {/*<Route path={this.props.match.url + '/:id'} component={FullPost} />*/}
            </div>
        );
    }
}

export default Posts