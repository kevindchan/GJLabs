import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <nav>
     <div className="nav-wrapper">
       <a href="#" className="brand-logo center">Bru</a>
       <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li>
          <Link activeClassName='active' to='/results'>
            Results
          </Link>
        </li>
        <li>
          <Link activeClassName='active' to='/'>
            Two
          </Link>
        </li>
        <li>
          <Link activeClassName='active' to='/'>
            Three
          </Link>
        </li>
       </ul>
     </div>
   </nav>
   );
}