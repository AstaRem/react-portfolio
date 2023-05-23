import React from 'react';
import './App.css';

function Home() {
  return (
    <div className="home" id="homeComp">
      <div className="row">
        <div className="col-md-4">
          <img id="profile" src={process.env.PUBLIC_URL + "/profilePhoto.jpg"} alt="Profile" />
        </div>
        <div className="col-md-8">
          <div className="ms-3">
            <h1 name='home'>Hi, I am Asta <br /> Front-end Web Developer</h1>
            <p id="statement">You landed on my portfolio website. I post my projects here as I learn.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
