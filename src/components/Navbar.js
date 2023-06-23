import Home from './Home';
import Contact from './Contact';
import ProjectGallery from './ProjectGallery';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



function Navbar(){
    return (
        <Router>
      
        <nav class="navigation" >
          <ul className="nav justify-content-start">
            <li className="nav-item">
              <Link  className="nav-link" to="/react-portfolio">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/react-portfolio/project-gallery">Projects</Link>
            </li>
  
            <li className="nav-item">
              <Link className="nav-link" to="/react-portfolio/contact">Contact</Link>
            </li>
          </ul>
        </nav>
  
        {/* <li className={`nav-item ${activeNavItem === 'home' ? 'active' : ''}`}>
    <Link className="nav-link" to="/react-portfolio" onClick={() => setActiveNavItem('home')}>
      Home
    </Link>
  </li>
  
  <li className={`nav-item ${activeNavItem === 'projects' ? 'active' : ''}`}>
    <Link className="nav-link" to="/react-portfolio/project-gallery" onClick={() => setActiveNavItem('projects')}>
      Projects
    </Link>
  </li>
  
  <li className={`nav-item ${activeNavItem === 'contact' ? 'active' : ''}`}>
    <Link className="nav-link" to="/react-portfolio/contact" onClick={() => setActiveNavItem('contact')}>
      Contact
    </Link>
  </li>
   */}
  
  
        <Routes>
          <Route path="/react-portfolio" element={<Home />} />
          <Route path="/react-portfolio/project-gallery" element={<ProjectGallery />} />      
          <Route path="/react-portfolio/contact" element={<Contact />} />
        </Routes>
      </Router>
  
    )
}
  
  
export default Navbar;