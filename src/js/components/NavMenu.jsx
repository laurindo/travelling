import React from 'react';

const NavMenu = ({ navItems }) => {
    const getItems = () => {
        return navItems.map((item, index) => {
            return (
                <li key={index}>
                    <a href={ item.link } className={ item.color }>
                        <span><i className={ `fas fa-${item.icon}` }></i></span>
                        <span>&nbsp;&nbsp;{ item.i18n }</span>
                    </a>
                </li>
            );
        });
    };

    return (
        <ul className='horizontal'>
            { getItems() }
        </ul>
    );
};

export default NavMenu;