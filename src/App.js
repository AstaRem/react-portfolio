import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import ProjectGallery from './components/ProjectGallery';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
          <ul>
            <li>
              <Link to="/react-portfolio">Home</Link>
            </li>
            <li>
              <Link to="/react-portfolio/contact">Contact</Link>
            </li>
            <li>
              <Link to="/react-portfolio/project-gallery">Project Gallery</Link>
            </li>
          </ul>
        </nav>


      <Routes>
        <Route path="/react-portfolio" element={<Home />} />
        <Route path="/react-portfolio/contact" element={<Contact />} />
        <Route path="/react-portfolio/project-gallery" element={<ProjectGallery />} />      
      </Routes>
    </Router>
  );
}

export default App;

{/* <nav>
<ul>
  <li>
    <Link to="/react-portfolio">Home</Link>
  </li>
  <li>
    <Link to="/react-portfolio/contact">Contact</Link>
  </li>
  <li>
    <Link to="/react-portfolio/project-gallery">Projects</Link>
  </li>
</ul>
</nav> */}
