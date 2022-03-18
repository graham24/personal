import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="w-full">
      <Helmet>
        <title>Graham Holland - Web Developer</title>
      </Helmet>
      <div className="p-4">
        <div>
          <h1>Hello, My name is Graham Holland</h1>
          <h2>I am a web developer.</h2>
          <br />
          <p>
            I have been working for the last 5 years in various aspects of web
            development and IT support. I started with IT support and basic web
            updates and management, but my interest in web development quickly
            drew me into doing more full stack projects.
          </p>
          <p>
            For most of these projects I have worked with the client to create a
            custom solutions for their needs. I am able to translate their needs
            into a functional web application. This has generally involved
            planning, designing and deploying the database structure,
            implementing a backend REST API service, and creating a front end
            interface for the final product. The front end interface will
            generally consist of an admin interface as well as an end user
            interface.
          </p>
          <p>
            During these projects I work with the client to make sure that what
            I am building meets their needs. I go through significant testing
            and quality control before finalizing, and fix any bugs or issues
            that may arise. As projects grow so can the requirements from the
            customer, and I have been able to adapt and adjust the projects so
            they continue to function as requested.
          </p>
          <p>
            Most of the projects that I have worked on are end to end, primarily
            written in PHP and Javascript. I have experience doing database
            design and implementation, REST API creation and frontend displays.
          </p>
        </div>
        <div>
          <h3>Technical Skills</h3>
          <p>
            I have learned a variety of technical skills in my work, below are
            some of the languages and technologies that I am proficient in. I
            have been using these languages and technologies for the last 5
            years as a web developer. I also have a large knowledge of general
            website know how and IT skills.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="p-4">
              <strong>Languages</strong>
              <ul className="list-disc list-outside pl-6">
                <li>PHP</li>
                <li>Javascript</li>
                <li>JQuery</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div className="p-4">
              <strong>Database Management</strong>
              <ul className="list-disc list-outside pl-6">
                <li>MySQL</li>
                <li>phpMyAdmin</li>
                <li>MySQL Workbench</li>
              </ul>
            </div>
            <div className="p-4">
              <strong>Code</strong>
              <ul className="list-disc list-outside pl-6">
                <li>GitHub</li>
                <li>Docker</li>
                <li>WSL2</li>
                <li>Linux</li>
                <li>NPM</li>
                <li>Jest</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
