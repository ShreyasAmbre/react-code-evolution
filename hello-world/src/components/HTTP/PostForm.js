import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      userId: '',
      title: '',
      body: ''
    }
  }

  changeHandler = (event) => {
    console.log(event.target.name, event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    const body = {
      userId: this.state.userId, 
      title: this.state.title, 
      body: this.state.body 
    }
    axios.post('https://jsonplaceholder.typicode.com/posts', body)
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      console.log(error)
    })
  }
  
  render() {
    const { userId, title, body } = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <label htmlFor="title">User ID</label>
            <input type="text" name="userId" value={userId} onChange={this.changeHandler}/>
          </div>
          <div>
            <label htmlFor="title">Post Title</label>
            <input type="text" name="title" value={title} onChange={this.changeHandler}/>
          </div>
          <div>
            <label htmlFor="title">Post Body</label>
            <input type="text" name="body" value={body} onChange={this.changeHandler}/>
          </div>

          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm
