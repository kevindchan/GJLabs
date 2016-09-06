import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <nav>
     <div className="nav-wrapper">
       <a href="#" className="brand-logo center">Bru</a>
       <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li>
          <Link to='/results'>
            One
          </Link>
        </li>
        <li>
          <Link to='/'>
            Two
          </Link>
        </li>
        <li>
          <Link to='/'>
            Three
          </Link>
        </li>
       </ul>
     </div>
   </nav>
   );
}