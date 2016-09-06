import React, {Component} from 'react';
import BeerEntry from './BeerEntry.jsx';

export default ({beers}) => {
  return (
    <div className='row'>
      {beers.map((beer) => {
        return <BeerEntry key={beer} beer={beer} />;
      })}
    </div>    
  )
}
