import React from 'react';
import mountains from '../static/images/mountains.png';
import linkedin from '../static/images/linkedin.png';
import github from '../static/images/github.png';
import email from '../static/images/email.png';
import person_cheer from '../static/images/kenney_platformercharacters/PNG/Female/Poses/female_cheer1.png';
import {navigate} from '@reach/router';
import '../static/css/contact_styles.css';
const Contact = () => {
    const person_style = {
        zIndex: 0,
        position: 'absolute',
        top: '80vh',
        left:   `40vw`,
        width: '4vw',
        height: '10vh',
        transform: `scaleX(-1)`,
    }
    return (
        <div className='main'>
            <header className='header'>
                <div>
                </div>
                <div className='nav'>
                    <h3 className='link' onClick={() => {
                        navigate('/'); window.location.reload();
                    }}>Home</h3>
                    <h3 className='link' onClick={() => {
                        navigate('/projects'); window.location.reload();
                    }}>Projects</h3>
                    <h3 className='current'>Contact</h3>
                    <h3 className='link' onClick={() => {
                        navigate('/endless'); window.location.reload(); 
                    }}>Endless</h3>
                </div>
            </header>
            <div className='body'>
                <img src={mountains} className='mainImg' alt=''/>
                <div className='floor'></div>
                <img src={person_cheer} style={person_style} alt=''/>
                <div className='about'>
                    <h1 className='aboutH1'>Hey, thanks for checking out my portfolio!</h1>
                    <p className='aboutP P1'>I'm a passionate software developer who's dedicated to producing quality code for business critical software. I have experience in C#/.NET Core, MERN (MongoDB, Express, React, Node.js), Python, as well many more languages, libraries, and databases.</p>
                    <p className='aboutP'>If you're interested in learning more about me, or just want to reach out, feel free to contact me through any of the below links or call me at <span className='phoneNumber'>208-954-3979</span>.</p>
                    <div className='aboutLinks'>
                        <a href='https://github.com/nathan-roe' target='_blank' rel="noreferrer" className='icon'><img src={github} className='icon' alt=''/></a>
                        <a href='https://www.linkedin.com/in/nathan-zachary-roe/' target='_blank' rel="noreferrer" className='icon'><img src={linkedin} className='icon' alt=''/></a>
                        <a href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqXxhKXMcCTGbdVZZPmGThCZPRZzfgKSfmDBghBHpNnLMVKhWDTjjNCpnkgvLGlHxqpGkg' target='_blank' rel="noreferrer" className='icon'><img src={email} className='icon' alt=''/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;