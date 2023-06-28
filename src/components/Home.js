import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'



function Home() {
  return (
    <div className="home main_container">
      <div className="row">
        <div className="prof_image_container">
          <img id="profile_img" src={process.env.PUBLIC_URL + "/profilePhotoSquare.jpg"} alt="Profile" />
        </div>
        <div className="col-md12  about">
          <div>
            <h2 className="home">Hello, I am Asta, </h2>
            <div id="statement">
            <div className="about_description">
              <p id="aspiring_dev"><span id="developer">aspiring Front-end Web Developer</span> based in Coventry, United Kingdom </p>
              <p>Technology, creativity and making useful things are my passion. When I discovered that web development and programming includes all these components, it was a clear career path for me. I'm excited to keep learning and growing in this field. It is very satisfying to see my lines of code becoming something beautiful and useful, solving problems!  </p>
            </div>

            <div className="about_description">
              <p>I recently successfully completed a Front-end Web development and UX design Bootcamp with the University of Birmingham. It equipped me with the solid foundation and confidence to find solutions to the problems.</p>
                <p>Here's an overview of my tech stack:</p>
                <ul>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Node.js and npm packages</li>
                  <li>HTML5</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                  <li>Third-party APIs</li>
                  <li>Git, GitHub</li>
                </ul>
              </div>

              <div className="about_description">
                <p>I have showcased some of my projects on Projects page. While continue learning, I will keep adding more projects here.</p>
                <p>I am seeking to join a dynamic team and am open to freelance opportunities.</p>
              </div>

              <div className="tech_icons">
                  <FontAwesomeIcon icon={icon({name:'js', style:'brands'})} />
                  <FontAwesomeIcon icon={icon({name: 'react', style: 'brands'})} />
                  <FontAwesomeIcon icon={icon({name: 'node', style: 'brands'})} />
                  <FontAwesomeIcon icon={icon({name: 'npm', style: 'brands'})} />

                  <FontAwesomeIcon icon={icon({name: 'html5', style: 'brands'})} />
                  <FontAwesomeIcon icon={icon({name: 'css3-alt', style: 'brands'})} />
                  <FontAwesomeIcon icon={icon({name: 'bootstrap', style: 'brands'})} />

                  <FontAwesomeIcon icon={icon({name: 'git', style: 'brands'})} />
                  <FontAwesomeIcon icon={icon({name: 'github', style: 'brands'})} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
