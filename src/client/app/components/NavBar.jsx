import React from 'react';
import { Link } from 'react-router';

export default ({logoutHandler}) => {
  return (
    <div className="navbar-fixed">
      <nav>
       <div className="nav-wrapper" style={{backgroundColor: '#1d5f8b'}}>
         <a href="#" className="brand-logo center">Brü</a>
         <ul id="nav-mobile" className="left">
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
        <ul id="nav-mobile" className="right">
          <li><a onClick={logoutHandler} href="#">Logout</a></li>
        </ul>
       </div>
     </nav>
   </div>
   );
}