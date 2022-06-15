import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Tech Learn</h1>
            <div className="links">
                <Link to="/">Home</Link> {/* "Link" needs to be used here for React to intercept requests to the server. */}
                <Link to="/create">New Blog</Link> {/* Only use anchor tags to go to external websites. */}

            </div>
        </nav>
     );
}
 
export default Navbar;