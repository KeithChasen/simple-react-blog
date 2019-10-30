import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: '',
        submitted: false
    }

    componentDidMount() {
        console.log(this.props)
    }

    postDataHandler = () => {
        const post = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        }
        axios.post('/posts/', post)
            .then(response => {
                console.log(response)

                //different methods of redirecting after submitting:

                // this.setState({
                //     submitted: true
                // })

                //same as Redirect (replaces previous page with new one)
                // this.props.history.replace('/post')

                //doesn't replace page with new one, so that it's possible to navigate back
                this.props.history.push('/post')
            })
    }

    render () {
        let redirect = null;
        if (this.state.submitted) {
            redirect = <Redirect to="/posts" />
        }
        return (
            <div className="NewPost">
                { redirect }
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Kostya">Kostya</option>
                    <option value="Keith">Keith</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;