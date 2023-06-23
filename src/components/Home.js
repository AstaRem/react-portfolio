import React from 'react';
import './App.css';

function Home() {
  return (
    <div className="home" id="home_container">
      <div className="row">
        <div className="prof_image_container">
          <img id="profile_img" src={process.env.PUBLIC_URL + "/profilePhotoSquare.jpg"} alt="Profile" />
        </div>
        <div className="col-md12  about">
          <div className="ms-3">
            <h2 class="home">Hello, I am Asta, </h2>
            <div id="statement">
            <div class="about_description">
              <p id="aspiring_dev"><span id="developer">aspiring Front-end Web Developer</span> based in Coventry, United Kingdom. </p>
              <p>Technology, creativity and making useful things are my passion. When I discovered that web development and programming includes all these components, it was a clear career path for me.  The continuous learning aspect of this field excites me and fuels my commitment to personal and professional growth. It is very satisfying to see my lines of code becoming something beautiful and useful, solving problems!  </p>
            </div>

            <div class="about_description">
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

              <div class="about_description">
                <p>I have showcased some of my projects on Projects page. While continue learning, I will keep adding more projects here.</p>
                <p>Currently I am seeking for the opportunities to work with smart and ambitious people, become the valuable member of the dynamic team within a company. </p>
                <p>I am open to freelance opportunities too.</p>
              </div>



            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
