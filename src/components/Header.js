import React from 'react';
import Lottie from 'react-lottie-player';
import { Link } from 'react-router-dom';

import emailIcon from '../media/animations/72126-email-verification.json';

import headshot from '../media/Headshot.jpg'

const Header = () => {
    return (
        <header>
            <div id="my-info">
                <div className="headshot">
                    <Link to="/"><img src={headshot} alt="Graham Holland Headshot" /></Link>
                </div>
                <div className="name">
                    <h1>Graham Holland</h1>
                </div>
                <div className="title">
                    <h2>Web Developer</h2>
                </div>
                {/*<Link to="/about">About</Link>*/}
                <ul className="main-menu" >
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/experience">Work Experience</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
                <div className="contact-info">
                    <h3 className="email">
                        <button>
                            <a href="mailto:gdholland01@gmail.com">
                                <Lottie
                                    loop
                                    animationData={emailIcon}
                                    play
                                    style={{ width: 'auto', height: 50, display: 'inline-block' }}
                                />
                                <div> Email Me</div>
                            </a>
                        </button>
                    </h3>
                    <h3 className="phone"><a href="tel:+13036565407">303-656-5407</a></h3>
                </div>
                <div className="nav-menu">

                </div>
            </div>
        </header>
    )
}

export default Header;