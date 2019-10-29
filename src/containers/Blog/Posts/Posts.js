import React, { Component } from 'react'
import axiosInstance from "../../../axios";
import Post from "../../../components/Post/Post";
import { Link } from "react-router-dom";

import './Posts.css'

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
        this.setState({selectedPostId: id})
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong</p>
        if (!this.state.error) {
            posts = this.state.posts
                .map(
                    post =>
                        <Link to={'/' + post.id} key={post.id}>
                            <Post
                                title={post.title}
                                author={post.author}
                                clicked={() => this.postSelectedHandler(post.id)}
                            />
                        </Link>
                )
        }

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts