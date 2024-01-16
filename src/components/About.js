import React from 'react'
import about from '../assets/about.jpg'
import Fade from 'react-reveal/Fade';


const About = () => {
  return (
    <div className='about d-flex'>
       <Fade left>
        <img src={about} alt="" />
        </Fade>

        <Fade right>
        <div className="about-text">
          <h2>About</h2>
          <p>          
            Since bursting on to the scene in 2011, Hawksworth Restaurant has earned its place amongst the finest restaurants in the world, winning multiple accolades from renowned local and international authorities. Recognized for its compelling and technically skilled cuisine, deep and diverse wine list, inventive cocktail program, and warm, genuine hospitality.

            Located in the Rosewood Hotel Georgia, the dining room is a Vancouver landmark that is steeped in history, reimagined by Studio Munge to deliver three distinct rooms including the cocktail bar and lounge, the elegant pearl room, and the art room.
          </p>
        </div>
        </Fade>
    </div>
  )
}

export default About