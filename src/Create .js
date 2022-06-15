import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState(''); // Dynamic value so that the title field can be updated and saved.
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Patrick');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // The default is to refresh the page after clicking the button. We want to prevent that.
        const blog = { title, body, author }; // Allows us to save the three variables into the const called blog.

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            navigate('/')
        })
    }
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} // This allows us to set the title as what is written in the "title" field.
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value) }
                ></textarea>
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value) }
                >
                    <option value="Patrick">Patrick</option>
                    <option value="Stephanie">Stephanie</option>
                </select>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Adding Blog...</button> }
                <h3><br />Blog Post: Preview</h3>
                <p><br />{ title }</p>
                <p><br />{ body }</p>
                <p><br />Written by { author }</p>
            </form>
        </div>
     );
}
 
export default Create;