import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import jobList from './jobList';
// import jobDetail from './jobDetail';
import personalProjectList from './gitHubPersonalProjects';
import workProjectList from './gitHubWorkProjects';
// import projectDetail from './gitHubProjectDetail';


import Home from './parts/Home';
import About from './parts/About';

import Header from './Header';
import Footer from './Footer';

const App = () => {
    return (
        <div id="main-content" className="dark:text-white bg-white dark:bg-gray-800 grid grid-cols-1 md:grid-cols-medium lg:grid-cols-large xl:grid-cols-xl min-h-screen w-screen max-w-screen">
            <BrowserRouter>
                <Header />
                <div className="h-auto overflow-auto max-h-auto flex md:pt-40">
                    <Route path="/" exact component={About} />
                    <Route path="/experience" exact component={jobList} />
                    <Route path="/personal-projects" exact component={personalProjectList} />
                    <Route path="/work-projects" exact component={workProjectList} />
                </div>
            </BrowserRouter>
            <Footer />
        </div>
    )
};

export default App;