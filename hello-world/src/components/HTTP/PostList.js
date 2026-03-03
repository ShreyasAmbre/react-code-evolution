import React, { Component } from 'react'
import axios from 'axios'
import PostForm from './PostForm';

class PostList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts: [],
       errorMsg: null
    }
  }

  componentDidMount(){
    this.getAllPosts();
  }

  getAllPosts(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      console.log(res);
      this.setState({
        posts: res.data,
      })
    })
    .catch(error => {
      console.log(error)
      this.setState({ errorMsg: "Error on retrieving data" })
    })
  }
  
  render() {
    const { posts, errorMsg } = this.state
    return (
      <div>
        <div>
          <PostForm />
        </div>
        List of Post
        {
          posts.length ? 
          posts.map(post => <div key={post.id}> { post.title }  </div>)  :
          errorMsg 
        }
      </div>
    )
  }
}

export default PostList
