import React from "react";

import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};


const Home = () => {
    return (
        <div className="p-4 text-center flex-grow">
                <h1>Hello, My name is <span className="orange bold">Graham Holland</span></h1><br />
                <h2>I am a web developer.</h2>
        </div>
    )
}

export default Home;