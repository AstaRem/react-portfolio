import './components/App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import ProjectGallery from './components/ProjectGallery';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  // const styles = {
  //   body: {
  //     backgroundColor: "#f5f5f5",
  //   }
  // }
  return (
    <Router>
      <nav >
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link to="/react-portfolio">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/react-portfolio/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/react-portfolio/project-gallery">Projects</Link>
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