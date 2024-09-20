// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachblogsListDetails} = props
  const {title, description, publishedDate} = eachblogsListDetails
  return (
    <li className="list">
      <div className="container">
        <h1 className="post-num-text">{title}</h1>
        <p className="time">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}
export default BlogItem
