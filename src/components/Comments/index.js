import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'

import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    commentsList: [],
    commentCount: 0,
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state

    const time = formatDistanceToNow(new Date())
    console.log(time)

    const firstName = name.slice(0, 1)
    const bgComment =
      initialContainerBackgroundClassNames[Math.floor(Math.random() * 7)]

    const newComment = {
      id: uuidv4(),
      firstNames: firstName,
      names: name,
      comments: comment,
      dates: time,
      bgColor: bgComment,
      isLiked: false,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
      commentCount: prevState.commentCount + 1,
    }))
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachLiked => {
        if (id === eachLiked.id) {
          return {...eachLiked, isLiked: !eachLiked.isLiked}
        }
        return eachLiked
      }),
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state
    const filteredList = commentsList.filter(eachData => eachData.id !== id)

    this.setState(prevState => ({
      commentsList: filteredList,
      commentCount: prevState.commentCount - 1,
    }))
  }

  render() {
    const {name, comment, commentsList, commentCount} = this.state
    console.log(commentsList)
    return (
      <div className="main-container">
        <h1 className="head">Comments</h1>
        <div className="upper">
          <div className="form-container">
            <p>Say something about 4.0 Technologies</p>
            <form className="form-container" onSubmit={this.onAddComment}>
              <input
                type="text"
                value={name}
                onChange={this.onChangeName}
                placeholder="Your Name"
                className="input-name"
              />
              <textarea
                value={comment}
                onChange={this.onChangeComment}
                placeholder="Your Comment"
                className="input-comment"
              />
              <button className="button" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="upper-image"
            alt="comments"
          />
        </div>
        <hr className="separator" />
        <div className="lower">
          <p className="comments-count">
            <span className="number-count">{commentCount}</span> Comments
          </p>
          <ul className="comments-container">
            {commentsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                toggleIsLiked={this.toggleIsLiked}
                deleteComment={this.deleteComment}
                commentDetails={eachComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
