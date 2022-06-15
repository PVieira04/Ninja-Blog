import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs'); // We want to call the useFetch custom hook, fetch from the given url and get the three parameters.

    return ( 
        <div className="home">
            { error && <div>{ error }</div> } {/* If there is an error, show the error message. */}
            { isPending && <div>Loading...</div> } {/* If isPending is true, show the loading message. If not, then don't. */}
            { blogs && <BlogList blogs={blogs} title="All Blogs" /> } {/* Having code in <BlogList /> makes it reusable becasue there are other places you may want to use a normal list of blogs such as with a search page. instead of {blogs} you can do {blogs.filter((blog) => blog.author === 'Mario')} ALSO, We do not want to output the data UNTIL we have "blogs" fully updated. The value of "blogs" at the beginning is set to null and we can't run any script on a null value.*/}
        </div>
     );
}

export default Home;