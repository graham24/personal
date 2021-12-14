import React from 'react';
import Lottie from 'react-lottie-player';
import { NavLink } from 'react-router-dom';

import emailIcon from '../media/animations/72126-email-verification.json';

import headshot from '../media/Headshot-200.jpg'

const Header = () => {
    return (
        <header className="p-4">
            <div id="my-info" className="text-center">
                <div className="headshot">
                    <NavLink to="/"><img className="w-32 lg:w-48 m-auto rounded-full" src={headshot} alt="Graham Holland Headshot" /></NavLink>
                </div>
                <div className="name">
                    <h1>Graham Holland</h1>
                </div>
                <div className="title">
                    <h2>Web Developer</h2>
                </div>
                {/*<Link to="/about">About</Link>*/}
                <ul className="p-4 flex main-menu md:block" >
                    <li className="flex-1"><NavLink activeClassName="text-yellow-600" to="/experience" className="hover:underline">Work Experience</NavLink></li>
                    <li className="flex-1"><NavLink activeClassName="text-yellow-600" to="/personal-projects" className="hover:underline">Personal Projects</NavLink></li>
                    <li className="flex-1"><NavLink activeClassName="text-yellow-600" to="/work-projects" className="hover:underline">Work Projects</NavLink></li>
                </ul>
                <div className="contact-info">
                    <h3 className="email">
                        <button>
                            <a className="flex items-center" href="mailto:gdholland01@gmail.com">
                                <Lottie
                                    loop
                                    animationData={emailIcon}
                                    play
                                    style={{ width: 'auto', height: 50, display: 'inline-block' }}
                                />
                                <span> Email Me</span>
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