import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
             <h1>Navigation routers system with Header</h1>
             <nav>
                 <CustomLink to="/">Home</CustomLink>
                 <CustomLink to="/about">About</CustomLink>
                 <CustomLink to="/contact">Contact</CustomLink>
                 <CustomLink to="/friends">Friends</CustomLink>
                 <CustomLink to='/posts'>Posts</CustomLink>
             </nav>
        </div>
    );
};

export default Header;