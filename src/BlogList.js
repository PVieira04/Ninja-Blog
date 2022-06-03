import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => { // The blogs property is defined here. One option is to destructure it like this but another way could have been to just write props into the brackets and then define blogs and title as const.
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => ( // use JavaScript's map method on the blogs property. This fires a callback function for each item in the array.
                <div className="blog-preview" key={blog.id}> {/* When we output a list using the map method, each root element in the template we return must have a key property. React uses this property to keep track of each item in the DOM as it outputs it. If data changes, React can keep track of it. Otherwise, React can't distinguish between list items in the DOM.*/ }
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;