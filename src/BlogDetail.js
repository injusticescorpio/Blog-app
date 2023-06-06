import { useParams,useHistory } from "react-router-dom";
import useFetch from "./useFetch";




const BlogDetail = () => {
    const {id}= useParams()
    const {data:blog,isPending,error}=useFetch('http://localhost:8000/blogs/'+id)
    const history=useHistory()
    const handleDeleteBlog = () => {
        fetch('http://localhost:8000/blogs/'+id,{
            method:'DELETE'
        })
        .then(() => {
            alert('Blog deleted successfully')
            history.push('/')
        })

    }

    return ( 
        <div className="blog-details">
        { isPending && <div>Loading...</div> }
        { error && <div>{ error }</div> }
        { blog && (
          <article>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
            <div>{ blog.body }</div>
            <button onClick={handleDeleteBlog}>delete</button>
          </article>
        )}
      </div>
     );
}
 
export default BlogDetail;