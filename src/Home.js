import BlogList from "./BlogList";

import useFetch from "./useFetch";

const Home = () => {
    // let name='mario'
    // const handleClickagain=(name,e)=>{
    //     setName('arju')
    // }
    const {data,isPending,error}=useFetch('http://localhost:8000/blogs')
 

    //currently useeeffecr run only the first time since an empty dependcoes is passed []
    return ( 
        <div className="home">
            {/* <button onClick={(e)=>{handleClickagain('mario',e)}}>click me again</button> */}
            {error && <div>{error}</div>}
            {isPending && <div>Loading....</div> }
           {data && <BlogList blogs={data} title="All Blogs" />}
           {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='arjun')} title="Arjun Blogs"/> */}
        </div>
     );
}
 
export default Home;