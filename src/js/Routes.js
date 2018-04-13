import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';

const Routes = () => {
    return (
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
        </div>
    );
};

export default Routes;