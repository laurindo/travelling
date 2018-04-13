import React from 'react';

import Routes from './components/Routes';
import Header from './components/Header.jsx';
import { HeaderNavItems } from './utils/nav-items-utils';

const BaseLayout = () => {
    return (
        <div className='base'>
            <Header name="my header" navItems={ HeaderNavItems } />
            <Routes />
        </div>
    );
};

export default BaseLayout;