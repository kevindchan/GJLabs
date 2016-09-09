import React from 'react';
import { Link } from 'react-router';

export default ({logoutHandler}) => {
  return (
    <div className="navbar-fixed">
      <nav>
       <div className="nav-wrapper" style={{backgroundColor: '#1d5f8b'}}>
         <a href="#" className="brand-logo center">Bru</a>
         <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <Link activeClassName='active' to='/'>
              Dashboard
            </Link>
          </li>
          <li>
            <Link activeClassName='active' to='/beerlog'>
              Beer Log
            </Link>
          </li>
         </ul>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a onClick={logoutHandler} href="#">Logout</a></li>
        </ul>
       </div>
     </nav>
   </div>
   );
}