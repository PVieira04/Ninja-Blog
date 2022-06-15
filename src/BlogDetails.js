import { useNavigate, useParams } from "react-router-dom"; // This allows us to grab parameters from the route
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams() // This is the route parameter.
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id) // Can also use template string with ${id}
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then (() => {
            navigate('/')
        })
    }

    return ( 
        <div className="blog-details">
            <h2>Blog #{ id }</h2>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blog && (
                <article>
                    <h3><br /><br />{ blog.title }</h3>
                    <div><br />{ blog.body }</div>
                    <p><br />Written by { blog.author }</p>
                    <p><br /></p>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;