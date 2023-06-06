import { useState } from "react"
import { useHistory } from "react-router-dom"


const CreateBlog=()=>{
    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    const [author,setAuthor]=useState('arjun')
    const [isPending,setIsPending]=useState(false)
    const history=useHistory()
    const handleSubmit=(e)=>{
        e.preventDefault(); //prevent form data to clear while refreshing the browser
        const blog={title,body,author}
        setIsPending(true)
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(blog)
        })
        .then(()=>{
            setIsPending(false)
            alert("New blog added")
            // history.go(-1)
            history.push('/') //redirect to home
        })

   
    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" 
                required
                value={title}
                onChange={(e)=>{setTitle(e.target.value)}}
                />
                <label>Blog body:</label>
                <textarea
                 required
                 value={body}
                 onChange={(e)=>{setBody(e.target.value)}}
                >
                   
                </textarea>
                <label>Blog Author:</label>
                <select
                value={author}
                onChange={(e)=>{setAuthor(e.target.value)}}
                >
                    <option value="arjun">arjun</option>
                    <option value="mikku">mikku</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
             </form>
        </div>
    )
}

export default CreateBlog