import React from 'react';
import '../Styles/NavBar.scss'

const NavBar = () => {
    return (
       <nav className="navbar">
           <div className="navbar-left">
               <img src="https://api-test.pharmit.de/static/pharm-it-logo.jpg" alt="pharmait-logo" />
               <p>Organization-name</p>
           </div>
           <div className="navbar-right">
                <p>User-name</p>
                <img src="" alt="user-icon" />
           </div>
       </nav>
    )
}

export default NavBar;