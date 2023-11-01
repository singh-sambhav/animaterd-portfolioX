import React from 'react'
import './Hero.scss'
 const Hero = () => {
  return (
    <div className='hero'>
      <div className="wrapper">

        <div className="textContainer">
          <h2>Sambhav Singh</h2>
          <h1>Web Developer</h1>
          <div className="buttons">
            <button>See the Latest Works</button>
            <button>Contact Me</button>
          </div>
          <img src="/scroll.png" alt="" />
        </div>
      </div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" style={{width:'608px'}}/>
      </div>
    </div>
  )
}

export default Hero
