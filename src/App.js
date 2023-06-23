import './components/App.css';
import Header from './components/Header'
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectGallery from './components/ProjectGallery';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
    <Router>

      <nav class="navigation" >
        <ul className="nav nav-tabs justify-content-start">
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


      <Routes>
        <Route path="/react-portfolio" element={<Home />} />
        <Route path="/react-portfolio/project-gallery" element={<ProjectGallery />} />      
        <Route path="/react-portfolio/contact" element={<Contact />} />
      </Routes>
    </Router>

    <Footer />

    </>
  );
}

export default App;