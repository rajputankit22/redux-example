import React, { Component } from "react";

export class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then(res => res.json())
      .then(data => {
        this.setState({
          posts: data
        });
      });
  }

  render() {
    const postItem = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItem}
      </div>
    );
  }
}

export default Posts;
