import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import RouteChangeTracker from './RouteChangeTracker'
import ReactGA from 'react-ga';

import Header from './Header';
import Footer from './Footer';

const jobList = lazy(() => import('./jobList'));
const personalProjectList = lazy(() => import('./gitHubPersonalProjects'));
const workProjectList = lazy(() => import('./gitHubWorkProjects'));
const About = lazy(() => import('./parts/About'));

ReactGA.initialize('UA-215325150-1');

const App = () => {
    return (
        <div id="main-content" className="dark:text-white bg-white dark:bg-gray-800 grid grid-cols-1 md:grid-cols-medium lg:grid-cols-large xl:grid-cols-xl min-h-screen max-w-screen">
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Header />
                    <div className="h-auto overflow-auto max-h-auto flex md:pt-40">
                        <Route path="/" exact component={About} />
                        <Route path="/experience" exact component={jobList} />
                        <Route path="/personal-projects" exact component={personalProjectList} />
                        <Route path="/work-projects" exact component={workProjectList} />
                    </div>
                    <Footer />
                </Suspense>
                <div>
                    <RouteChangeTracker />
                </div>
            </BrowserRouter>
        </div>
    )
};

export default App;