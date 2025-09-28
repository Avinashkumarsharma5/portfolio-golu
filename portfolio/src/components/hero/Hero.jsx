import React from 'react'
import './hero.css'
import profile_img from '../../assets/profile_img.svg'

const hero = () => {
  return (
    
<div className='hero'>
<img src={profile_img} alt="" />
<h1>Hi, I'm  , fronted developer based in india.</h1>
<p>I'm a Full Stack Developer</p>
<div className="hero-action">
    <div className="hero-connect">connect with me</div>
    <div className="hero-resume">my resume</div>
</div>
    </div>
  )
}

export default hero