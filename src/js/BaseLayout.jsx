import React from 'react';

import Routes from './Routes';
import Header from './components/Header';
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