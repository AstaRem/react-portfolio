import Home from './Home';
import Contact from './Contact';
import ProjectGallery from './ProjectGallery';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function NavbarLinks(){
    const [activeNavItem, setActiveNavItem] = useState(null);
    const location = useLocation();

    useEffect(() => {
        // Update the activeNavItem state based on the current URL
        switch (location.pathname) {
          case '/react-portfolio':
            setActiveNavItem('home');
            break;
          case '/react-portfolio/project-gallery':
            setActiveNavItem('projects');
            break;
          case '/react-portfolio/contact':
            setActiveNavItem('contact');
            break;
          default:
            setActiveNavItem(null);
            break;
        }
      }, [location]);

    return (

      
        <nav className="navigation" >
          <ul className="nav justify-content-start">
            <li className={`nav-item ${activeNavItem === 'home' ? 'active' : ''}`}>
              <Link  className="nav-link" to="/react-portfolio" onClick={() => setActiveNavItem('home')}>Home</Link>
            </li>
            <li className={`nav-item ${activeNavItem === 'projects' ? 'active' : ''}`}>
              <Link className="nav-link" to="/react-portfolio/project-gallery" onClick={() => setActiveNavItem('projects')}>Projects</Link>
            </li>
  
            <li className={`nav-item ${activeNavItem === 'contact' ? 'active' : ''}`}>
              <Link className="nav-link" to="/react-portfolio/contact" onClick={() => setActiveNavItem('contact')}>Contact</Link>
            </li>
          </ul>
        </nav>  
    )
}


function Navbar(){
    return(
        <Router>
            <NavbarLinks />
            <Routes>
                <Route path="/react-portfolio" element={<Home />} />
                <Route path="/react-portfolio/project-gallery" element={<ProjectGallery />} />      
                <Route path="/react-portfolio/contact" element={<Contact />} />
            </Routes>
        </Router>

    )
}
  
  
export default Navbar;