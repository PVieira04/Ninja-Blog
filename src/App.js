import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //Always needed when routing.
import Create from './Create ';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/create' element={<Create/>} />
            <Route path='/blogs/:id' element={<BlogDetails/>} /> {/* Here we have :id which means use whatever "id" is after the "/". We can define what it is in the BlogDetails component. */}
            <Route path='*' element={<NotFound />} /> {/* For any other extension that doesn't match the previous ones, go here. Always place at the bottom. */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;