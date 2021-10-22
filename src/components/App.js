import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import jobList from './jobList';
import jobDetail from './jobDetail';
import projectList from './gitHubProjects';
import projectDetail from './gitHubProjectDetail';

import Home from './parts/Home';
import About from './parts/About';

import Header from './Header';
import Footer from './Footer';

const App = () => {
    return (
        <div id="main-content">
            <BrowserRouter>
                <Header />
                <div className="content-area">
                    <div className="content">
                        <Route path="/" exact component={Home} />
                        <Route path="/about" exact component={About} />
                        <div className="two-column">
                            <Route path="/experience" exact component={jobList} />
                            <Route path="/experience" exact component={jobDetail} />
                            <Route path="/projects" exact component={projectList} />
                            <Route path="/projects" exact component={projectDetail} />
                        </div>
                    </div>
                </div>
            </BrowserRouter>
            <Footer />
        </div>
    )
};

export default App;