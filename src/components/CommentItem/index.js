// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleIsLiked, deleteComment} = props
  const {
    id,
    firstNames,
    names,
    comments,
    dates,
    bgColor,
    isLiked,
  } = commentDetails

  const liked = isLiked ? 'sky-blue' : ''

  const onClickLikedIcon = () => {
    toggleIsLiked(id)
  }

  const onDelete = () => {
    deleteComment(id)
  }

  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="comment-item">
      <div className="content-holder">
        <p className={`user-icon ${bgColor}`}>{firstNames}</p>
        <div className="sub-holder">
          <div className="name-holder">
            <h1 className="username">{names}</h1>
            <p className="time-now">{dates}</p>
          </div>
          <p className="comment-line">{comments}</p>
        </div>
      </div>
      <div className="icons-holder">
        <button type="button" className="like-btn" onClick={onClickLikedIcon}>
          <img src={likeImageUrl} className="image2" alt="like" />
        </button>
        <p className={`icon-name ${liked}`}>Like</p>
        <button
          type="button"
          onClick={onDelete}
          testid="delete"
          className="del-btn"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="del-image"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
