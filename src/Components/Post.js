import React, { Component, useState } from 'react'
import Dashboard from './Dashboard'
import axios from "axios"

class Post extends Component {

    state = { posts: [], comments: [] };

    async componentDidMount() {
        let result = await axios.get("https://jsonplaceholder.typicode.com/posts");
        // let result1 = await axios.get("https://jsonplaceholder.typicode.com/comments")
        this.setState({ posts: result.data })


    }
    
    render() {
        const PostData = async (e) => {
            // window.alert("this")
            // e.preventDefault();
            console.log(e);
            const id = e;
            try {
                await axios
                    .get(
                        `https://jsonplaceholder.typicode.com/comments/${id}`

                    )
                    .then((res) => {
                        console.log(res.data);
                        this.setState({ comments: res.data })

                        console.log(this.state.comments);


                    })

                    .catch((err) => {
                        window.alert("Oops! something went wrong please retry ");
                    });
            } catch (err) {
                window.alert(err);
            }
        };

        return (
            <div className="post">
                <Dashboard />
                {this.state.posts.length > 0 ? (
                    <div>

                        <ul className="list-group">
                            {this.state.posts.map(post => (

                                <li
                                    key={post.id} className="list-group-item d-flex justify-content-between flex-column">
                                    <h4>Title</h4>
                                    {post.title}

                                    <h5>Body</h5>
                                    <li key={post.id} className=" d-flex justify-content-between  flex-column ">
                                        {post.body}


                                    </li>


                                    <span className="button  d-flex  justify-content-end ">


                                        <button onClick={() => PostData(post.id)}>
                                            Show Comment
                                        </button>
                                    </span>

                                    {this.state.comments.length > 0 ? (
                                        <div>
                                            <ul className="list-group">
                                                {this.state.comments.map(todo => (
                                                    <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-start">
                                                        {todo.body}
               
                                                    </li>

                                                ))}
                                            </ul>
                                        </div>
                                    ) : (
                                        <div>No comment</div>
                                    )}


                                </li>

                            ))}
                        </ul>
                    </div>

                ) : (
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                )}
            </div>

        );
    }
}

export default Post
