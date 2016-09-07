import React, {Component} from 'react';
import { Link } from 'react-router';
import BeerEntry from './BeerEntry.jsx';

export default ({submitHandler, beers}) => {
  return (
    <div className='container'>
    <ul>
     <li>
       <Link activeClassName='active' to='/preference'>
         Preference
       </Link>
     </li>
     <li>
       <Link activeClassName='active' to='/beerlog'>
         Beer Log
       </Link>
     </li>
    </ul>
    </div>    
  )
}
