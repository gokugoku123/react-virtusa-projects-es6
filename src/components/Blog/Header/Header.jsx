import classes from './Header.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = ( props ) => {
    return ( 
        <>
            <nav data-testid="headerContainer" className={classes.NavContainer}>
                <div className={classes.NavBrand}>
                    Bat Times
                </div>
                <div className={classes.NavLinks}>
                    <NavLink to="/compose" className={classes.NavLinkItem}> <p data-testid="composeLink">Compose</p></NavLink>
                    <NavLink to="/" className={classes.NavLinkItem}><p data-testid="postsLink">Posts</p></NavLink>
                </div>
            </nav>

            
        </>
     );
}
 
export default Header;