import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import jobList from './jobList';
import jobDetail from './jobDetail';

import Home from './parts/Home';

import Header from './Header';
import Footer from './Footer';

const App = () => {
    return (
        <div id="main-content">
            <BrowserRouter>
                <Header />
                <div className="content-area">
                    <Route path="/" exact component={Home} />
                    <div className="jobs">
                        <Route path="/experience" exact component={jobList} />
                        <Route path="/experience" exact component={jobDetail} />
                    </div>
                </div>
            </BrowserRouter>
            <Footer />
        </div>
    )
};

export default App;