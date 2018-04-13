import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../../pages/Home.jsx';
import Contact from '../../pages/Contact.jsx';
import TodoApp from '../TodoApp.jsx';

const Routes = () => {
    return (
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
        </div>
    );
};

export default Routes;