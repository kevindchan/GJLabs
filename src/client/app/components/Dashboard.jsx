import React, {Component} from 'react';
import { Link } from 'react-router';
import BeerEntry from './BeerEntry.jsx';

export default ({submitHandler, beers}) => {
  return (
    <div className='container'>
      <div className="collection">
        <a href="/preference" className="collection-item">Preference</a>
        <a href="/beerlog" className="collection-item">Beer Log</a>
      </div>
    </div>    
  )
}
