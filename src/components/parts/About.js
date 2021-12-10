import React from "react";

const About = () => {
    return (
        <div className="p-4">
            <div>
                <h1>Hello, My name is Graham Holland</h1>
                <h2>I am a web developer.</h2>
                <br />
                <p>
                    I have been working for the last 5 years in various aspects of technology, but mostly focused in web developemnt. I started wit IT support and basic web updates and management, but my interest in web developemnt quickly drew me into doing more full stack projects.
                </p>
                <p>
                    Most of the projects that I have worked on are end to end, primarily written in PH and Javascript. I have experience doing database design and implementation, REST API creation and frontend displays.
                </p>
            </div>
            <div>
                <h3>Technical Skills</h3>
                <p>
                    I have leared a variety of technical skills in my work, below are some of the items I have worked on.
                </p>
                <div className="flex">
                    <div className="flex-grow">
                        <strong>Languages</strong>
                        <ul className="list-disc list-outside pl-6">
                            <li>PHP</li>
                            <li>Javascript</li>
                            <li>JQuery</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                    <div className="flex-grow">
                        <strong>Database Management</strong>
                        <ul className="list-disc list-outside pl-6">
                            <li>MySQL</li>
                            <li>phpMyAdmin</li>
                            <li>MySQL Workbench</li>
                        </ul>
                    </div>
                    <div className="flex-grow">
                        <strong>Code</strong>
                        <ul className="list-disc list-outside pl-6">
                            <li>GitHub</li>
                            <li>Docker</li>
                            <li>WSL2</li>
                            <li>Linux</li>
                            <li>NPM</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;