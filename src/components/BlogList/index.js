// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsListDetails} = props
  return (
    <ul className="unordered-list">
      {blogsListDetails.map(each => (
        <BlogItem key={each.id} eachblogsListDetails={each} />
      ))}
    </ul>
  )
}
export default BlogList
