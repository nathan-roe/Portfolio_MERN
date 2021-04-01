import React from 'react';
import mountains from '../static/images/mountains.png';
import portfolio from '../static/images/portfolio.jpg';
import linkedCS from '../static/images/linkedCS.jpg';
import faceDetection from '../static/images/faceDetection.jpg';
import chatApp from '../static/images/chatApp.jpg';
import weatherapp from '../static/images/weatherapp.jpg';
import scamscraper from '../static/images/scamscraper.jpg';
import {navigate} from '@reach/router';
import '../static/css/projects_styles.css';
const Projects = () => {
    return (
        <div className='main'>
            <header className='header'>
                <div>
                </div>
                <div className='nav'>
                    <h3 className='link' onClick={() => {
                        navigate('/'); window.location.reload();
                    }}>Home</h3>
                    <h3 className='current'>Projects</h3>
                    <h3 className='link' onClick={() => {
                        navigate('/contact'); window.location.reload();
                    }}>Contact</h3>
                    <h3 className='link' onClick={() => {
                        navigate('/endless'); window.location.reload(); 
                    }}>Endless</h3>
                </div>
            </header>
            <div className='body'>
                <img src={mountains} className='mainImg'/>
                <div className='floor'></div>
                <div className='row'>
                    <div className='project'>
                        <div className='projectHeader'>
                            <h3>This Project!</h3>
                        </div>
                        <div className='projectMain'>
                            <img src={portfolio} className='projectImg'/>
                        </div>
                        <div className='projectFooter'>
                            <p className='projectFooterContent'>Made with React, Node.js, Express, @reach/router, custom CSS, AWS EC2, AWS Route 53</p>
                        </div>
                    </div>
                    <div className='project'>
                        <div className='projectHeader'>
                            <h3>LinkedCS</h3>
                        </div>
                        <div className='projectMain'>
                            <img src={linkedCS} className='projectImg'/>
                        </div>
                        <div className='projectFooter'>
                            <p className='projectFooterContent'>Single page social networking application allowing 1st, 2nd, and 3rd degree connections using: C#, Entity Framework Core, ASP.NET Core, MySQL, AJAX, Razor</p>
                        </div>
                    </div>
                    <div className='project'>
                        <div className='projectHeader'>
                            <h3>Face Authentication</h3>
                        </div>
                        <div className='projectMain'>
                        <img src={faceDetection} className='projectImg'/>
                        </div>
                        <div className='projectFooter'>
                            <p className='projectFooterContent'>Login authentication application using face detection leveraging: Python, Django, OpenCV, AWS EC2</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row2'>
                <div className='project'>
                    <div className='projectHeader'>
                        <h3>Chat App</h3>
                    </div>
                    <div className='projectMain'>
                    <img src={chatApp} className='projectImg'/>
                    </div>
                    <div className='projectFooter'>
                        <p className='projectFooterContent'>A communication app that allows users to access different rooms and send messages in real time using: Socket.io, MongoDB, Mongoose, Express, Node.js, @reach/router</p>
                    </div>
                </div>
                <div className='project'>
                    <div className='projectHeader'>
                        <h3>Weather App</h3>
                    </div>
                    <div className='projectMain'>
                    <img src={weatherapp} className='projectImg'/>
                    </div>
                    <div className='projectFooter'>
                        <p className='projectFooterContent'>A weather finder app that takes a user's input or map click and finds the seven day forcast in that region using: Google Maps API, Google Places, Google Geocoding, 7Timer! Weather API, Node.js, HTML, CSS, jQuery/AJAX, Express</p>
                    </div>
                </div>
                <div className='project'>
                    <div className='projectHeader'>
                        <h3>ScamScraper</h3>
                    </div>
                    <div className='projectMain'>
                    <img src={scamscraper} className='projectImg'/>
                    </div>
                    <div className='projectFooter'>
                        <p className='projectFooterContent'>A web scraper that follows links and detects potential malicious code on websites using: C#, ASP.NET Core, LINQ, Entity Framework Core, MySQL, JavaScript</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Projects;