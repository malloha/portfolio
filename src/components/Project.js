import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi"


function Project() {
  return (
    <div className="">
      <div className="heading"><h1>Portfolio</h1></div>
      <div className="projects-wrapper">

        <div className="individual-project">
          <a href="http://followmeto.surge.sh/">
            <img src="https://i.imgur.com/UMPGN3k.png" alt="app"></img>
          </a>
          <div className="project-description">
            <h1>Follow Me To</h1>
            <p>#FollowMeTo is an application that helps tourists to explore a city on foot by creating a plan for a city walk.
              Users can enter a city and time they have and the app would take care of the rest.</p>
            <h2>Technologies </h2>
            <div className="tech">
              <li>Javascript</li>
              <li>CSS/HTML</li>
              <li>Git</li>
            </div>
            <h2>Links</h2>
            <div className="links">
              <a href="https://github.com/malloha/project_1"><FaGithub className="icon" /><h6>Github</h6></a>
              <a href="http://followmeto.surge.sh/"><FiGlobe className="icon" /><h6>Live Website</h6></a>
            </div>
          </div>

        </div>
        <div className="individual-project">
          <div className="project-description-right">
            <h1>MyFitnessTracker</h1>

            <p>My Fitness Tracker is an App that enables you to track your daily physical activity and nutritional intake by giving you an option to log your Calorie Intake, Water Intake, Weight Tracker and Physical Activity.</p>
            <h2>Technologies </h2>
            <div className="tech">


              <li>React</li>
              <li>Node.js</li>
              <li>Javascript</li>
              <li>CSS/HTML</li>
              <li>Git</li>

            </div>
            <h2>Links</h2>
            <div className="links">
              <a href="https://github.com/malloha/project_2"><FaGithub className="icon" /><h6>Github</h6></a>
              <a href="http://my-fitness-tracker.surge.sh/"><FiGlobe className="icon" /><h6>Live Website</h6></a>
            </div>
          </div>
          <div className="project-image-right">
            <a href="http://my-fitness-tracker.surge.sh/">
              <img src="https://i.imgur.com/lfnZovH.png" alt="app"></img>
            </a>
          </div>
        </div>


        <div className="individual-project">
          <a href="http://eventlynyc.surge.sh/">
            <img src="https://i.imgur.com/GrGuq5t.png" alt="app"></img>
          </a>
          <div className="project-description">
            <h1>Evently</h1>
            <p>Evently is a platform for creating, finding and sharing events in your local communities in various categories. People can use Evently to find new events happening around them, create events and meet people who have similar passions.</p>
            <h2>Technologies </h2>
            <div className="tech">
              <li>React</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Javascript</li>
              <li>CSS/HTML</li>
              <li>Git</li>

            </div>
            <h2>Links</h2>

            <div className="links">
              <a href="https://github.com/malloha/evently"><FaGithub className="icon" /><h6>Github</h6></a>
              <a href="http://eventlynyc.surge.sh/"><FiGlobe className="icon" /><h6>Live Website</h6></a>
            </div>
          </div>
        </div>


        <div className="individual-project">
          <div className="project-description-right">
            <h1>Cafe Luluc Website</h1>
            <p>A colloboration with UX Designers to redesign the website of the Cafe Luluc an exquisite cafe in Brooklyn.</p>
            <h2>Technologies </h2>
            <div className="tech">
              <li>React</li>
              <li>Javascript</li>
              <li>CSS/HTML</li>
              <li>Git</li>
            </div>
            <h2>Links</h2>
            <div className="links">
              <a href="https://github.com/malloha/cafe-luluc"><FaGithub className="icon" /><h6>Github</h6></a>
              <a href="hhttp://luluc.surge.sh/"><FiGlobe className="icon" /><h6>Live Website</h6></a>
            </div>
          </div>
          <div className="project-image-right">
            <a href="http://luluc.surge.sh/">
              <img src="https://i.imgur.com/kzWYcLh.png" alt="app" className="luluc"></img>
            </a>
          </div>
        </div>





        <div className="individual-project">
          <a href="https://github.com/malloha/project4">
            <img src="https://i.imgur.com/oNP6jta.png" alt="app"></img></a>
          <div className="project-description">
            <h1>ReserveTable</h1>
            <p>ReserveTable is an online resturant-reservation app that lets you book a reservation at your fav resturant for a specific time slot you want.</p>
            <h2>Technologies </h2>
            <div className="tech">
              <li>React</li>
              <li>Node.js</li>
              <li>Ruby on Rails</li>
              <li>Javascript</li>
              <li>CSS/HTML</li>
              <li>Git</li>
            </div>
            <h2>Links</h2>
            <div className="links">
              <a href="https://github.com/malloha"><FaGithub className="icon" /><h6>Github</h6></a>
              <a href="https://github.com/malloha"><FiGlobe className="icon" /><h6>Live Website</h6></a>
            </div>
          </div>
        </div>

      </div >
    </div >
  );
}

export default Project;
